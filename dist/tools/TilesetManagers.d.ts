import { ITiledTileset, ITiledTile } from '../ITiledMap';
import { MultiSpritesheet } from './TiledMultiSheet';
import { Spritesheet } from '@pixi/spritesheet';
import { Texture } from '@pixi/core';
import { EventEmitter } from '@pixi/utils';
export declare class TilesetManager extends EventEmitter {
    private _tileSets;
    private _sheet;
    private _loadQueue;
    baseUrl: string;
    loadUnknowImages: boolean;
    constructor(_tileSets: ITiledTileset[], sheet?: MultiSpritesheet | Spritesheet | Record<string, Texture<any>>);
    register(spritesheet: MultiSpritesheet | Spritesheet): void;
    get spritesheet(): MultiSpritesheet;
    getTileByGid(gid: number, tryLoad?: boolean): ITiledTile | undefined;
    getTileByTile(tile: ITiledTile | null, tryLoad?: boolean, skipAnim?: boolean): ITiledTile | undefined;
    getTileSetByGid(gid: number): ITiledTileset | undefined;
    _relativeToAbsolutePath(base: String, relative: String): string;
    _cropTile(set: ITiledTileset, tile: ITiledTile, texture: Texture): Texture<import("@pixi/core").Resource>;
    _tryLoadTexture(url: string, tile: ITiledTile): Texture<import("@pixi/core").Resource>;
    get loaded(): boolean;
}
