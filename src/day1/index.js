var readFileSync = require("fs").readFileSync;
var file = __dirname + "/input.txt";
var input = readFileSync(file, "utf8");

export function parseInput(input) {
    return input.trim().split("");
}

export function calcFloor(input) {
    input = parseInput(input);
    return input.reduce((sum, direction) => {
        return sum + moveToFloor(direction);
    }, 0);
}

export function moveToFloor(direction) {
    return direction === "(" ? 1 : -1;
}

export function calcEnterBasement(input) {
    input = parseInput(input);
    var floor = 0;
    return 1 + input.findIndex((direction) => {
        floor = floor + moveToFloor(direction);
        return floor === -1;
    });
}

export var part1 = calcFloor(input);
export var part2 = calcEnterBasement(input);
