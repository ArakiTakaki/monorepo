import { forwardRef, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState } from 'react';
import * as PIXI from 'pixi.js';
import { is } from '@workspaces/utils';

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

export const PixiComponent = forwardRef<PixiComponentRef, PixiComponentProps>((props, ref) => {
  const refCanvasWrapper = useRef<HTMLDivElement>(null);
  const [pixi, setPixi] = useState<PIXI.Application | null>(null);
  const raf = useRaf();
  const resizeObserver = useMemo(
    () =>
      new ResizeObserver(() => {
        resize();
      }),
    []
  );

  useImperativeHandle(
    ref,
    () => {
      return {
        app: pixi || null,
        wrap: refCanvasWrapper.current || null,
        canvas: (pixi?.view || null) as HTMLCanvasElement | null,
      };
    },
    [pixi]
  );

  useLayoutEffect(() => {
    // validation
    if (is.nullable(refCanvasWrapper.current)) throw new Error('wrapper is not ready');

    // lifecycle
    const app = construct();
    render(app);
    resize(app);

    // listeners
    resizeObserver.observe(refCanvasWrapper.current);
    return () => {
      destruct();
    };
  }, []);

  function construct() {
    const app = new PIXI.Application({
      antialias: props.antialias,
      backgroundColor: 0x1199aa,
    });

    if (is.nullable(refCanvasWrapper.current)) throw new Error('not found wrapper');
    refCanvasWrapper.current.appendChild(app.view as HTMLCanvasElement);
    if (is.not.nullable(props.onConstruct)) props.onConstruct(app);
    setPixi(app);
    return app;
  }

  function render(app: PIXI.Application | null = null) {
    const application = app || pixi;
    if (is.nullable(application)) return;
    application.render();
    raf.render(() => render());
  }

  function destruct() {
    if (is.not.nullable(pixi)) {
      if (is.not.nullable(props.onDestruct)) props.onDestruct(pixi);
      pixi.destroy(true);
      setPixi(null);
    }
    raf.stop();
  }

  function resize(app: PIXI.Application | null = null) {
    const application = app || pixi;
    if (is.nullable(application) || is.nullable(refCanvasWrapper.current)) return;
    const width = refCanvasWrapper.current.clientWidth;
    const height = refCanvasWrapper.current.clientHeight;
    application.renderer.resize(width, height);
    application.view.width = width;
    application.view.height = height;
    application.render();
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
