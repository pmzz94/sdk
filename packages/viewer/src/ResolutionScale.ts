import {Component} from "@xeokit/core";
import type {View} from "./View";
import {FastRender, QualityRender} from "@xeokit/constants";



//  /**
//      * Gets the scale of the canvas back buffer relative to the CSS-defined size of the canvas.
//      *
//      * This is a kdtree3 way to trade off rendering quality for speed. If the canvas size is defined in CSS, then
//      * setting this to a value between ````[0..1]```` (eg ````0.5````) will render into a smaller back buffer, giving
//      * a performance boost.
//      *
//      * @returns  The resolution scale.
//      */
// get resolutionScale(): number {
//     return this.#resolutionScale;
// }
//
// /**
//  * Sets the scale of the canvas back buffer relative to the CSS-defined size of the canvas.
//  *
//  * This is a kdtree3 way to trade off rendering quality for speed. If the canvas size is defined in CSS, then
//  * setting this to a value between ````[0..1]```` (eg ````0.5````) will render into a smaller back buffer, giving
//  * a performance boost.
//  *
//  * @param resolutionScale The resolution scale.
//  */
// set resolutionScale(resolutionScale: number) {
//     resolutionScale = resolutionScale || 1.0;
//     if (resolutionScale === this.#resolutionScale) {
//         return;
//     }
//     this.#resolutionScale = resolutionScale;
//     const canvasElement = this.canvasElement;
//     canvasElement.width = Math.round(
//         canvasElement.clientWidth * this.#resolutionScale
//     );
//     canvasElement.height = Math.round(
//         canvasElement.clientHeight * this.#resolutionScale
//     );
//     this.redraw();
// }

/**
 * Configures the appearance of {@link @xeokit/viewer!ViewObject | ViewObjects} when canvas resolution scaling is applied.
 *
 * ## Summary
 *
 * * Located at {@link View.resolutionScale}.
 */
export class ResolutionScale extends Component {

    /**
     * The View to which this ResolutionScale belongs.
     */
    public readonly view: View;

    /**
     * @private
     */
    #state: {
        enabled: boolean;
        resolutionScale: number;
        renderModes: number[];
    };

    /**
     * @private
     */
    constructor(view: View, options: {
        enabled?: boolean;
        resolutionScale?: number;
        renderModes?: number[];
    } = {}) {

        super(view, options);

        this.view = view;

        this.#state = {
            enabled: options.enabled !== false,
            renderModes: options.renderModes || [FastRender],
            resolutionScale: options.resolutionScale ||1
        };
    }

    /**
     * Sets if resolution scaling is enabled.
     *
     * Default is ````true````.
     */
    set enabled(value: boolean) {
        if (this.#state.enabled === value) {
            return;
        }
        this.#state.enabled = value;
        this.view.redraw();
    }

    /**
     * Gets if resolution scaling is enabled.
     *
     * Default is ````true````.
     */
    get enabled(): boolean {
        return this.#state.enabled;
    }

    /**
     * Sets which rendering modes in which to apply ResolutionScale.
     *
     * Accepted modes are {@link QualityRender} and {@link FastRender}.
     *
     * Default value is [{@link FastRender}].
     */
    set renderModes(value: number[]) {
        this.#state.renderModes = value;
        this.view.redraw();
    }

    /**
     * Gets which rendering modes in which to apply ResolutionScale.
     *
     * Accepted modes are {@link QualityRender} and {@link FastRender}.
     *
     * Default value is [{@link FastRender}].
     */
    get renderModes(): number[] {
        return this.#state.renderModes;
    }

    /**
     * Sets the scale when ResolutionScale is applied.
     *
     * Default is ````1.0````.
     */
    set resolutionScale(value: number) {
        if (this.#state.resolutionScale === value) {
            return;
        }
        this.#state.resolutionScale = value;
        this.view.redraw();
    }

    /**
     * Gets the scale when ResolutionScale is applied.
     *
     * Default is ````1.0````.
     */
    get resolutionScale(): number {
        return this.#state.resolutionScale;
    }

    /**
     * @private
     */
    destroy() {
        super.destroy();
    }
}
