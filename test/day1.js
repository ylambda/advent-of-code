var assert = require("chai").assert;
var puzzle = require(__dirname+"/../src/day1");

describe("Day 1", () => {

    it("Santa should be able to navigate an apartment", () => {
        assert.equal(puzzle.calcFloor("(())"), 0);
        assert.equal(puzzle.calcFloor("()()"), 0);
        assert.equal(puzzle.calcFloor("((("), 3);
        assert.equal(puzzle.calcFloor("(()(()("), 3);
        assert.equal(puzzle.calcFloor("())"), -1);
        assert.equal(puzzle.calcFloor("))("), -1);
        assert.equal(puzzle.calcFloor(")))"), -3);
        assert.equal(puzzle.calcFloor(")())())"), -3);
    });

    it("Should be able to find when Santa enters basement", () => {
        assert.equal(puzzle.calcEnterBasement(")"), 1);
        assert.equal(puzzle.calcEnterBasement("()())"), 5);
    });

});
