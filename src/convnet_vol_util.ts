import * as util from './utils';
import { Vol } from './convnet_vol';

/**
 * Data augmentation to the given `volume` based on `crop`.
 * - `crop` is the size of output
 * - `dx`,`dy` are offset wrt incoming volume, of the shift
 * - `flip` is boolean on whether we also want to flip the matrix between left and right horizontally
 */
export function augment(volume: Vol, crop: number, dx?: number, dy?: number, flip?: number): Vol {
    if (isNaN(dx)) {
        dx = util.randi(0, volume.sx - crop);
    }
    if (isNaN(dy)) {
        dy = util.randi(0, volume.sy - crop);
    }
    let croppedVolume;
    if (crop !== volume.sx || dx!==0 || dy!==0) {
        croppedVolume = new Vol(crop, crop, volume.depth, 0.0);
        for(let x = 0; x < crop; x++) {
            for(let y = 0; y < crop; y++) {
                if (x + dx < 0 || x + dx >= volume.sx || y + dy < 0 || y + dy >= volume.sy) {
                    continue;
                } else {
                    for(let d = 0; d < volume.depth; d++) {
                        // Fetch the weight value by offset `dx`/`dy`, then set it to the `croppedVolume`
                        croppedVolume.set(x, y, d, volume.get(x + dx, y + dy, d));
                    }
                }
            }
        }
    } else {
        croppedVolume = volume;
    }

    if(flip) {
        // Horizontally get the flipped `croppedVolume` and set it to a cloneAndZeroed volume
        let clonedCroppedVolume = croppedVolume.cloneAndZero();
        for(let x = 0; x < croppedVolume.sx; x++) {
            for(let y = 0; y < croppedVolume.sy; y++) {
                for(let d = 0; d < croppedVolume.depth; d++) {
                    clonedCroppedVolume.set(x, y, d, croppedVolume.get(croppedVolume.sx - x - 1, y, d));
                }
            }
        }
        croppedVolume = clonedCroppedVolume;
    }
    return croppedVolume;
}

/**
 * Load an HTML DOM image to a virtual canvas and get the pixles data. Then return a `volume` based on the image data
 * - If `grayScale` is given, the depth of the `volume` is 1
 * - If `grayScale` is not given, the depth of the `volume` is 4 (RGBA)
 */
export function img_to_vol(img: HTMLImageElement, grayScale: boolean = false): Vol {
    let canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.width;
    let context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    let imgData = context.getImageData(0, 0, canvas.width, canvas.height);
    // Extract the pixels data from image through a canvas
    let {data, width, height} = imgData;
    let volume = new Vol(width, height, 4, 0.0);
    volume.w = Float64Array.from(data, item => item / 255.0 - 0.5);
    // Only keep the gray channel data
    if (grayScale) {
        let grayScaleVolume = new Vol(width, height, 1, 0.0);
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                grayScaleVolume.set(i, j, 0, volume.get(i, j, 0));
            }
        }
        volume = grayScaleVolume;
    }
    return volume;
}