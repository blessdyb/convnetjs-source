"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrContains(array, element) {
    return array.indexOf(element) > -1;
}
exports.arrContains = arrContains;
function arrUnique(array) {
    return array.filter(function (element, index, array) { return array.indexOf(element) === index; });
}
exports.arrUnique = arrUnique;
function assert(condition, message) {
    if (message === void 0) { message = 'Assertion failed!'; }
    if (!condition) {
        throw new Error(message);
    }
}
exports.assert = assert;
function getopt(dict, key, defaultValue) {
    if (typeof (key) === 'string') {
        return dict[key] || defaultValue;
    }
    else if (Array.isArray(key)) {
        var returnValue = defaultValue;
        for (var i = 0, len = key.length; i < len; i++) {
            var dictElementValue = dict[key[i]];
            if (typeof (dictElementValue) != 'undefined') {
                returnValue = dictElementValue;
            }
        }
        return returnValue;
    }
}
exports.getopt = getopt;
function randf(a, b) {
    return Math.random() * (b - a) + a;
}
exports.randf = randf;
function randi(a, b) {
    return Math.floor(randf(a, b));
}
exports.randi = randi;
var gaussRandomReturnValue = false;
var gaussRandomValue = 0.0;
function gaussRandom() {
    if (gaussRandomReturnValue) {
        gaussRandomReturnValue = false;
        return gaussRandomValue;
    }
    var u = 2 * Math.random() - 1;
    var v = 2 * Math.random() - 1;
    var r = u * u + v * v;
    if (r === 0 || r === 1) {
        return gaussRandom();
    }
    var c = Math.sqrt(-2 * Math.log(r) / r);
    gaussRandomValue = v * c;
    gaussRandomReturnValue = true;
    return u * c;
}
;
function randn(mean, std) {
    return mean + gaussRandom() * std;
}
exports.randn = randn;
function zeros(n) {
    return new Float64Array(n);
}
exports.zeros = zeros;
function maxmin(values) {
    if (values.length === 0)
        return {};
    var maxValue = Math.max.apply(Math, values);
    var minValue = Math.min.apply(Math, values);
    return {
        maxi: values.indexOf(maxValue),
        maxv: maxValue,
        mini: values.indexOf(minValue),
        minv: minValue,
        dv: maxValue - minValue
    };
}
exports.maxmin = maxmin;
;
function randperm(n) {
    var array = Array.from(Array(10).keys());
    var i = 0;
    var j = 0;
    var temp = null;
    for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
exports.randperm = randperm;
function weightedSample(array, probabilities) {
    var probability = randf(0, 1.0);
    var cumulateProbability = 0.0;
    for (var k = 0, n = array.length; k < n; k++) {
        cumulateProbability += probabilities[k];
        if (probability < cumulateProbability) {
            return array[k];
        }
    }
}
exports.weightedSample = weightedSample;
//# sourceMappingURL=utils.js.map