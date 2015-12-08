function parseInput(input) {
    return input.trim().split("\n").map((string) => {

        var regex = /(.*) (\d+),(\d+) through (\d+),(\d+)/;
        var [match, action, p1x, p1y, p2x, p2y] = regex.exec(string) || [];

        return {
            action: action,
            start: {x: Math.min(p1x, p2x), y: Math.min(p1y, p2y)},
            end: {x: Math.max(p1x, p2x), y: Math.max(p1y, p2y)}
        }
    });
};

function applyCommand(grid, command) {
    var {action, start, end} = command;
    for(var x=start.x; x<=end.x; x++) {
        for(var y=start.y; y<=end.y; y++) {

            var key = `${x},${y}`;
            var value = grid.get(key);

            if(value === undefined) {
                value = false;
                grid.set(key, value);
            }

            switch(action) {
                case "turn on":
                    grid.set(key, true);
                    break;
                case "turn off":
                    grid.set(key, false);
                    break;
                case "toggle":
                    grid.set(key, !value);
                    break;
            }
        }
    }
    return grid;
};

function applyCommand2(grid, command) {
    var {action, start, end} = command;
    for(var x=start.x; x<=end.x; x++) {
        for(var y=start.y; y<=end.y; y++) {

            var key = `${x},${y}`;
            var value = grid.get(key);

            if(value === undefined) {
                value = 0;
                grid.set(key, value);
            }

            switch(action) {
                case "turn on":
                    grid.set(key, value+1);
                    break;
                case "turn off":
                    if(value > 0) grid.set(key, value-1);
                    break;
                case "toggle":
                    grid.set(key, value+2);
                    break;
            }
        }
    }
    return grid;
};

export function lightGrid(input) {
    var count = 0;
    parseInput(input)
        .reduce(applyCommand, new Map())
        .forEach(value => count += (value ? 1 : 0));
    return count;
}

export function lightGrid2(input) {
    var count = 0;
    parseInput(input)
        .reduce(applyCommand2, new Map())
        .forEach(value => count += value);
    return count;
}

export function solvePuzzle() {
    var readFileSync = require("fs").readFileSync;
    var file = __dirname + "/input.txt";
    var input = readFileSync(file, "utf8");

    var part1 = lightGrid(input);
    var part2 = lightGrid2(input);

    return {part1, part2}
}

