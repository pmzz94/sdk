import type {FloatArrayParam} from "@xeokit/math";
import type {MockRendererMesh} from "./MockRendererMesh";
import type {RendererViewObject} from "@xeokit/viewer";
import type {RendererSceneModel, RendererSceneObject, SceneObject} from "@xeokit/scene";
import {SDKError} from "@xeokit/core";

/**
 * Mock rendering strategy for a {@link @xeokit/scene!SceneObject | SceneObject}.
 *
 * See {@link @xeokit/mockrenderer} for usage.
 */
export class MockRendererObject implements RendererSceneObject, RendererViewObject {

    readonly id: string;
    readonly rendererSceneModel: RendererSceneModel;
    readonly sceneObject: SceneObject;
    readonly layerId: string | null;

    readonly rendererMeshes: MockRendererMesh[];

    /**
     * @private
     */
    constructor(params: {
        id: string,
        sceneObject: SceneObject,
        rendererSceneModel: RendererSceneModel,
        rendererMeshes: MockRendererMesh[],
        aabb: any,
        layerId?: string
    }) {
        this.sceneObject = params.sceneObject;
    }

    /**
     * @inheritdoc
     */
    get aabb(): FloatArrayParam {
        return this.sceneObject.aabb;
    }

    /**
     * @inheritdoc
     */
    setVisible(viewIndex: number, visible: boolean): void | SDKError {

    }

    /**
     * @inheritdoc
     */
    setHighlighted(viewIndex: number, highlighted: boolean): void | SDKError {

    }

    /**
     * @inheritdoc
     */
    setXRayed(viewIndex: number, xrayed: boolean): void | SDKError {

    }

    /**
     * @inheritdoc
     */
    setSelected(viewIndex: number, selected: boolean): void | SDKError {

    }

    /**
     * @inheritdoc
     */
    setEdges(viewIndex: number, edges: boolean): void | SDKError {

    }

    /**
     * @inheritdoc
     */
    setCulled(viewIndex: number, culled: boolean): void | SDKError {

    }

    /**
     * @inheritdoc
     */
    setClippable(viewIndex: number, clippable: boolean): void | SDKError {

    }

    /**
     * @inheritdoc
     */
    setCollidable(viewIndex: number, collidable: boolean): void | SDKError {

    }

    /**
     * @inheritdoc
     */
    setPickable(viewIndex: number, pickable: boolean): void | SDKError {

    }

    /**
     * @inheritdoc
     */
    setColorize(viewIndex: number, color?: FloatArrayParam): void | SDKError {

    }

    /**
     * @inheritdoc
     */
    setOpacity(viewIndex: number, opacity?: number): void | SDKError {

    }

    /**
     * @inheritdoc
     */
    setOffset(viewIndex: number, offset: FloatArrayParam): void | SDKError {

    }

    destroy(): void {
        for (let i = 0, len = this.rendererMeshes.length; i < len; i++) {
            this.rendererMeshes[i].destroy();
        }
    }
}
