import {assert} from "chai";
import * as puzzle from "../src/day8";

describe("Day 8", () => {

    describe("Part 1", () => {
        it("should count empty string", () => {
            let string = '""';
            let stringSize = puzzle.stringSize(string);
            let stringLiteralSize = puzzle.stringLiteralSize(string);

            assert.equal(stringSize, 2);
            assert.equal(stringLiteralSize, 0);
        });

        it("should count simple string", () => {
            let string = '"abc"';
            let stringSize = puzzle.stringSize(string);
            let stringLiteralSize = puzzle.stringLiteralSize(string);

            assert.equal(stringSize, 5);
            assert.equal(stringLiteralSize, 3);
        });

        it("should count string with backslash", () => {
            let string = '"aaa\\"aaa"';
            let stringSize = puzzle.stringSize(string);
            let stringLiteralSize = puzzle.stringLiteralSize(string);

            assert.equal(stringSize, 10);
            assert.equal(stringLiteralSize, 7);
        });

        it("should count string with hexadecimal char", () => {
            let string = '"\\x27"';
            let stringSize = puzzle.stringSize(string);
            let stringLiteralSize = puzzle.stringLiteralSize(string);

            assert.equal(stringSize, 6);
            assert.equal(stringLiteralSize, 1);
        });
    });

    describe("Part 2", () => {
        it("should count empty string", () => {
            let string = '""';
            let stringSize = puzzle.stringSize(string);
            let encodeStringSize = puzzle.encodeStringSize(string);

            assert.equal(stringSize, 2);
            assert.equal(encodeStringSize, 6);
        });

        it("should count simple string", () => {
            let string = '"abc"';
            let stringSize = puzzle.stringSize(string);
            let encodeStringSize = puzzle.encodeStringSize(string);

            assert.equal(stringSize, 5);
            assert.equal(encodeStringSize, 9);
        });

        it("should count string with backslash", () => {
            let string = '"aaa\\"aaa"';
            let stringSize = puzzle.stringSize(string);
            let encodeStringSize = puzzle.encodeStringSize(string);

            assert.equal(stringSize, 10);
            assert.equal(encodeStringSize, 16);
        });

        it("should count string with hexadecimal char", () => {
            let string = '"\\x27"';
            let stringSize = puzzle.stringSize(string);
            let encodeStringSize = puzzle.encodeStringSize(string);

            assert.equal(stringSize, 6);
            assert.equal(encodeStringSize, 11);
        });
    });

});
