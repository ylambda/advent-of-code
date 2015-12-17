function parseInput(input) {
    input = input.trim().split("\n")
        .map((line) => {
            let [origin, , dest, , distance] = line.split(" ");
            distance = parseInt(distance, 10);
            return {origin, dest, distance};
        });

    let map = {};
    input.forEach(function(path) {
        let origin = map[path.origin];
        let dest = map[path.dest];

        if(origin === undefined) origin = map[path.origin] = {};
        origin[path.dest] = path.distance;

        if(dest === undefined) dest = map[path.dest] = {};
        dest[path.origin] = path.distance;
    });

    return map;
}

function travel(map, visited, distance) {
    let location = visited[visited.length - 1];
    let origin = map[location];
    let destinations = Object.keys(origin)
        .filter(key => visited.indexOf(key) === -1)
        .map((key) => {
            let newVisited = visited.slice(0)
            newVisited.push(key);
            let newDistance = distance+origin[key];
            return travel(map, newVisited, newDistance);
        });

    if(destinations.length)
        return destinations;
    if(visited.length !== Object.keys(map).length)
        return null;
    return distance;
}

function flatten(a, x) {
    if(Array.isArray(x)) return x.reduce(flatten, a);
    return a.concat(x);
}

export function solvePart1(input) {
    let paths = parseInput(input);
    let distances = Object.keys(paths).map((city) => {
        return travel(paths, [city], 0).reduce(flatten, [])
    }).reduce(flatten, []);

    return Math.min(...distances);
}

export function solvePart2(input) {
    let paths = parseInput(input);
    let distances = Object.keys(paths).map((city) => {
        return travel(paths, [city], 0).reduce(flatten, [])
    }).reduce(flatten, []);

    return Math.max(...distances);
}

export function solvePuzzle() {
    let readFileSync = require("fs").readFileSync;
    let file = __dirname + "/input.txt";
    let input = readFileSync(file, "utf8");

    let part1 = solvePart1(input);
    let part2 = solvePart2(input);

    return {part1, part2};
}

