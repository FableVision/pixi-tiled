import { Sprite } from '@pixi/sprite';
import { ITiledTile, ITiledSprite } from './../ITiledMap';
import { TileAnimator } from './TiledAnimator';
import { ITiledPtimitive } from './TiledPrimitives';
export declare class TiledSprite extends Sprite {
    tileFrame?: ITiledTile;
    source?: ITiledSprite;
    primitives: ITiledPtimitive[];
    properties: Record<string, any>;
    private _animator?;
    constructor(source: ITiledSprite, createAnimator?: boolean, autoInit?: boolean);
    init(): void;
    set anim(anim: TileAnimator | undefined);
    get anim(): TileAnimator | undefined;
    clone(): TiledSprite;
}
