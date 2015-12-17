require("babel-register");

function solvePuzzle(day) {
    var regex = /day[012]?[0-9]/;
    if(!regex.test(day)) {
        day = parseInt(day, 10);
        day = ("00"+day).substr(-2, 2);
        day = "day"+day;
    }

    var puzzle = require(__dirname+"/src/"+day);
    var solution = puzzle.solvePuzzle();
    console.log("%s", capitalize(day));
    console.log("  Part1: %s", solution.part1);
    console.log("  Part2: %s", solution.part2);
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

var day = process.argv[2];
if (!day) {
    var readdirSync = require("fs").readdirSync;
    readdirSync(__dirname+"/src/").forEach(solvePuzzle);
} else {
    solvePuzzle(day);
}
