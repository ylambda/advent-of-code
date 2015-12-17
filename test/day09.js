import {assert} from "chai";
import * as puzzle from "../src/day09";

describe("Day 9", () => {

    describe("Part 1", () => {
        it("should find the shortest path to travel", () => {
            let travelPaths = "";
            travelPaths += "London to Dublin = 464\n";
            travelPaths += "London to Belfast = 518\n";
            travelPaths += "Dublin to Belfast = 141";

            assert.equal(puzzle.solvePart1(travelPaths), 605);
        });
    });

    describe("Part 2", () => {
    });

});
