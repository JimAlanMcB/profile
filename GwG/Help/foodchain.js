/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = true;
var eatsAnimals = true;

var category = eatsAnimals && !eatsPlants ? "carnivore" : eatsPlants && !eatsAnimals ? "herbivore" : eatsAnimals &&  eatsPlants ? "omnivore" : undefined;

console.log(category);

if(eatsAnimals && !eatsPlants){
    category = "carnivore";
}
else if(eatsAnimals && eatsPlants){
    category = "omnivore";
}
else if(eatsPlants && !eatsAnimals){
    category = "herbivore";
}
else
 category = undefined;

 console.log(category);