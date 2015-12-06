var assert = require("chai").assert;
var solution = require(__dirname+"/../src/day1");

describe("Day 1", () => {

    it("Santa should be able to navigate an apartment", () => {
        assert.equal(solution.calcFloor("(())"), 0);
        assert.equal(solution.calcFloor("()()"), 0);
        assert.equal(solution.calcFloor("((("), 3);
        assert.equal(solution.calcFloor("(()(()("), 3);
        assert.equal(solution.calcFloor("())"), -1);
        assert.equal(solution.calcFloor("))("), -1);
        assert.equal(solution.calcFloor(")))"), -3);
        assert.equal(solution.calcFloor(")())())"), -3);
    });

    it("Should be able to find when Santa enters basement", () => {
        assert.equal(solution.calcEnterBasement(")"), 1);
        assert.equal(solution.calcEnterBasement("()())"), 5);
    });

});
