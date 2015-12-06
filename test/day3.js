var assert = require("chai").assert;
var solution = require(__dirname+"/../src/day3");

describe("Day 3", () => {

    it("Should determine how many houses were visited", () => {
        assert.equal(solution.calcHouses(">"), 2);
        assert.equal(solution.calcHouses("^>v<"), 4);
        assert.equal(solution.calcHouses("^v^v^v^v^v"), 2);
    });

    it("should have seperate maps for Santa and Robo-Santa", () => {
        assert.equal(solution.calcHouses2("^v"), 3);
        assert.equal(solution.calcHouses2("^>v<"), 3);
        assert.equal(solution.calcHouses2("^v^v^v^v^v"), 11);
    });

});
