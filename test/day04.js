import { assert } from "chai";
import * as puzzle from "../src/day04";

describe("Day 4", () => {

    it("Mine for AdventCoins", function() {
        this.timeout(10e3);
        assert.equal(puzzle.minecoin("abcdef"), 609043);
        assert.equal(puzzle.minecoin("pqrstuv"), 1048970);
    });

});
