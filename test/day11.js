import {assert} from "chai";
import * as puzzle from "../src/day11";

describe("Day 11", () => {

    describe("Part 1", () => {
        it("password includes 3 straight letters", () => {
            assert.equal(puzzle.hasStraight("abc"), true);
            assert.equal(puzzle.hasStraight("def"), true);
            assert.equal(puzzle.hasStraight("bcd"), true);
            assert.equal(puzzle.hasStraight("abd"), false);
        });

        it("test for confusing characters", () => {
            assert.equal(puzzle.hasConfusing("i"), true)
            assert.equal(puzzle.hasConfusing("o"), true)
            assert.equal(puzzle.hasConfusing("l"), true)

            assert.equal(puzzle.hasConfusing("rot"), true)
            assert.equal(puzzle.hasConfusing("roll"), true)
            assert.equal(puzzle.hasConfusing("rink"), true)

            assert.equal(puzzle.hasConfusing("rank"), false)
        });

        it("has two character pairs that are not overlapping",  () => {
            assert.equal(puzzle.hasPairs("aazz"), true);
            assert.equal(puzzle.hasPairs("aaa"), false);
            assert.equal(puzzle.hasPairs("aa"), false);
        });

        it("should increment the password", () => {
            assert.equal(puzzle.incrementString("a"), "b");
            assert.equal(puzzle.incrementString("z"), "aa");
        });

        it("test the password generation", () => {
            assert.equal(puzzle.solvePart1("abcdefgh"), "abcdffaa");
            assert.equal(puzzle.solvePart1("ghijklmn"), "ghjaabcc");
        });
    });

    describe("Part 2", () => {
    });

});
