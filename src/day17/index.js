export function parseInput(input) {
    return input.trim().split("\n").map(x => parseInt(x, 10));
}

export function findCombinations(containers, size=150) {
    let combinations = [];

    if(containers.length === 0)
        return combinations;

    let container = containers.shift();
    let newSize = size - container;
    let rest = containers.slice(0);

    if(newSize === 0)
        combinations.push(container);

    if(rest.length) {

        // find all combos with original size
        combinations = combinations.concat(findCombinations(rest.slice(0), size));

        if(newSize > 0) {
            let combos = findCombinations(rest.slice(0), newSize).map((x) => {
                let a = [];
                return a.concat(container, x);
            });
            combinations = combinations.concat(combos);
        }
    }

    return combinations;
}

export function solvePart1(input) {
    let containers = parseInput(input);
    let combos = findCombinations(containers);
    return combos.length;
}

export function solvePart2(input) {
    let containers = parseInput(input);
    let combos = findCombinations(containers);
    let min = Math.min(...combos.map(x => x.length));
    let count = combos.reduce((sum, x) => {
        return x.length === min ? sum + 1 : sum;
    }, 0);

    return count;
}

export function solvePuzzle() {
    let readFileSync = require("fs").readFileSync;
    let file = __dirname + "/input.txt";
    let input = readFileSync(file, "utf8");

    let part1 = solvePart1(input);
    let part2 = solvePart2(input);

    return {part1, part2};
}

