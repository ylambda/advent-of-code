function parseInput(input) {
    return input.trim().split("\n");
}

export function stringSize(string) {
    return string.length;
}

export function stringLiteralSize(string) {
    return (eval(string)).length;
}

export function encodeStringSize(string) {
    return JSON.stringify(string).length;
}

export function solvePart1(input) {
    input = parseInput(input);

    let sum = (sum, x) => { return sum + x; };

    let sumStringSize = input.map(stringSize).reduce(sum, 0);
    let sumStringLiteralSize = input.map(stringLiteralSize).reduce(sum, 0);

    return sumStringSize - sumStringLiteralSize;
}

function solvePart2(input) {
    input = parseInput(input);

    let sum = (sum, x) => { return sum + x; };

    let sumStringSize = input.map(stringSize).reduce(sum, 0);
    let sumEncodeSize = input.map(encodeStringSize).reduce(sum, 0);

    return sumEncodeSize - sumStringSize;
}

export function solvePuzzle() {
    let readFileSync = require("fs").readFileSync;
    let file = __dirname + "/input.txt";
    let input = readFileSync(file, "utf8");

    let part1 = solvePart1(input);
    let part2 = solvePart2(input);

    return {part1, part2};
}

