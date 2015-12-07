var assert = require("chai").assert;
var solution = require(__dirname+"/../src/day5");

describe("Day 5", () => {

    describe("Part 1", () => {
        it("should validate nice strings", () => {
            assert.equal(solution.nice("ugknbfddgicrmopn"), true);
            assert.equal(solution.nice("aaa"), true);
        });

        it("should invalidate naughty strings", () => {
            assert.equal(solution.nice("jchzalrnumimnmhp"), false, "no double letter");
            assert.equal(solution.nice("haegwjzuvuyypxyu"), false, "contains xy");
            assert.equal(solution.nice("dvszwmarrgswjxmb"), false, "single vowel");
        });
    });

    describe("Part 2", () => {
        it("should contain a pair of letters twice", () => {
            assert.equal(solution.hasPairedLetters("xyxy"), true);
            assert.equal(solution.hasPairedLetters("aaa"), false, "no overlapping");
        });

        it("should contain repeated letter with a separator", () => {
            assert.equal(solution.hasRepeatedCharactersSeparated("xyx"), true);
            assert.equal(solution.hasRepeatedCharactersSeparated("abcdefeghi"), true);
            assert.equal(solution.hasRepeatedCharactersSeparated("aaa"), true);
        });

        it("should find nice strings", () => {
            assert.equal(solution.nice2("qjhvhtzxzqqjkmpb"), true);
            assert.equal(solution.nice2("xxyxx"), true);
        });

        it("should find naughty strings", () => {
            assert.equal(solution.nice2("uurcxstgmygtbstg"), false);
            assert.equal(solution.nice2("ieodomkazucvgmuy"), false);
        });
    });

});
