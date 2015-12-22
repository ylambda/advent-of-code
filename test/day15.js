import {assert} from "chai";
import * as puzzle from "../src/day15";

describe("Day 15", () => {

    describe("Part 1", () => {
        it("should parse a line item", () => {
            let line = "Sprinkles: capacity 5, durability -1, flavor 0, texture 0, calories 5";
            let actual = puzzle.parseLine(line);
            let expected = {
                name: "Sprinkles",
                capacity: 5,
                durability: -1,
                flavor: 0,
                texture: 0,
                calories: 5
            };

            assert.deepEqual(actual, expected);
        });

        it("should create recipes", () => {
        });
    });

    describe("Part 2", () => {
    });

});
