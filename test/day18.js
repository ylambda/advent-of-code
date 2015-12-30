import {assert} from "chai";
import * as puzzle from "../src/day18";

describe("Day 18", () => {

    describe("Part 1", () => {
        it("should step the puzzle", () => {

            var step1 = "";
            step1 += ".#.#.#\n";
            step1 += "...##.\n";
            step1 += "#....#\n";
            step1 += "..#...\n";
            step1 += "#.#..#\n";
            step1 += "####..";

            var expected = "";
            expected += "..##..\n";
            expected += "..##.#\n";
            expected += "...##.\n";
            expected += "......\n";
            expected += "#.....\n";
            expected += "#.##..";

            var actual = puzzle.step(step1);

            assert.equal(actual, expected);
        });
    });

    describe("Part 2", () => {
    });

});
