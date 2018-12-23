import * as utils from './utils';

interface VolModel {
    sx: Array<number>|number;
    sy: Array<number>|number;
    depth: number;
    w: Float64Array;
}

/**
 * Store a 3D volumn of numbers with width(sx), height(sy), depth(depth) for the network.
 * It also holds weights and gradients w.r.t the weights.
 */
export class Vol {
    sx: number;
    sy: number;
    depth: number;
    w: Float64Array;
    dw: Float64Array;
    constructor(sx: any, sy: any, depth: number, c?: number) {
        this.init(sx, sy, depth, c);
    }
    /**
     * Initialize the network input placeholders and parameters
     * - If the given `width` is an array, we assume that 1D volumn is provided
     * - If the given `width`/`height`/`depth` are all `number`, it will be treated as a 3D vlumn
     */
    init(sx: any, sy: any, depth: number, c?: number) {
        if (Array.isArray(sx)) {
            this.sx = 1;
            this.sx = 1;
            this.depth = sx.length;
            this.w = utils.zeros(this.depth);
            this.dw = utils.zeros(this.depth);
            sx.forEach((item, index) => this.w[index] = item);
        } else {
            this.sx = sx;
            this.sy = sy;
            this.depth = depth;
            let n = sx * sy * depth;
            this.w = utils.zeros(n);
            this.dw = utils.zeros(n);
            this.w.fill(c || Math.sqrt(1.0 / n));
        }
    }
    /**
     * Address the node by given `width`(x), `height`(y) and `depth`(d), then return the index of this node in the flatten 1D list.
     */
    getNodeIndex(x: number, y: number, d: number): number {
        return ((this.sx * y) + x) * this.depth + d;
    }
    /**
     * Address the node and return its weight.
     */
    get(x: number, y: number, d: number): number {
        let idx = this.getNodeIndex(x, y, d);
        return this.w[idx];
    }
    /**
     * Address the node and reset its weight to the given `value`(v).
     */
    set(x: number, y: number, d: number, v: number): void {
        let idx = this.getNodeIndex(x, y, d);
        this.w[idx] = v;
    }
    /**
     * Address the node and add the given `value`(v) to its weight.
     */
    add(x: number, y: number, d: number, v: number): void {
        let idx = this.getNodeIndex(x, y, d);
        this.w[idx] += v;
    }
    /**
     * Address the node and return its gradient.
     */
    get_grad(x: number, y: number, d: number): number {
        let idx = this.getNodeIndex(x, y, d);
        return this.dw[idx];
    }
    /**
     * Address the node and reset its gradient to the given `value`(v).
     */
    set_grad(x: number, y: number, d: number, v: number): void {
        let idx = this.getNodeIndex(x, y, d);
        this.dw[idx] = v;
    }
    /**
     * Address the node and add the given `value`(v) to its gradient.
     */
    add_grad(x: number, y: number, d: number, v: number): void {
        let idx = this.getNodeIndex(x, y, d);
        this.dw[idx] += v;
    }
    /**
     * Return a clone of current network and initialize the weights and gradients as 0
     */
    cloneAndZero(): Vol {
        return new Vol(this.sx, this.sy, this.depth, 0.0);
    }
    /**
     * Return a clone of current network with the same parameters, only reset gradients to 0
     */
    clone(): Vol {
        let volumn = new Vol(this.sx, this.sy, this.depth, 0.0);
        this.w.forEach((item, index) => {
            volumn.w[index] = item;
        });
        return volumn;
    }
    /**
     * Add the weights of a given network `volumn` to current network
     */
    addFrom(volumn: Vol): void {
        this.w.forEach((item, index) => {
            this.w[index] += volumn.w[index];
        });
    }
    /**
     * Add the weights of a given network `volumn` with scale `alpha` to current network
     */
    addFromScaled(volumn: Vol, alpha: number): void {
        this.w.forEach((item, index) => {
            this.w[index] += alpha * volumn.w[index];
        });
    }
    /**
     * Reset the weights of current network to a given constant number `value`
     */
    setConst(value: number): void {
        this.w.forEach((item, index) => {
            this.w[index] = value;
        });
    }
    /**
     * Reset the netwrok information parameters informations
     */
    fromJSON(obj: VolModel) {
        this.init(obj.sx, obj.sy, obj.depth);
    }
    /**
     * Expose the netwrok parameters information
     */
    toJSON(): VolModel {
        return {
            sx: this.sx,
            sy: this.sy,
            depth: this.depth,
            w: this.w
        };
    }
}