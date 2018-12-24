"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var convnet_vol_1 = require("./convnet_vol");
var ConvLayer = (function () {
    function ConvLayer() {
    }
    ConvLayer.prototype.forward = function () {
    };
    ConvLayer.prototype.backward = function () {
    };
    ConvLayer.prototype.getParamsAndGrads = function () {
    };
    ConvLayer.prototype.toJSON = function () {
    };
    ConvLayer.prototype.fromJSON = function () {
    };
    return ConvLayer;
}());
exports.ConvLayer = ConvLayer;
var FullyConnLayer = (function () {
    function FullyConnLayer(options) {
        var _this = this;
        this.out_sx = 1;
        this.out_sy = 1;
        this.layer_type = 'fc';
        this.filters = [];
        this.out_depth = options.num_neurons || options.filters;
        this.l1_decay_mul = options.l1_decay_mul || 0.0;
        this.l2_decay_mul = options.l2_decay_mul || 0.0;
        this.num_inputs = options.in_sx * options.in_sy * options.in_depth;
        var bias = options.bias_pref || 0.0;
        utils_1.range(this.out_depth).forEach(function (item) {
            _this.filters.push(new convnet_vol_1.Vol(1, 1, _this.num_inputs));
        });
        this.biases = new convnet_vol_1.Vol(1, 1, this.out_depth, bias);
    }
    FullyConnLayer.prototype.forward = function (volume) {
        this.in_act = volume;
        this.out_act = new convnet_vol_1.Vol(1, 1, this.out_depth, 0.0);
        var volumeWeight = volume.w;
        for (var i = 0; i < this.out_depth; i++) {
            var weight = 0.0;
            var weightInFilters = this.filters[i].w;
            for (var j = 0; j < this.num_inputs; j++) {
                weight += volumeWeight[j] * weightInFilters[j];
            }
            weight += this.biases.w[i];
            this.out_act.w[i] = weight;
        }
        return this.out_act;
    };
    FullyConnLayer.prototype.backward = function () {
        var volume = this.in_act;
        volume.dw = utils_1.zeros(volume.w.length);
        for (var i = 0; i < this.out_depth; i++) {
            var filter = this.filters[i];
            var chain_grad = this.out_act.dw[i];
            for (var j = 0; j < this.num_inputs; j++) {
                volume.dw[j] += filter.w[j] * chain_grad;
                filter.dw[j] += volume.w[j] * chain_grad;
            }
            this.biases.dw[i] += chain_grad;
        }
    };
    FullyConnLayer.prototype.getParamsAndGrads = function () {
    };
    FullyConnLayer.prototype.toJSON = function () {
    };
    FullyConnLayer.prototype.fromJSON = function () {
    };
    return FullyConnLayer;
}());
exports.FullyConnLayer = FullyConnLayer;
//# sourceMappingURL=convnet_layers_dotproducts.js.map