import type { Texture } from "@pixi/core";
import type { Spritesheet } from "@pixi/spritesheet";
export declare class MultiSpritesheet {
    sheets: Array<Spritesheet | MultiSpritesheet>;
    images: {
        [name: string]: Texture<any>;
    };
    constructor(sheets?: Spritesheet[]);
    add(sheet?: Spritesheet | MultiSpritesheet): void;
    addTexture(tex: Texture, id: string): void;
    get textures(): {
        [name: string]: Texture<any>;
    };
    get animations(): {
        [name: string]: Texture[];
    };
}
