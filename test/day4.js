var assert = require("chai").assert;
var solution = require(__dirname+"/../src/day4");

describe("Day 4", () => {

    it("Mine for AdventCoins", function() {
        this.timeout(10e3);
        assert.equal(solution.minecoin("abcdef"), 609043);
        assert.equal(solution.minecoin("pqrstuv"), 1048970);
    });

});
