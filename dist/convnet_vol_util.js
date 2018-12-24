"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./utils");
var convnet_vol_1 = require("./convnet_vol");
function augment(volume, crop, dx, dy, flip) {
    if (isNaN(dx)) {
        dx = util.randi(0, volume.sx - crop);
    }
    if (isNaN(dy)) {
        dy = util.randi(0, volume.sy - crop);
    }
    var croppedVolume;
    if (crop !== volume.sx || dx !== 0 || dy !== 0) {
        croppedVolume = new convnet_vol_1.Vol(crop, crop, volume.depth, 0.0);
        for (var x = 0; x < crop; x++) {
            for (var y = 0; y < crop; y++) {
                if (x + dx < 0 || x + dx >= volume.sx || y + dy < 0 || y + dy >= volume.sy) {
                    continue;
                }
                else {
                    for (var d = 0; d < volume.depth; d++) {
                        croppedVolume.set(x, y, d, volume.get(x + dx, y + dy, d));
                    }
                }
            }
        }
    }
    else {
        croppedVolume = volume;
    }
    if (flip) {
        var clonedCroppedVolume = croppedVolume.cloneAndZero();
        for (var x = 0; x < croppedVolume.sx; x++) {
            for (var y = 0; y < croppedVolume.sy; y++) {
                for (var d = 0; d < croppedVolume.depth; d++) {
                    clonedCroppedVolume.set(x, y, d, croppedVolume.get(croppedVolume.sx - x - 1, y, d));
                }
            }
        }
        croppedVolume = clonedCroppedVolume;
    }
    return croppedVolume;
}
exports.augment = augment;
function img_to_vol(img, grayScale) {
    if (grayScale === void 0) { grayScale = false; }
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.width;
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data, width = imgData.width, height = imgData.height;
    var volume = new convnet_vol_1.Vol(width, height, 4, 0.0);
    volume.w = Float64Array.from(data, function (item) { return item / 255.0 - 0.5; });
    if (grayScale) {
        var grayScaleVolume = new convnet_vol_1.Vol(width, height, 1, 0.0);
        for (var i = 0; i < width; i++) {
            for (var j = 0; j < height; j++) {
                grayScaleVolume.set(i, j, 0, volume.get(i, j, 0));
            }
        }
        volume = grayScaleVolume;
    }
    return volume;
}
exports.img_to_vol = img_to_vol;
//# sourceMappingURL=convnet_vol_util.js.map