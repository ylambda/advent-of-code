var assert = require("chai").assert;
var puzzle = require(__dirname+"/../src/day5");

describe("Day 5", () => {

    describe("Part 1", () => {
        it("should validate nice strings", () => {
            assert.equal(puzzle.nice("ugknbfddgicrmopn"), true);
            assert.equal(puzzle.nice("aaa"), true);
        });

        it("should invalidate naughty strings", () => {
            assert.equal(puzzle.nice("jchzalrnumimnmhp"), false, "no double letter");
            assert.equal(puzzle.nice("haegwjzuvuyypxyu"), false, "contains xy");
            assert.equal(puzzle.nice("dvszwmarrgswjxmb"), false, "single vowel");
        });
    });

    describe("Part 2", () => {
        it("should contain a pair of letters twice", () => {
            assert.equal(puzzle.hasPairedLetters("xyxy"), true);
            assert.equal(puzzle.hasPairedLetters("aaa"), false, "no overlapping");
        });

        it("should contain repeated letter with a separator", () => {
            assert.equal(puzzle.hasRepeatedCharactersSeparated("xyx"), true);
            assert.equal(puzzle.hasRepeatedCharactersSeparated("abcdefeghi"), true);
            assert.equal(puzzle.hasRepeatedCharactersSeparated("aaa"), true);
        });

        it("should find nice strings", () => {
            assert.equal(puzzle.nice2("qjhvhtzxzqqjkmpb"), true);
            assert.equal(puzzle.nice2("xxyxx"), true);
        });

        it("should find naughty strings", () => {
            assert.equal(puzzle.nice2("uurcxstgmygtbstg"), false);
            assert.equal(puzzle.nice2("ieodomkazucvgmuy"), false);
        });
    });

});
