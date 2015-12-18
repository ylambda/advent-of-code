import {assert} from "chai";
import * as puzzle from "../src/day13";

describe("Day 13", () => {

    describe("Part 1", () => {
        let seating = "";
        seating += "Alice would gain 54 happiness units by sitting next to Bob.\n";
        seating += "Alice would lose 79 happiness units by sitting next to Carol.\n";
        seating += "Alice would lose 2 happiness units by sitting next to David.\n";
        seating += "Bob would gain 83 happiness units by sitting next to Alice.\n";
        seating += "Bob would lose 7 happiness units by sitting next to Carol.\n";
        seating += "Bob would lose 63 happiness units by sitting next to David.\n";
        seating += "Carol would lose 62 happiness units by sitting next to Alice.\n";
        seating += "Carol would gain 60 happiness units by sitting next to Bob.\n";
        seating += "Carol would gain 55 happiness units by sitting next to David.\n";
        seating += "David would gain 46 happiness units by sitting next to Alice.\n";
        seating += "David would lose 7 happiness units by sitting next to Bob.\n";
        seating += "David would gain 41 happiness units by sitting next to Carol.\n";

        it("should parse a happiness line", () => {
            let line = "Alice would gain 54 happiness units by sitting next to Bob.";
            let actual = puzzle.parseLine(line);
            let expected = {person: 'Alice', next: 'Bob', points: 54}

            assert.deepEqual(actual, expected);
        });

        it("should parse a negative happiness line", () => {
            let line = "Alice would lose 54 happiness units by sitting next to Bob.";
            let actual = puzzle.parseLine(line);
            let expected = {person: 'Alice', next: 'Bob', points: -54}

            assert.deepEqual(actual, expected);
        });

        it("should parse an entire seating instruction set", () => {
            let actual = puzzle.parseInput(seating);
            assert.isArray(actual);
        });

        it("should combine parsed lines into structure", () => {
            let instructions = puzzle.parseInput(seating);
            let actual = puzzle.combineInstructions(instructions);
            assert.isObject(actual);
            assert.deepEqual(actual['Alice'], {'Bob': 54, 'Carol': -79, 'David': -2});
        });

        it("should compute the score of an arrangement", () => {
            let instructions = puzzle.parseInput(seating);
            let map = puzzle.combineInstructions(instructions);
            let arrangement = ["Alice", "David", "Bob"];

            let reducer = puzzle.reduceSeating(map, arrangement);
            assert.isFunction(reducer);

            let actual = reducer(0, "Alice", 0);
            assert.equal(actual, 52);
        });

        it("should create an array of all possible arrangements", () => {
            let instructions = puzzle.parseInput(seating);
            let map = puzzle.combineInstructions(instructions);
            let arrangements = puzzle.createArrangements(map);

            assert.isArray(arrangements);
        });

        it("should find the best arrangement", () => {
            let instructions = puzzle.parseInput(seating);
            let map = puzzle.combineInstructions(instructions);
            let arrangements = puzzle.createArrangements(map);

            let actual = puzzle.findBest(map, arrangements);
            assert.equal(actual, 330);
        });

    });

    describe("Part 2", () => {
    });

});
