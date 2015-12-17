import { assert } from "chai";
import * as puzzle from "../src/day02";

describe("Day 2", () => {

    it("should determine wrapping size", () => {
        assert.equal(puzzle.calcWrappingPaper(2, 3, 4), 58);
        assert.equal(puzzle.calcWrappingPaper(1, 1, 10), 43);
    });

    it("should determine ribbon length", () => {
        assert.equal(puzzle.calcRibbonLength(2, 3, 4), 34);
        assert.equal(puzzle.calcRibbonLength(1, 1, 10), 14);
    });

});
