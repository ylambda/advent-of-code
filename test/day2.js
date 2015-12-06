var assert = require("chai").assert;
var solution = require(__dirname+"/../src/day2/solution");

describe("Day 2", () => {

    it("should determine wrapping size", () => {
        assert.equal(solution.calcWrappingPaper(2, 3, 4), 58);
        assert.equal(solution.calcWrappingPaper(1, 1, 10), 43);
    });

    it("should determine ribbon length", () => {
        assert.equal(solution.calcRibbonLength(2, 3, 4), 34);
        assert.equal(solution.calcRibbonLength(1, 1, 10), 14);
    });

});
