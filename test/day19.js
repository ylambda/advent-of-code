import {assert} from "chai";
import * as puzzle from "../src/day19";

describe("Day 19", () => {

    describe("Part 1", () => {
        it("should interepret the replacements", () => {
            let replacements = "";
            replacements += "H => HO\n";
            replacements += "H => OH\n";
            replacements += "O => HH";

            let actual = puzzle.parseReplacements(replacements);
            let expected = [
                ["H", "HO"],
                ["H", "OH"],
                ["O", "HH"]
            ];

            assert.deepEqual(actual, expected);
        });

        it("should parse the medicine molecule", () => {
            let input = "";
            input += "H => HO\n";
            input += "H => OH\n";
            input += "O => HH\n\n";
            input += "CRnCaSiRnBSiRnFArTiBPTiTiBFArPBCaSiThSiRnTiBPBPMgArCaSi";

            let actual = puzzle.parseMolecule(input);
            let expected = "CRnCaSiRnBSiRnFArTiBPTiTiBFArPBCaSiThSiRnTiBPBPMgArCaSi";

            assert.equal(actual, expected);
        });

        it("should generate new molecules using replacements", () => {
            let search = "H";
            let replacement = "HO";

            let molecule = "HOH";

            let actual = puzzle.moleculeReplacements(molecule, search, replacement);
            let expected = ["HOOH", "HOHO"];

            assert.deepEqual(actual, expected);
        });
        
        it("should replace all molecules", () => {
            let input = "";
            input += "H => HO\n";
            input += "H => OH\n";
            input += "O => HH\n\n";
            input += "HOH";

            let expected = {
                HOOH: 2,
                HOHO: 1,
                OHOH: 1,
                HHHH: 1
            };

            let actual = puzzle.replaceAll(input);
            assert.deepEqual(actual, expected);
        });

        it("should count distinct molecules", () => {
            let input = "";
            input += "H => HO\n";
            input += "H => OH\n";
            input += "O => HH\n\n";
            input += "HOH";

            let expected = 4;
            let actual = puzzle.countDistinct(puzzle.replaceAll(input));

            assert.equal(actual, expected);

        });
    });

    describe("Part 2", () => {
    });

});
