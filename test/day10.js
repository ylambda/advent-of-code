import {assert} from "chai";
import * as puzzle from "../src/day10";

describe("Day 10", () => {

    describe("Part 1", () => {
        it("Should repeat the run of digits", () => {
            assert.equal(puzzle.lookAndSay("1"), "11");
            assert.equal(puzzle.lookAndSay("111"), "31");
            assert.equal(puzzle.lookAndSay("21"), "1211");
            assert.equal(puzzle.lookAndSay("1211"), "111221");
            assert.equal(puzzle.lookAndSay("111221"), "312211");
        });
    });

    describe("Part 2", () => {
    });

});
