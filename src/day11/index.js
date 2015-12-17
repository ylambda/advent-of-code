
export function incrementString(str) {
    if(str.length === 0)
        return "a";

    var sub = str.substr(0, str.length-1);
    var last = str[str.length-1];
    var next = last.charCodeAt(0) + 1;

    if(next > "z".charCodeAt(0)) {
        sub = incrementString(sub);
        next = "a".charCodeAt(0);
    }

    last = String.fromCharCode(next);

    return sub+last;
}

export function hasPairs(str) {
    let result;
    let lastIndex;
    let regex = /([a-z])\1/g;

    while((result = regex.exec(str)) !== null) {
        if(lastIndex !== undefined && result.index >= lastIndex + 2)
            return true;
        lastIndex = result.index;
    }

    return false
}

export function hasConfusing(str) {
    return /[iol]/.test(str);
}

export function hasStraight(str) {

    function isNextChar(original, next) {
        return original.charCodeAt(0) === next.charCodeAt(0) - 1;
    }

    return str.split("").some((c1, i) => {
        // not enough chars left in string
        if(i > str.length - 3)
            return false;

        let c2 = str[i+1];
        let c3 = str[i+2];

        let secondChar = isNextChar(c1, c2);
        let thirdChar = isNextChar(c2, c3);

        return secondChar && thirdChar;
    });
}

export function solvePart1(input) {
    let newPassword = incrementString(input.toLowerCase());
    while(hasConfusing(newPassword) || !hasStraight(newPassword) || !hasPairs(newPassword)) {
        newPassword = incrementString(newPassword);
    }

    return newPassword
}

export function solvePart2(input) {
    return solvePart1(input);
}

export function solvePuzzle() {
    let input = "cqjxjnds";

    let part1 = solvePart1(input);
    let part2 = solvePart2(part1);

    return {part1, part2};
}

