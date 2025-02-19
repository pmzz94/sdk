
import type {FloatArrayParam} from "@xeokit/math";
import type { RendererSceneModel} from "@xeokit/scene";
import {SDKError} from "@xeokit/core";


/**
 * Interface through which a {@link @xeokit/viewer!ViewObject | ViewObject} controls the appearance of
 * its {@link @xeokit/scene!SceneObject | SceneObject} within the {@link @xeokit/viewer!Viewer | Viewer's} {@link @xeokit/viewer!Renderer | Renderer},
 * specifically within the {@link @xeokit/viewer!View | View} to shich it belongs.
 *
 * Through this interface, the ViewObject controls the following aspects of the SceneObject's appearance: visibility,  highlight,  selection,
 * * X-ray effect and colorization.
 *
 * @internal
 */
export interface RendererViewObject {

    /**
     * Unique ID of this RendererViewObject.
     * @internal
     */
    readonly id: string;

    /**
     * The {@link @xeokit/scene!RendererSceneModel | RendererSceneModel} that contains this RendererViewObject.
     * @internal
     */
    readonly rendererSceneModel: RendererSceneModel;

    /**
     * The axis-aligned World-space 3D boundary of this RendererViewObject.
     * @internal
     */
    readonly aabb: FloatArrayParam;

    /**
     * The ID of a {@link @xeokit/viewer!ViewLayer | ViewLayer} for the {@link @xeokit/viewer!ViewObject} to exclusively appear in.
     * @internal
     */
    readonly layerId: string | null;

    /**
     * Sets the visibility of the {@link @xeokit/viewer!ViewObject} in the given {@link View}.
     *
     * @internal
     * @param viewHandle Handle to the {@link View}, which was returned by {@link @xeokit/viewer!Renderer.attachView | Renderer.attachView}.
     * @param visible Whether to make the {@link @xeokit/viewer!ViewObject} visible.
     * @returns *void*
     * * Success.
     * @returns *{@link @xeokit/core!SDKError}*
     * * No {@link View} found in the Renderer for the given handle.
     */
    setVisible(viewHandle: number, visible: boolean): void | SDKError;

    /**
     * Sets whether the {@link @xeokit/viewer!ViewObject} appears highlighted in the given {@link View}.
     *
     * @internal
     * @param viewHandle Handle to the {@link View}, which was returned by {@link @xeokit/viewer!Renderer.attachView | Renderer.attachView}.
     * @param highlighted Whether to make the {@link @xeokit/viewer!ViewObject} highlighted.
     * @returns *void*
     * * Success.
     * @returns *{@link @xeokit/core!SDKError}*
     * * No {@link View} found in the Renderer for the given handle.
     */
    setHighlighted(viewHandle: number, highlighted: boolean): void | SDKError;

    /**
     * Sets whether the {@link @xeokit/viewer!ViewObject} appears X-rayed in the given {@link View}.
     *
     * @internal
     * @param viewHandle Handle to the {@link View}, which was returned by {@link @xeokit/viewer!Renderer.attachView | Renderer.attachView}.
     * @param xrayed Whether to make the {@link @xeokit/viewer!ViewObject} X-rayed.
     * @returns *void*
     * * Success.
     * @returns *{@link @xeokit/core!SDKError}*
     * * No {@link View} found in the Renderer for the given handle.
     */
    setXRayed(viewHandle: number, xrayed: boolean): void | SDKError;

    /**
     * Sets whether the {@link @xeokit/viewer!ViewObject} appears selected in the given {@link View}.
     *
     * @internal
     * @param viewHandle Handle to the {@link View}, which was returned by {@link @xeokit/viewer!Renderer.attachView | Renderer.attachView}.
     * @param selected Whether to make the {@link @xeokit/viewer!ViewObject} selected.
     * @returns *void*
     * * Success.
     * @returns *{@link @xeokit/core!SDKError}*
     * * No {@link View} found in the Renderer for the given handle.
     */
    setSelected(viewHandle: number, selected: boolean): void | SDKError;

    /**
     * Sets whether the {@link @xeokit/viewer!ViewObject} is rendered with enhanced edges in the given {@link View}.
     *
     * @internal
     * @param viewHandle Handle to the {@link View}, which was returned by {@link @xeokit/viewer!Renderer.attachView | Renderer.attachView}.
     * @param edges Whether to show edges for the {@link @xeokit/viewer!ViewObject} in the {@link View}.
     * @returns *void*
     * * Success.
     * @returns *{@link @xeokit/core!SDKError}*
     * * No {@link View} found in the Renderer for the given handle.
     */
    setEdges(viewHandle: number, edges: boolean): void | SDKError;

