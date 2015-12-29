import {assert} from "chai";
import * as puzzle from "../src/day17";

describe("Day 17", () => {

    describe("Part 1", () => {
        it("should find all combinations", () => {
            let containers = [20, 15, 10, 5, 5];
            let combinations = puzzle.findCombinations(containers, 25);

            assert.equal(combinations.length, 4);
        })
    });

    describe("Part 2", () => {
    });

});
