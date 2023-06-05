import { MouseEventHandler, useMemo, useRef } from 'react';
import * as PIXI from 'pixi.js';
import { PixiComponent, PixiComponentRef } from '@/components/commons/pixi/PixiComponent';
import { distance2D } from '@/utils/utils';

class PlayableCharactor extends PIXI.Graphics {
  public movementSpeed = 2.5;
  public targetPosition = {
    x: 0,
    y: 0,
  };
  constructor() {
    super();
    this.lineStyle(2, 0x1111ff, 1, 1);
    this.beginFill(0x22dd22);
    this.drawCircle(0, 0, 20);
    this.endFill();
    this.moveAnimation = this.moveAnimation.bind(this);
    this.moveAnimation();
  }

  move(x: number, y: number) {
    // コントローラーの場合は、movent offset通りに入れればよさそう。
    this.targetPosition.x = x;
    this.targetPosition.y = y;
  }

  private moveAnimation() {
    requestAnimationFrame(this.moveAnimation);
    const distance = distance2D(this.position, { x: this.targetPosition.x, y: this.targetPosition.y });
    const movementOffset = this.movementSpeed / Math.max(distance, this.movementSpeed);

    this.transform.position.x += (this.targetPosition.x - this.position.x) * movementOffset;
    this.transform.position.y += (this.targetPosition.y - this.position.y) * movementOffset;
  }
}

const SampleGame = () => {
  const refWrap = useRef<HTMLDivElement>(null);
  const refGame = useRef<PixiComponentRef>(null);

  const charctor = useMemo(() => {
    return new PlayableCharactor();
  }, []);
  console.log(charctor);

  const handleRightClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    charctor.move(x, y);
  };

  const initialize = (app: PIXI.Application) => {
    app.stage.addChild(charctor);
  };

  return (
    <div style={{ width: 1200, height: 800 }} ref={refWrap} onContextMenu={handleRightClick}>
      <PixiComponent onConstruct={initialize} ref={refGame} />
    </div>
  );
};

export default SampleGame;
