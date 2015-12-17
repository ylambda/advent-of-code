export let part2 = false;

export function sumValue(value) {
    if(Array.isArray(value)) return sumArray(value);
    if(typeof value === "object") return sumObject(value);
    if(typeof value === "string") return 0;
    return value;
}

export function sumArray(array) {
   return array.reduce(reduceSum, 0);
}

export function sumObject(obj) {
    let keys = Object.keys(obj);
    // ignore objects with "red" as a value
    if(part2 && keys.some(k => obj[k] === "red"))
        return 0;

    return keys.map((key) => obj[key])
        .reduce(reduceSum, 0);
}

function reduceSum(sum, el) {
    return sum + sumValue(el);
}


export function solvePart1(input) {
    return sumValue(input);
}

export function solvePart2(input) {
    part2 = true;
    return sumValue(input);
}

export function solvePuzzle() {
    let readFileSync = require("fs").readFileSync;
    let file = __dirname + "/input.txt";
    let input = readFileSync(file, "utf8");
    input = JSON.parse(input);

    let part1 = solvePart1(input);
    let part2 = solvePart2(input);

    return {part1, part2};
}

