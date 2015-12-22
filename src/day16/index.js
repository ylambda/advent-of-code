export function parseLine(line) {
    let aunt = {};

    line = line.replace(/Sue \d+: /, "");
    line = line.split(",");
    line.forEach((property) => {
        property = property.trim().split(":");
        let name = property[0];
        let value = parseInt(property[1], 10);
        aunt[name] = value;
    });

    return aunt;
}

export function hasMatchOrUnspecified(key, value) {
    return function(aunt) {
        if(!aunt.hasOwnProperty(key))
            return true;

        if(aunt[key] === value)
            return true;

        return false;
    };
};

export function hasMatchOrUnspecifiedRange(key, value) {
    return function(aunt) {
        if(!aunt.hasOwnProperty(key))
            return true;

        if(key === "cats" || key === "trees") {
            return aunt[key] > value;
        }

        if(key === "goldfish" || key === "pomeranians") {
            return aunt[key] < value;
        }

        if(aunt[key] === value)
            return true;

        return false;
    };
};

export function parseInput(input) {
    return input.trim().split("\n").map(parseLine);
}

let auntProps = {
    children: 3,
    cats: 7,
    samoyeds: 2,
    pomeranians: 3,
    akitas: 0,
    vizslas: 0,
    goldfish: 5,
    trees: 3,
    cars: 2,
    perfumes: 1,
};

export function solvePart1(input) {
    let aunts = parseInput(input);
    let results = aunts.slice(0);
    Object.keys(auntProps).forEach((key) => {
        let value = auntProps[key];
        results = results.filter(hasMatchOrUnspecified(key, value));
    });

    return aunts.indexOf(results[0]) + 1;
}

export function solvePart2(input) {
    let aunts = parseInput(input);
    let results = aunts.slice(0);
    Object.keys(auntProps).forEach((key) => {
        let value = auntProps[key];
        results = results.filter(hasMatchOrUnspecifiedRange(key, value));
    });

    console.log(results);

    return aunts.indexOf(results[0]) + 1;
}

export function solvePuzzle() {
    let readFileSync = require("fs").readFileSync;
    let file = __dirname + "/input.txt";
    let input = readFileSync(file, "utf8");

    let part1 = solvePart1(input);
    let part2 = solvePart2(input);

    return {part1, part2};
}

