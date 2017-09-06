export function parseInput(input) {
    return input.trim().split("\n").map(x => x.split(""));
}

export function parseReplacements(input) {
    let replacement = /(\w+) => (\w+)$/gm;
    let replacements = [];
    let result;

    while((result = replacement.exec(input)) !== null) {
        let [,key,value] = result;
        replacements.push([key, value]);
    }

    return replacements;
};

export function parseMolecule(input) {
    input = input.trim().split("\n");
    return input[input.length-1];
}

export function moleculeReplacements(molecule, search, replacement) {
    let molecules = [];
    let done = false;
    let regex = new RegExp(search, "g");
    let result;

    while((result = regex.exec(molecule)) !== null) {
        let newMolecule = molecule.slice(0, result.index);
        newMolecule += replacement;
        newMolecule += molecule.slice(result.index+search.length);
        molecules.push(newMolecule);
    }

    return molecules;
}

export function replaceAll(input) {
    let replacements = parseReplacements(input);
    let molecule = parseMolecule(input);
    let results = {};

    replacements.forEach((replacement) => {
        let [search, replace] = replacement;
        let molecules = moleculeReplacements(molecule, search, replace);
        molecules.forEach((m) => {
            if(results[m] === undefined)
                results[m] = 0;

            results[m]++;
        });
    });

    return results;
};

export function countDistinct(results) {
    return Object.keys(results).length;
}

export function solvePart1(input) {
    return countDistinct(replaceAll(input));
}

export function solvePart2(input) {
    return 0;
}

export function solvePuzzle() {
    let readFileSync = require("fs").readFileSync;
    let file = __dirname + "/input.txt";
    let input = readFileSync(file, "utf8");

    let part1 = solvePart1(input);
    let part2 = solvePart2(input);

    return {part1, part2};
}

