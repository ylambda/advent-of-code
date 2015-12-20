import {assert} from "chai";
import * as puzzle from "../src/day14";

describe("Day 14", () => {

    describe("Part 1", () => {
        it("should parse a reinder line", () => {
            let reindeer = "Rudolph can fly 22 km/s for 8 seconds, ";
            reindeer += "but then must rest for 165 seconds."

            let actual = puzzle.parseLine(reindeer);
            let expected = {
                name: 'Rudolph',
                velocity: 22,
                seconds: 8,
                rest: 165,
                position: 0,
                state: ['move', 0],
                points: 0
            };

            assert.deepEqual(actual, expected);
        });

        it("should step through each second", () =>{
            let input  = "Rudolph can fly 22 km/s for 8 seconds, ";
            input += "but then must rest for 165 seconds."

            let reindeer = puzzle.parseInput(input);
            reindeer = puzzle.stepWorld(reindeer);

            assert.equal(reindeer[0].position, 22);
            assert.equal(reindeer[0].state[1], 1);

            // reindeer should not move
            reindeer = puzzle.stepWorldBy(reindeer, 8);
            assert.equal(reindeer[0].state[1], 1);
            assert.equal(reindeer[0].position, 8*22);
        })
    });

    describe("Part 2", () => {
    });

});
