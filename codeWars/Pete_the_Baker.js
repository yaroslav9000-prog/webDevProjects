/* 
Pete likes to bake some cakes. He has some recipes and ingredients.
 Unfortunately he is not good in maths. Can you help him to find out, 
 how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients 
(also an object) and returns the maximum number of cakes Pete can bake (integer). 
For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar 
are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, 
    {sugar: 500, flour: 2000, milk: 2000});
*/
function cakes(recipe, available) {
    let min;
    let neededIng = [];
    const recipeArr = [];
    for(item in recipe){
        if(!available.hasOwnProperty(item)){
            return 0;
        }
        neededIng.push(available[item]);
        recipeArr.push(recipe[item]);
    }
    min = neededIng[0]/ recipeArr[0];
    for(let index = 1; index < neededIng.length; index++){
        if(neededIng[index]/ recipeArr[index] < min){
            min = neededIng[index]/ recipeArr[index];
        }
    }
    if(min < 1){
        return 0;
    }else{
        return Math.floor(min);
    }
  }
let someRecipe = {flour: 500, sugar: 200, eggs: 1};
let ingredients = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
//   console.log(cakes(someRecipe, availableIngredients));
console.log(cakes(someRecipe, ingredients));

someRecipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
ingredients = {sugar: 500, flour: 2000, milk: 2000};

console.log(cakes(someRecipe, ingredients));