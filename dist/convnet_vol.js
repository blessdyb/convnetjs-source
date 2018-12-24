"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("./utils");
var Vol = (function () {
    function Vol(sx, sy, depth, c) {
        this.init(sx, sy, depth, c);
    }
    Vol.prototype.init = function (sx, sy, depth, c) {
        var _this = this;
        if (Array.isArray(sx)) {
            this.sx = 1;
            this.sx = 1;
            this.depth = sx.length;
            this.w = utils.zeros(this.depth);
            this.dw = utils.zeros(this.depth);
            sx.forEach(function (item, index) { return _this.w[index] = item; });
        }
        else {
            this.sx = sx;
            this.sy = sy;
            this.depth = depth;
            var n = sx * sy * depth;
            this.w = utils.zeros(n);
            this.dw = utils.zeros(n);
            this.w.fill(c || Math.sqrt(1.0 / n));
        }
    };
    Vol.prototype.getNodeIndex = function (x, y, d) {
        return ((this.sx * y) + x) * this.depth + d;
    };
    Vol.prototype.get = function (x, y, d) {
        var idx = this.getNodeIndex(x, y, d);
        return this.w[idx];
    };
    Vol.prototype.set = function (x, y, d, v) {
        var idx = this.getNodeIndex(x, y, d);
        this.w[idx] = v;
    };
    Vol.prototype.add = function (x, y, d, v) {
        var idx = this.getNodeIndex(x, y, d);
        this.w[idx] += v;
    };
    Vol.prototype.get_grad = function (x, y, d) {
        var idx = this.getNodeIndex(x, y, d);
        return this.dw[idx];
    };
    Vol.prototype.set_grad = function (x, y, d, v) {
        var idx = this.getNodeIndex(x, y, d);
        this.dw[idx] = v;
    };
    Vol.prototype.add_grad = function (x, y, d, v) {
        var idx = this.getNodeIndex(x, y, d);
        this.dw[idx] += v;
    };
    Vol.prototype.cloneAndZero = function () {
        return new Vol(this.sx, this.sy, this.depth, 0.0);
    };
    Vol.prototype.clone = function () {
        var volume = new Vol(this.sx, this.sy, this.depth, 0.0);
        this.w.forEach(function (item, index) {
            volume.w[index] = item;
        });
        return volume;
    };
    Vol.prototype.addFrom = function (volume) {
        var _this = this;
        this.w.forEach(function (item, index) {
            _this.w[index] += volume.w[index];
        });
    };
    Vol.prototype.addFromScaled = function (volume, alpha) {
        var _this = this;
        this.w.forEach(function (item, index) {
            _this.w[index] += alpha * volume.w[index];
        });
    };
    Vol.prototype.setConst = function (value) {
        var _this = this;
        this.w.forEach(function (item, index) {
            _this.w[index] = value;
        });
    };
    Vol.prototype.fromJSON = function (obj) {
        this.init(obj.sx, obj.sy, obj.depth);
    };
    Vol.prototype.toJSON = function () {
        return {
            sx: this.sx,
            sy: this.sy,
            depth: this.depth,
            w: this.w
        };
    };
    return Vol;
}());
exports.Vol = Vol;
//# sourceMappingURL=convnet_vol.js.map