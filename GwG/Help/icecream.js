var flavor = "vanilla";
var vessel = "cone";
var toppings = "peanuts";


var choice = flavor === "vanilla" || flavor === "chocolate" && vessel === "cone" || vessel === "bowl" && toppings === "sprinkles" || toppings === "peanuts" ?
console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".") : "Not an options";



if((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")){
    console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
}
else{
    console.log("Not an option");
}
 