    /**
     * Sets whether the {@link @xeokit/viewer!ViewObject} is culled from the given {@link View}.
     *
     * @internal
     * @param viewHandle Handle to the {@link View}, which was returned by {@link @xeokit/viewer!Renderer.attachView | Renderer.attachView}.
     * @param culled Whether to cull the {@link @xeokit/viewer!ViewObject} in the {@link View}.
     * @returns *void*
     * * Success.
     * @returns *{@link @xeokit/core!SDKError}*
     * * No {@link View} found in the Renderer for the given handle.
     */
    setCulled(viewHandle: number, culled: boolean): void | SDKError;

    /**
     * Sets whether section plane clipping is applied to the {@link @xeokit/viewer!ViewObject} in the given {@link View}.
     *
     * @internal
     * @param viewHandle Handle to the {@link View}, which was returned by {@link @xeokit/viewer!Renderer.attachView | Renderer.attachView}.
     * @param clippable Whether to make the {@link @xeokit/viewer!ViewObject} in the {@link View} clippable.
     * @returns *void*
     * * Success.
     * @returns *{@link @xeokit/core!SDKError}*
     * * No {@link View} found in the Renderer for the given handle.
     */
    setClippable(viewHandle: number, clippable: boolean): void | SDKError;

    /**
     * Sets whether the {@link @xeokit/viewer!ViewObject} is included in boundary calculations/collisions in the given {@link View}.
     *
     * @internal
     * @param viewHandle Handle to the {@link View}, which was returned by {@link @xeokit/viewer!Renderer.attachView | Renderer.attachView}.
     * @param collidable Whether to make the {@link @xeokit/viewer!ViewObject} in the {@link View} collidable.
     * @returns *void*
     * * Success.
     * @returns *{@link @xeokit/core!SDKError}*
     * * No {@link View} found in the Renderer for the given handle.
     */
    setCollidable(viewHandle: number, collidable: boolean): void | SDKError;

    /**
     * Sets whether the {@link @xeokit/viewer!ViewObject} is pickable in the given {@link View}.
     *
     * @internal
     * @param viewHandle Handle to the {@link View}, which was returned by {@link @xeokit/viewer!Renderer.attachView | Renderer.attachView}.
     * @param pickable Whether to make the {@link @xeokit/viewer!ViewObject} in the {@link View} pickable.
     * @returns *void*
     * * Success.
     * @returns *{@link @xeokit/core!SDKError}*
     * * No {@link View} found in the Renderer for the given handle.
     */
    setPickable(viewHandle: number, pickable: boolean): void | SDKError;

    /**
     * Colorizes the {@link @xeokit/viewer!ViewObject} in the given {@link View}.
     *
     * @internal
     * @param viewHandle Handle to the {@link View}, which was returned by {@link @xeokit/viewer!Renderer.attachView | Renderer.attachView}.
     * @param color Color to set the {@link @xeokit/viewer!ViewObject} in the {@link View} to.
     * @returns *void*
     * * Success.
     * @returns *{@link @xeokit/core!SDKError}*
     * * No {@link View} found in the Renderer for the given handle.
     */
    setColorize(viewHandle: number, color?: FloatArrayParam): void | SDKError;

    /**
     * Sets the opacity of the {@link @xeokit/viewer!ViewObject} in the given {@link View}.
     *
     * @internal
     * @param viewHandle Handle to the {@link View}, which was returned by {@link @xeokit/viewer!Renderer.attachView | Renderer.attachView}.
     * @param opacity Opacity to set the {@link @xeokit/viewer!ViewObject} in the {@link View} to.
     * @returns *void*
     * * Success.
     * @returns *{@link @xeokit/core!SDKError}*
     * * No {@link View} found in the Renderer for the given handle.
     */
    setOpacity(viewHandle: number, opacity?: number): void | SDKError;

    /**
     * Sets a translation to apply to the {@link @xeokit/viewer!ViewObject} in the given {@link View}.
     *
     * @internal
     * @param viewHandle Handle to the {@link View}, which was returned by {@link @xeokit/viewer!Renderer.attachView | Renderer.attachView}.
     * @param offset Offset to apply to the {@link @xeokit/viewer!ViewObject} in the {@link View}.
     * @returns *void*
     * * Success.
     * @returns *{@link @xeokit/core!SDKError}*
     * * No {@link View} found in the Renderer for the given handle.
     */
    setOffset(viewHandle: number, offset: FloatArrayParam): void | SDKError;
}

