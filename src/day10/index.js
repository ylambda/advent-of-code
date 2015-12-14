export function lookAndSay(input) {
    let result;
    let lookAndSay = "";
    let regex = /([0-9])(\1*)/g;

    while((result = regex.exec(input)) !== null) {
        let count = result[0].length;
        let match = result[0][0];
        lookAndSay += ("" + count + match);
    }

    return lookAndSay;
}

export function solvePart1(input) {
    let iterations = 40;
    for(let i=0; i<iterations;i++) {
        input = lookAndSay(input);
    }

    return input.length;
}

export function solvePart2(input) {
    let iterations = 50;
    for(let i=0; i<iterations;i++) {
        input = lookAndSay(input);
    }

    return input.length;
}

export function solvePuzzle() {
    let readFileSync = require("fs").readFileSync;
    let file = __dirname + "/input.txt";
    let input = readFileSync(file, "utf8");

    let part1 = solvePart1(input);
    let part2 = solvePart2(input);

    return {part1, part2};
}

