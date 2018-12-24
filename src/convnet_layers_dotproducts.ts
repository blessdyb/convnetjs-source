import { range, zeros } from './utils';
import { Vol } from './convnet_vol';

export class ConvLayer {
    constructor() {

    }
    forward() {

    }
    backward() {

    }
    getParamsAndGrads() {

    }
    toJSON() {

    }
    fromJSON() {

    }
}

interface FullyConnLayerInterface {
    in_sx: number;
    in_sy: number;
    in_depth: number;
    num_neurons?: number;
    filters?: number;
    l1_decay_mul?: number;
    l2_decay_mul?: number;
    bias_pref?: number;
}

export class FullyConnLayer {
    out_depth: number;
    l1_decay_mul: number;
    l2_decay_mul: number;
    num_inputs: number;
    out_sx = 1;
    out_sy = 1;
    layer_type = 'fc';
    filters: Array<Vol> = [];
    biases: Vol;
    in_act: Vol;
    out_act: Vol;
    constructor(options: FullyConnLayerInterface) {
        this.out_depth = options.num_neurons || options.filters;
        this.l1_decay_mul = options.l1_decay_mul || 0.0;
        this.l2_decay_mul = options.l2_decay_mul || 0.0;
        this.num_inputs = options.in_sx * options.in_sy * options.in_depth;

        let bias = options.bias_pref || 0.0;
        range(this.out_depth).forEach(item => {
            this.filters.push(new Vol(1, 1, this.num_inputs));
        });
        this.biases = new Vol(1, 1, this.out_depth, bias);
    }
    /**
     * Forward propagation calculation based on the weight matrix product of `volume` and `filters`.
     */
    forward(volume: Vol): Vol {
        this.in_act = volume;
        this.out_act = new Vol(1, 1, this.out_depth, 0.0);
        let volumeWeight = volume.w;
        for (let i = 0; i < this.out_depth; i++) {
            let weight = 0.0;
            let weightInFilters = this.filters[i].w;
            for (let j = 0; j < this.num_inputs; j++) {
                weight += volumeWeight[j] * weightInFilters[j];
            }
            weight += this.biases.w[i];
            this.out_act.w[i] = weight;
        }
        return this.out_act;
    }
    backward() {
        let volume = this.in_act;
        volume.dw = zeros(volume.w.length);
        for (let i = 0; i < this.out_depth; i++) {
            let filter = this.filters[i];
            let chain_grad = this.out_act.dw[i];
            for (let j = 0; j < this.num_inputs; j++) {
                volume.dw[j] += filter.w[j] * chain_grad;
                filter.dw[j] += volume.w[j] * chain_grad;
            }
            this.biases.dw[i] += chain_grad;
        }
    }
    getParamsAndGrads() {

    }
    toJSON() {

    }
    fromJSON() {

    }
}