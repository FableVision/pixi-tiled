import type { Text } from '@pixi/text';
import { Container } from '@pixi/display';
import type { ITiledPtimitive } from './TiledPrimitives';
import type { Rectangle } from '@pixi/math';
import type { IParsedProps, ITiledLayer, ITiledObject, ITiledFrame, ITiledMap } from './../ITiledMap';
export declare class TiledContainer extends Container {
    layerHeight: number;
    layerWidth: number;
    text?: Text;
    primitive?: ITiledPtimitive;
    tiledId?: number;
    properties?: IParsedProps;
    layers?: {
        [key: string]: Container;
    };
    source?: ITiledLayer | ITiledObject | ITiledMap;
    tileFrame?: ITiledFrame;
    name?: string;
    types?: string[];
    hitArea?: Rectangle;
}
