export function parseInput(input) {
    return input.trim().split("");
}

export function calcHouses(input) {
    input = parseInput(input);

    var houseMap = new HouseMap();

    input.forEach(houseMap.moveSanta.bind(houseMap));

    return houseMap.map.size;
}

export function calcHouses2(input) {
    input = parseInput(input);

    var houseMap = new HouseMap();

    input.forEach((direction, index) => {
        if(index % 2 === 0) {
            houseMap.moveSanta(direction);
        } else {
            houseMap.moveRoboSanta(direction);
        }
    });

    return houseMap.map.size;
}

export class HouseMap {
    constructor () {
        this.map = new Map();
        this.santa = {x: 0, y: 0};
        this.roboSanta = {x: 0, y: 0};

        // first house is always visited
        this.map.set("0,0", 1);
    }

    move(person, direction) {
        switch(direction) {
            case "^":
                this[person].y +=1; break;
            case "v":
                this[person].y -=1; break;
            case ">":
                this[person].x +=1; break;
            case "<":
                this[person].x -=1; break;
        }

        var key = `${this[person].x},${this[person].y}`;
        if(!this.map.has(key))
            this.map.set(key, 0);

        this.map.set(key, this.map.get(key) + 1);
    }

    moveSanta (direction) {
        this.move("santa", direction);
    }

    moveRoboSanta (direction) {
        this.move("roboSanta", direction);
    }
}

export function solvePuzzle() {
    var readFileSync = require("fs").readFileSync;
    var file = __dirname + "/input.txt";
    var input = readFileSync(file, "utf8");

    var part1 = calcHouses(input);
    var part2 = calcHouses2(input);

    return {part1, part2};
}

