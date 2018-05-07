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



// words = ["cat", "in", "hat"];
// words.forEach(function(word, num, all) {
//   console.log("Word " + num + " in " + all.toString() + " is " + word);
// });
// Prints:
// Word 0 in cat,in,hat is cat
// Word 1 in cat,in,hat is in
// Word 2 in cat,in,hat is hat


var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];




var totals = bills.map(function tipsAdded(subtotals) {
  subtotals *= 1.15;
  subtotals = subtotals.toFixed(2);
  return Number(subtotals);
});

console.log(totals);

// my soultion
// var bills = [50.23, 19.12, 34.01,
//   100.11, 12.15, 9.90, 29.11, 12.99,
//   10.00, 99.22, 102.20, 100.10, 6.77, 2.22
// ];

// var totals = bills.map(num => {
  
//     numTax = num * 0.15;
//     num += numTax;
//     num = num.toFixed(2);
//     return Number(num);
  
// });


// console.log(totals);