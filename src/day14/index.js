export function parseLine(line) {
    let regex = /(\w+) .+ (\d+) .+ (\d+) .+ (\d+)/;
    let result = regex.exec(line);
    let [,name, velocity, seconds, rest] = result;
    let position = 0;
    let points = 0;
    let state = ['move', 0];

    velocity = parseInt(velocity);
    seconds = parseInt(seconds);
    rest = parseInt(rest);

    return {name, velocity, seconds, rest, position, state, points}
}

export function parseInput(input) {
    return input.trim().split("\n").map(parseLine);
}

export function stepWorld(reindeer) {
    var leader = 0;
    var leaderPosition = 0;
    reindeer = reindeer.map((r, i) => {
        let [action, count] = r.state;
        if(action == 'move' && count == r.seconds)
            r.state = ['rest', 0];

        if(action == 'rest' && count == r.rest)
            r.state = ['move', 0];

        if(r.state[0] == 'move') {
            r.position += r.velocity;
            r.state[1]++;
        }

        if(r.state[0] == 'rest') {
            r.state[1]++;
        }

        if(r.position > leaderPosition) {
            leader = i;
            leaderPosition = r.position;
        }

        return r;
    });

    reindeer[leader].points++;
    return reindeer;
}

export function stepWorldBy(reindeer, seconds) {
    for(let i=0;i<seconds;i++) {
        reindeer = stepWorld(reindeer);
    }

    return reindeer;
}


export function solvePart1(input) {
    let seconds = 2503
    let reindeer = parseInput(input);
    reindeer = stepWorldBy(reindeer, seconds);
    reindeer = reindeer.sort((a,b) => { return b.position - a.position});
    return reindeer[0].position;
}

export function solvePart2(input) {
    let seconds = 2503
    let reindeer = parseInput(input);
    reindeer = stepWorldBy(reindeer, seconds);
    reindeer = reindeer.sort((a,b) => { return b.points - a.points});
    return reindeer[0].points;
}

export function solvePuzzle() {
    let readFileSync = require("fs").readFileSync;
    let file = __dirname + "/input.txt";
    let input = readFileSync(file, "utf8");

    let part1 = solvePart1(input);
    let part2 = solvePart2(input);

    return {part1, part2};
}

