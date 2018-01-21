/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 100;

while (num > 1) {
    num -= 1;
    var nums = num == 1 ? console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!")     
    : console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... "  +  (num > 2 ? num - 1 + " bottles" : num == 2 ? num - 1 + " bottle" : "") + " of juice on the wall!");
  // : num === 0 ? console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around..." + num - 1 + "bottles of juice on the wall!")  
}

  // check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num