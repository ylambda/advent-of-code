var assert = require("chai").assert;
var solution = require(__dirname+"/../src/day6");

describe("Day 6", () => {

    describe("Part 1", () => {
        it("should determine how many lights are on", () => {
            var command1 = "turn on 0,0 through 9,9";
            var command2 = command1+"\nturn off 0,4 through 9,4";
            var command3 = command1+"\ntoggle 0,4 through 9,4";

            solution.lightGrid(command1, 10*10);
            solution.lightGrid(command2, (10*10) - 100 );
            solution.lightGrid(command3, (10*10) - 100 );
        });
    });

    describe("Part 2", () => {
        it("should determine intensity of lights", () => {
            var command1 = "turn on 0,0 through 9,9";
            var command2 = command1+"\nturn off 0,4 through 9,4";
            var command3 = command1+"\ntoggle 0,4 through 9,4";

            solution.lightGrid(command1, 10*10);
            solution.lightGrid(command2, (10*10) - 100 );
            solution.lightGrid(command3, (10*10) + 200 );
        });
    });

});
