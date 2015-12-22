export function parseLine(line) {
    let ingredient = {};

    line = line.split(":");
    ingredient.name = line[0];

    line = line[1].split(",");
    line.forEach((property) => {
        property = property.trim().split(" ");
        let name = property[0];
        let value = parseInt(property[1], 10);
        ingredient[name] = value;
    });

    return ingredient;
}

export function createRecipe(numIngredients, available=100) {
    let recipes = [];
    numIngredients--;

    if(numIngredients === 0) {
        recipes.push([available]);
    }

    if(numIngredients > 0) {
        for(let i=0; i<available; i++) {
            let otherRecipes = createRecipe(numIngredients, available-i);

            otherRecipes.forEach((recipe) => {
                recipe.unshift(i);
                recipes.push(recipe);
            });
        }
    }

    return recipes;
}

export function combinePortions(portion1, portion2) {
    return {
        capacity: portion1.capacity + portion2.capacity,
        durability: portion1.durability + portion2.durability,
        flavor: portion1.flavor + portion2.flavor,
        texture: portion1.texture + portion2.texture,
        calories: portion1.calories + portion2.calories,
    }
}

export function portionIngredient(ingredient, portion) {
    let {capacity, durability, flavor, texture, calories} = ingredient;
    capacity *= portion;
    durability *= portion;
    flavor *= portion;
    texture *= portion;
    calories *= portion;

    return { capacity, durability, flavor, texture, calories};
}

export function bestScore(prev, recipe) {
    let score = Object.keys(recipe).reduce((score, key) =>{
        if(key === "calories") return score;
        let prop = recipe[key];
        if(prop < 0) prop = 0;
        return score * prop;
    }, 1);

    return score > prev ? score : prev;
}

export function parseInput(input) {
    return input.trim().split("\n").map(parseLine);
}

export function solvePart1(input) {
    let ingredients = parseInput(input);
    let recipes = createRecipe(4);
    
    let res = recipes.map((recipe) => {
        let result = recipe.map((portion, i) => {
            let ingredient = ingredients[i];
            return portionIngredient(ingredient, portion);
        }).reduce(combinePortions, {
            capacity: 0,
            durability: 0,
            flavor: 0,
            texture: 0,
            calories: 0
        });
        return result;
    });


    let score  = res.reduce(bestScore, 0);
    return score;
}

export function solvePart2(input) {
    let ingredients = parseInput(input);
    let recipes = createRecipe(4);
    
    let res = recipes.map((recipe) => {
        let result = recipe.map((portion, i) => {
            let ingredient = ingredients[i];
            return portionIngredient(ingredient, portion);
        }).reduce(combinePortions, {
            capacity: 0,
            durability: 0,
            flavor: 0,
            texture: 0,
            calories: 0
        });
        return result;
    });

    res = res.filter(recipe => recipe.calories === 500);

    let score  = res.reduce(bestScore, 0);
    return score;
}

export function solvePuzzle() {
    let readFileSync = require("fs").readFileSync;
    let file = __dirname + "/input.txt";
    let input = readFileSync(file, "utf8");

    let part1 = solvePart1(input);
    let part2 = solvePart2(input);

    return {part1, part2};
}

