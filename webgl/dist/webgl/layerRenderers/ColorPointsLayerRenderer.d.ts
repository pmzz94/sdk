import { LayerRenderer } from "./LayerRenderer";
import type { RenderContext } from "../RenderContext";
export declare class ColorPointsLayerRenderer extends LayerRenderer {
    constructor(renderContext: RenderContext);
    getHash(): string;
    buildVertexShader(): string;
    buildFragmentShader(): string;
}