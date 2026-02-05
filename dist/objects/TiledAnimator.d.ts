import { TiledSprite } from "./TiledSprite";
import { AnimatedSprite } from "@pixi/sprite-animated";
import { ITiledTile } from "./../ITiledMap";
export declare class TileAnimator {
    private _animator;
    private _childs;
    private _tile;
    constructor(tile: ITiledTile);
    __onFrame(): void;
    get anim(): AnimatedSprite;
    add(s: TiledSprite, strict?: boolean): void;
    remove(s: TiledSprite): void;
}
