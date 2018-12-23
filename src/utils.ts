/**
 * Check if an `element` exists in given `array` or not
 */
export function arrContains(array: Array<any>, element: number|string): boolean {
    return array.indexOf(element) > -1;
}

/**
 * Creates a duplicate-free version of an array
 */
export function arrUnique(array: Array<any>): Array<any> {
    return array.filter((element, index, array) => array.indexOf(element) === index);
}

/**
 * Check the given `condition`, if `false`, throw exception with the given `message`
 */
export function assert(condition: boolean, message: any = 'Assertion failed!'): object|void {
    if (!condition) {
        throw new Error(message);
    }
}

/**
 * Return the given `dict` value by `key`. 
 * - If `key` is a `string`, return the value of `dict[key]` if exists, otherwise return the `defaultValue`
 * - If `key` is an `array`, use the last item of this array as `key` to query the value in `dict`
 * @param {stirng|Array<any>} key - used to query the `dict`
 * @param {any} defaultValue - default value
 */
export function getopt(dict: Array<any>, key: string|Array<any>, defaultValue:any): any {
    if (typeof(key) === 'string') {
        return dict[key] || defaultValue;
    } else if (Array.isArray(key)){
        let returnValue: any = defaultValue;
        for (let i = 0, len = key.length; i < len; i++) {
            let dictElementValue = dict[key[i]];
            if (typeof(dictElementValue) != 'undefined') {
                returnValue = dictElementValue;
            }
        }
        return returnValue;
    }
}

/**
 * Return a random float number between `a` and `b`
 */
export function randf(a: number, b: number): number {
    return Math.random() * (b - a) + a;
}

/**
 * Return a random integer number between `a` and `b`
 */
export function randi(a: number, b: number): number {
    return Math.floor(randf(a, b))
}

let gaussRandomReturnValue: boolean = false;
let gaussRandomValue: number = 0.0;
/**
 * Return a number by following Gaussian distribution by using Box-Muller Transform
 * - https://en.wikipedia.org/wiki/Box-Muller_transform
 * - https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve
 */
export function gaussRandom(): number {
    if (gaussRandomReturnValue) {
        gaussRandomReturnValue = false;
        return gaussRandomValue;
    }
    let u = 2 * Math.random() - 1;
    let v = 2 * Math.random() - 1;
    let r = u * u + v * v;
    if (r === 0 || r === 1) {
        return gaussRandom();
    }
    let c = Math.sqrt(-2*Math.log(r) / r);
    gaussRandomValue = v * c;
    gaussRandomReturnValue = true;
    return u * c;
};

/**
 * Return a random number based on the given `mean` and `standard deviation` by following Gaussian distribution 
 */
export function randn(mean: number, std: number): number {
    return mean + gaussRandom() * std;
}

/**
 * Return a series of 0
 */
export function zeros(n: number): Float64Array {
    return new Float64Array(n);
}

/**
 * Return the max/min information of a given value list.
 */
export function maxmin(values: number[]): object {
    if (values.length === 0) return {};
    let maxValue = Math.max(...values);
    let minValue = Math.min(...values);
    return {
        maxi: values.indexOf(maxValue),
        maxv: maxValue,
        mini: values.indexOf(minValue),
        minv: minValue,
        dv: maxValue - minValue
    };
};

/**
 * Generate a incrementing number list between 0 and `n`, shffle the list and return it as the result
 * - https://www.frankmitchell.org/2015/01/fisher-yates/
 */
export function randperm(n: number): Array<number> {
    let array = Array.from(Array(10).keys());
    let i = 0;
    let j = 0;
    let temp = null;
    for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

/**
 * Return a sample of the given `array` by given `probabilities`
 */
export function weightedSample(array: Array<any>, probabilities: Array<number>): Array<any>|void {
    let probability = randf(0, 1.0);
    let cumulateProbability = 0.0;
    for (let k = 0, n = array.length; k < n; k++) {
        cumulateProbability += probabilities[k];
        if (probability < cumulateProbability) {
            return array[k];
        }
    }
}
