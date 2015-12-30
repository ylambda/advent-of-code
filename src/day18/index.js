export function parseInput(input) {
    return input.trim().split("\n").map(x => x.split(""));
}

export function step(input) {
    input = parseInput(input);

    var grid = [];
    
    input.forEach((row, y) => {

        grid.push([]);

        row.forEach((light, x) => {
            var neighborsOn = 0;

            var test = (x===2 && y===0);

            if (x>0 && y>0) {
                neighborsOn += (input[y-1][x-1] === "#" ? 1 : 0);
            }

            if(y>0) {
                neighborsOn += (input[y-1][x] === "#" ? 1 : 0);
            }

            if(x<row.length-1 && y>0){
                neighborsOn += (input[y-1][x+1] === "#" ? 1 : 0);
            }

            if (x>0) {
                neighborsOn += (input[y][x-1] === "#" ? 1 : 0);
            }

            if(x<row.length-1){
                neighborsOn += (input[y][x+1] === "#" ? 1 : 0);
            }

            if(x>0 && y<input.length-1) {
                neighborsOn += (input[y+1][x-1] === "#" ? 1 : 0);
            }

            if(y<input.length-1) {
                neighborsOn += (input[y+1][x] === "#" ? 1 : 0);
            }

            if(x<row.length-1 && y<input.length-1) {
                neighborsOn += (input[y+1][x+1] === "#" ? 1 : 0);
            }

            var on = false;
            if(light === "#") {
                if (neighborsOn === 2 || neighborsOn === 3) {
                    on = true;
                } else {
                    on = false;
                }
            } else {
                if(neighborsOn === 3) {
                    on = true;
                }
            }

            grid[y].push(on ? "#" : ".");

        });
    });

    return grid.map(x => x.join("")).join("\n");
}

export function solvePart1(input) {
    for(var i=0; i<100; i++) {
        input = step(input);
    }

    return parseInput(input).reduce((sum, row) => {
        let rowSum = row.reduce((sum, light) => {
            return sum + (light === "#" ? 1 : 0);
        }, 0);

        return sum + rowSum
    }, 0);
}

export function solvePart2(input) {
    for(var i=0; i<100; i++) {
        input = parseInput(input);
        input[0][0] = "#";
        input[0][input[0].length-1] = "#";
        input[input.length-1][input[0].length-1] = "#";
        input[input.length-1][0] = "#";
        input = input.map(x => x.join("")).join("\n");
        input = step(input);
    }
    input = parseInput(input);
    input[0][0] = "#";
    input[0][input[0].length-1] = "#";
    input[input.length-1][input[0].length-1] = "#";
    input[input.length-1][0] = "#";
    input = input.map(x => x.join("")).join("\n");

    return parseInput(input).reduce((sum, row) => {
        let rowSum = row.reduce((sum, light) => {
            return sum + (light === "#" ? 1 : 0);
        }, 0);

        return sum + rowSum
    }, 0);

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

