export function parseLine(line) {
    let regex = /(\w+) would (gain|lose) (\d+) .+ (\w+).$/;
    let result = regex.exec(line);
    if(!result)
        return {};
    let [,person, sign, points, next] = result;
    points = sign === "gain" ? parseInt(points, 10) : -parseInt(points, 10);
    return {person, points, next};
}

export function parseInput(input) {
    input = input.trim().split("\n").map(parseLine);
    return input;
}

export function combineInstructions(instructions) {
    let combined = {};
    instructions.forEach((ins) => {
        let person = combined[ins.person];
        if(person === undefined) {
            person = combined[ins.person] = {};
        }

        person[ins.next] = ins.points;
    });
    return combined;
}

export function findBest(instructions, arrangements) {
    let scores = arrangements.map((arrangement) => {
        return computeSeatingScore(instructions, arrangement);
    }).sort((a,b) => { return b - a });

    return scores[0];
}

export function computeSeatingScore(instructions, arrangement) {
    let score = arrangement.reduce(reduceSeating(instructions, arrangement), 0);
    return score;
}

export function createArrangements(instructions) {
    let arrangements = [];
    let people = Object.keys(instructions)

    function createArrangement(arrange, rest) {
        if(rest.length === 0) {
            arrangements.push(arrange);
        }

        for(let i=0;i<rest.length;i++) {
            let a = arrange.slice(0);
            let b = rest.slice(0);
            b.splice(i, 1);
            a.push(rest[i]);
            createArrangement(a,b);
        }
    }

    createArrangement([], people);

    return arrangements;
}

export function reduceSeating(instructions, arrangement) {
    return function(sum, name, i) {
        let person = instructions[name];

        let right = i === arrangement.length - 1
                    ? arrangement[0]
                    : arrangement[i+1];

        let left = i === 0
                    ? arrangement[arrangement.length -1]
                    : arrangement[i-1];

        let pRight = person[right] || 0;
        let pLeft = person[left] || 0;

        let personalScore = pRight + pLeft;

        return sum + personalScore;
    };
}

export function solvePart1(input) {
    let instructions = parseInput(input);
    let map = combineInstructions(instructions);
    let arrangements = createArrangements(map);

    return findBest(map, arrangements);
}

export function solvePart2(input) {
    let instructions = parseInput(input);
    let map = combineInstructions(instructions);
    map['Myself'] = {};
    let arrangements = createArrangements(map);

    return findBest(map, arrangements);
}

export function solvePuzzle() {
    let readFileSync = require("fs").readFileSync;
    let file = __dirname + "/input.txt";
    let input = readFileSync(file, "utf8");

    let part1 = solvePart1(input);
    let part2 = solvePart2(input);

    return {part1, part2};
}

