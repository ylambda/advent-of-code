var readFileSync = require("fs").readFileSync;
var file = __dirname + "/input.txt";
var input = readFileSync(file, "utf8")
    .trim()
    .split("\n")
    .map(parseInput);

export function parseInput(size) {
    return size.split("x").map(x => parseInt(x, 10));
}

export function calcGiftSides(l, w, h) {
    var sides = [l*w, w*h, h*l];
    return sides.sort((a, b) => a - b);
}

export function calcWrappingPaper(l, w, h) {
    var [side1, side2, side3] = calcGiftSides(l, w, h);
    var smallest = side1;
    return 2*side1 + 2*side2 + 2*side3 + smallest;
}

export function calcRibbonLength(...sizes) {
    var [size1, size2, size3] = sizes.sort((a, b) => a - b);
    var perimeter = (size1*2) + (size2*2);
    var bow = size1*size2*size3;
    return perimeter + bow;
}

// totalWrappingPaper
export var part1 = input.reduce((total, sizes) => {
    return total + calcWrappingPaper(...sizes);
}, 0);

// totalRibbon
export var part2 = input.reduce((total, sizes) => {
    return total + calcRibbonLength(...sizes);
}, 0);
