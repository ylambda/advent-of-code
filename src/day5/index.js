
export function nice(input) {
    return hasThreeVowels(input) && hasDoubleLetter(input) && !hasInvalidString(input);
}

function hasThreeVowels(input) {
    var vowels = /([aeiou].*){3}/
    return vowels.test(input);
}

function hasDoubleLetter(input) {
    var regex = /(.)\1/
    return regex.test(input);
}

function hasInvalidString(input) {
    var regex = /ab|cd|pq|xy/
    return regex.test(input);
}

export function nice2(input) {
    return hasPairedLetters(input) && hasRepeatedCharactersSeparated(input);
}

export function hasPairedLetters(input) {
    var regex = /(..).*\1/
    return regex.test(input)
}

export function hasRepeatedCharactersSeparated(input) {
    var regex = /(.).\1/
    return regex.test(input);
}

export function solvePuzzle() {
    var readFileSync = require("fs").readFileSync;
    var file = __dirname + "/input.txt";
    var input = readFileSync(file, "utf8");
    input = input.trim().split("\n");

    var part1 = input.reduce((sum, str) => {
        return sum + (nice(str) ? 1 : 0);
    }, 0);

    var part2 = input.reduce((sum, str) => {
        return sum + (nice2(str) ? 1 : 0);
    }, 0);

    return {part1, part2};
}

