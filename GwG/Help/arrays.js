// /*
//  * Programming Quiz: Colors of the Rainbow (6-4)
//  */

// var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

// // your code goes here

// rainbow.splice(-2, 1, "Yellow", "Green");
// rainbow.push("Purple");
// console.log(rainbow);


/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

// your code goes here

// var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
// console.log(hasEnoughPlayers(team));

// function hasEnoughPlayers(team){
//     if(team.length >= 7){
//         return true;
//     }
//     return false;
    
// }



words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});
// Prints:
// Word 0 in cat,in,hat is cat
// Word 1 in cat,in,hat is in
// Word 2 in cat,in,hat is hat