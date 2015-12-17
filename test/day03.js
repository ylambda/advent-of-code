import { assert } from "chai";
import * as puzzle from "../src/day03";

describe("Day 3", () => {

    it("Should determine how many houses were visited", () => {
        assert.equal(puzzle.calcHouses(">"), 2);
        assert.equal(puzzle.calcHouses("^>v<"), 4);
        assert.equal(puzzle.calcHouses("^v^v^v^v^v"), 2);
    });

    it("should have seperate maps for Santa and Robo-Santa", () => {
        assert.equal(puzzle.calcHouses2("^v"), 3);
        assert.equal(puzzle.calcHouses2("^>v<"), 3);
        assert.equal(puzzle.calcHouses2("^v^v^v^v^v"), 11);
    });

});
