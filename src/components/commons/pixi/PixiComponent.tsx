import { forwardRef, useImperativeHandle, useLayoutEffect, useMemo, useRef } from 'react';
import * as PIXI from 'pixi.js';
import is from '@/utils/is';

interface PixiComponentProps {
  antialias?: boolean;
  onLoseContext?: (context: PIXI.Application) => void;
  onRender?: (context: PIXI.Application) => void;
  onConstruct?: (context: PIXI.Application) => void;
  onDestruct?: (context: PIXI.Application) => void;
  onTick?: (context: PIXI.Application) => void;
  onResize?: (context: PIXI.Application) => void;
}
export interface PixiComponentRef {
  app?: PIXI.Application | null;
  warp?: HTMLDivElement | null;
  canvas?: HTMLCanvasElement | null;
}

export const PixiComponent = forwardRef<PixiComponentRef>((props: PixiComponentProps, ref) => {
  const refCanvasWrapper = useRef<HTMLDivElement>(null);
  const pixi = useRef<PIXI.Application | null>(null);
  const raf = useRaf();
  const resizeObserver = useMemo(() => new ResizeObserver(resize), []);

  useImperativeHandle(ref, () => {
    return {
      app: pixi.current || null,
      wrap: refCanvasWrapper.current || null,
      canvas: (pixi.current?.view || null) as HTMLCanvasElement | null,
    };
  });

  useLayoutEffect(() => {
    // validation
    if (is.nullable(refCanvasWrapper.current)) throw new Error('wrapper is not ready');

    // listeners
    resizeObserver.observe(refCanvasWrapper.current);

    // lifecycle
    construct();
    resize();
    render();
    return () => {
      destruct();
    };
  }, []);

  function construct() {
    const app = new PIXI.Application({
      antialias: props.antialias,
      backgroundColor: 0x1199aa,
    });
    app.ticker.stop();

    if (is.nullable(refCanvasWrapper.current)) throw new Error('not found wrapper');
    refCanvasWrapper.current.appendChild(app.view as HTMLCanvasElement);
    if (is.not.nullable(props.onConstruct)) props.onConstruct(app);
    pixi.current = app;
  }

  function render() {
    if (is.nullable(pixi.current)) return;
    pixi.current.render();
    raf.render(() => render());
  }

  function destruct() {
    if (is.not.nullable(pixi.current)) {
      if (is.not.nullable(props.onDestruct)) props.onDestruct(pixi.current);
      pixi.current.destroy(true);
      pixi.current = null;
    }
    raf.stop();
  }

  function resize() {
    if (is.nullable(pixi.current) || is.nullable(refCanvasWrapper.current)) return;
    const width = refCanvasWrapper.current.clientWidth;
    const height = refCanvasWrapper.current.clientHeight;
    pixi.current.renderer.resize(width, height);
    pixi.current.view.width = width;
    pixi.current.view.height = height;
    pixi.current.render();
  }

  return <div ref={refCanvasWrapper} style={{ width: '100%', height: '100%', overflow: 'hidden' }} />;
});
PixiComponent.displayName = 'PixiComponent';

function useRaf() {
  const refRafID = useRef<ReturnType<typeof requestAnimationFrame> | undefined>();
  const render = (...args: Parameters<typeof requestAnimationFrame>) => {
    const [rafCb] = args;
    refRafID.current = requestAnimationFrame(rafCb);
  };

  const stop = () => {
    if (is.nullable(refRafID.current)) return;
    cancelAnimationFrame(refRafID.current);
  };

  return {
    render,
    stop,
  };
}
