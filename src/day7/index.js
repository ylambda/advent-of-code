function parseInput(input) {
    return input.trim().split("\n")
        .map(tokenize);
}

var done = true;
var memory = {};
var size = 65535;
var re_assignment = /(.+) -> ([a-z]+)/;
var re_complement = /NOT (\w+)/;
var re_and = /(\w+) AND (\w+)/;
var re_or = /(\w+) OR (\w+)/;
var re_rshift = /(\w+) RSHIFT (\d+)/;
var re_lshift = /(\w+) LSHIFT (\d+)/;
var re_identity = /(\w+)/;
var assign = {};

function tokenize(input , log = false) {
    var match;

    match = re_assignment.exec(input);
    if(match) {
        return [assignment, tokenize(match[1]), match[2]];
    }

    match = re_complement.exec(input);
    if(match) {
        return [complement, tokenize(match[1])];
    }

    match = re_and.exec(input);
    if(match) {
        return [and, tokenize(match[1]), tokenize(match[2])];
    }

    match = re_or.exec(input);
    if(match) {
        return [or, tokenize(match[1]), tokenize(match[2])];
    }

    match = re_rshift.exec(input);
    if(match) {
        return [rshift, tokenize(match[1]), tokenize(match[2])];
    }

    match = re_lshift.exec(input);
    if(match) {
        return [lshift, tokenize(match[1]), tokenize(match[2])];
    }

    match = re_identity.exec(input);
    if(match) {
        return [identity, match[1]];
    }

    return input;
}

function assignment(value, dest) {
    return memory[dest] = parseInt(value, 10);
}

function complement(value) {
    return (size - value);
}

function and(value1, value2) {
    return (value1 & value2) & size;
}

function or(value1, value2) {
    return (value1 | value2) & size;
}

function rshift(value1, value2) {
    return (value1 >> parseInt(value2, 10)) & size;
}

function lshift(value1, value2) {
    return (value1 << parseInt(value2, 10)) & size;
}

function identity(value) {
    var v = parseInt(value, 10);
    if(!isNaN(v))
        return v;
    return memory[value];
}

function execute(expression) {
    if(!Array.isArray(expression))
        return expression;

    done = false;
    var operator = expression[0];
    var args = expression.slice(1).map(execute);

    var brokenArgs = args.findIndex(v => Array.isArray(v))
    if(brokenArgs !== -1)
        return [operator, ...args];

    var result = operator(...args);
    // cannot execute at this time
    if(result === undefined)
        return [operator, ...args];

    return result;
}

export function emulate(input) {
    memory = {};
    done = false;

    var ast = parseInput(input);

    while(!done) {
        done = true;
        ast  = ast.map(execute);
    }

   return memory;
}

export function solvePuzzle() {
    var readFileSync = require("fs").readFileSync;
    var file = __dirname + "/input.txt";
    var input = readFileSync(file, "utf8");

    var part1 = emulate(input).a;

    // replace b assignment with answer from part1
    var input2 = input.replace(/\d+ -> b/, part1+" -> b");
    var part2 = emulate(input2).a;

    return {part1, part2};
}

