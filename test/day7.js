var assert = require("chai").assert;
var puzzle = require(__dirname+"/../src/day7");

describe("Day 7", () => {

    describe("Part 1", () => {
        it("should evaluate properly", () => {
            var commands = "";
            commands += "x AND y -> d";
            commands += "\nx OR y -> e";
            commands += "\nx LSHIFT 2 -> f";
            commands += "\ny RSHIFT 2 -> g";
            commands += "\nNOT x -> h";
            commands += "\nNOT y -> i";
            commands += "\n123 -> x";
            commands += "\n456 -> y";

            var result = puzzle.emulate(commands);
            assert.equal(result.x, 123);
            assert.equal(result.y, 456);
            assert.equal(result.h, 65412);
            assert.equal(result.i, 65079);
            assert.equal(result.d, 72);
            assert.equal(result.e, 507);
            assert.equal(result.f, 492);
            assert.equal(result.g, 114);
        });

        it("should evaluate properly", () => {
            var commands = "";
            commands += "1 AND y -> d";
            commands += "\n65 -> x";
            commands += "\n38448 -> y";

            var result = puzzle.emulate(commands);
            console.log(result.x, result.y, result.d);
        });
    });

    describe("Part 2", () => {
    });

});
