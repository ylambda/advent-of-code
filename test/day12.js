import {assert} from "chai";
import * as puzzle from "../src/day12";

describe("Day 12", () => {

    describe("Part 1", () => {
        it("should sum an array", () => {
            assert.equal(puzzle.sumArray([1, 2, 3]), 6);
        });

        it("should sum an object", () => {
            assert.equal(puzzle.sumObject({a: 1, b: 2, c: 3}), 6);
        });

        it("should sum recursively", () => {
            assert.equal(puzzle.sumValue([[[3]]]), 3);
            assert.equal(puzzle.sumValue({"a":{"b":4},"c":-1}), 3);
        });

        it("should return 0 for empty array/objects", () => {
            assert.equal(puzzle.sumValue([]), 0);
            assert.equal(puzzle.sumValue({}), 0);
        });

    });

    describe("Part 2", () => {

        it("should ignore objects with red as a value", () => {
            assert.equal(puzzle.solvePart2([1,2,3]), 6);
            assert.equal(puzzle.solvePart2([1,{"c":"red","b":2},3]), 4);
            assert.equal(puzzle.solvePart2({"d":"red","e":[1,2,3,4],"f":5}), 0);
            assert.equal(puzzle.solvePart2([1,"red",5]), 6);
        });
    });

});
