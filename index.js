require("babel-register");

function solvePuzzle(day) {
    var regex = /day[12]?[0-9]/;
    day = regex.test(day) ? day : "day"+parseInt(day, 10);

    var puzzle = require(__dirname+"/src/"+day);
    var solution = puzzle.solvePuzzle();
    console.log("%s", (day[0].toUpperCase()) + day.slice(1));
    console.log("  Part1: %s", solution.part1);
    console.log("  Part2: %s", solution.part2);
}

if (!process.argv[2]) {
    var readdirSync = require("fs").readdirSync;
    readdirSync(__dirname+"/src/").forEach(solvePuzzle);
} else {
    solvePuzzle(process.argv[2]);
}
