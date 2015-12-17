var crypto = require("crypto");

export function coinMineFactory(sufficient) {
    return function(input) {
        var count = 0;
        var result;
        do {
            count++;
            result = md5hash(input+count);
        } while(!sufficient(result));

        return count;
    }
}

export var minecoin = coinMineFactory(sufficient5);
export var superMinecoin = coinMineFactory(sufficient6);


function md5hash(input) {
    return crypto.createHash("md5").update(input).digest("hex")
}

function sufficient5(value) {
    return value.indexOf("00000") === 0;
}

function sufficient6(value) {
    return value.indexOf("000000") === 0;
}

export function solvePuzzle() {
    var part1 = minecoin("bgvyzdsv");
    var part2 = superMinecoin("bgvyzdsv");

    return {part1, part2};
}

