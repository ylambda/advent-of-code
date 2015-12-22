import {assert} from "chai";
import * as puzzle from "../src/day16";

describe("Day 16", () => {

    describe("Part 1", () => {
        it("should parse an input line", () => {
            let line = "Sue 1: goldfish: 6, trees: 9, akitas: 0";
            let actual = puzzle.parseLine(line);
            let expected = {
                goldfish: 6,
                trees: 9,
                akitas: 0
            }

            assert.deepEqual(actual, expected);
        });

        it("should filter aunt list", () => {
            let key = "children";
            let value = 3;
            let search = puzzle.hasMatchOrUnspecified(key, value);

            let aunts = [
                [{children: 3}, true],
                [{children: 4}, false],
                [{dogs: 4}, true],
                [{dogs: 4, children: 4}, false]
            ];

            aunts.forEach((test) => {
                let [aunt, expected] = test;
                let actual = search(aunt);
                assert.equal(actual, expected);
            });
        });
    });

    describe("Part 2", () => {
        it("should account for nuclear decay of cat dander and tree pollen", () => {
            let key = "cats";
            let value = 3;
            let search = puzzle.hasMatchOrUnspecifiedRange(key, value);

            let aunts = [
                [{cats: 10}, true],
                [{cats: 2}, false],
                [{trees: 4}, true],
                [{trees: 2, cats: 3}, false]
            ];

            aunts.forEach((test) => {
                let [aunt, expected] = test;
                let actual = search(aunt);
                assert.equal(actual, expected);
            });
        });

        it("should account for modial interaction of magnetoreluctance", () => {
            let key = "goldfish";
            let value = 3;
            let search = puzzle.hasMatchOrUnspecifiedRange(key, value);

            let aunts = [
                [{goldfish: 10}, false],
                [{goldfish: 2}, true],
                [{trees: 4}, true],
                [{trees: 2, goldfish: 3}, false]
            ];

            aunts.forEach((test) => {
                let [aunt, expected] = test;
                let actual = search(aunt);
                assert.equal(actual, expected);
            });
        });
    });

});
