import { Spritesheet } from '@pixi/spritesheet';
import { MultiSpritesheet } from './TiledMultiSheet';
import { ITiledMap } from '../ITiledMap';
import { TiledMapContainer } from '../objects/TiledMapContainer';
import { AssetExtension } from '@pixi/assets';
type tValidSheet = Spritesheet | MultiSpritesheet;
export declare function CreateStage(sheet: tValidSheet | undefined, _data: ITiledMap): TiledMapContainer | undefined;
declare const TiledMapAsset: AssetExtension;
export { TiledMapAsset };
