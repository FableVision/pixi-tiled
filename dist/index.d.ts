declare global {
    interface Window {
        PIXI: any;
    }
}
declare const VERSION = "__VERSION__";
import * as ContainerBuilder from './builders/ContainerBuilder';
import * as SpriteBuilder from './builders/SpriteBuilder';
import * as TextBuilder from './builders/TextBuilder';
import { TiledMapAsset, CreateStage } from './tools/TiledObjectParser';
import { Config, ITiledProps, LayerBuildersMap } from './Config';
import { TiledContainer } from './objects/TiledContainer';
export declare function Inject(pixiPack?: any, props?: Partial<ITiledProps> | undefined): void;
import * as Primitives from './objects/TiledPrimitives';
import { MultiSpritesheet } from './tools/TiledMultiSheet';
import { ObjectLayerBuilder } from './layers/ObjectsLayerBuilder';
export { Primitives };
export { TiledMapAsset };
export { CreateStage };
export { Config };
export { ContainerBuilder };
export { SpriteBuilder };
export { TextBuilder };
export { TiledContainer };
export { MultiSpritesheet };
export { VERSION };
export { LayerBuildersMap };
export { ObjectLayerBuilder };
export * from './ITiledMap';
