/*
 * Programming Quiz: Changing the Loop (4-4)
//  */

// // //rewrite the while loop as a for loop
// // var x = 9;
// // while (x >= 1) {
// //     console.log("hello " + x);
// //     x = x - 1;
// // }


// for(var x = 9; x >= 1; x--){
//     console.log("hello " + x);
// }


// /*
//  * Programming Quiz: Fix the Error 1 (4-5)
//  */

// // fix the for loop
// for (var x =5; x < 10; x++) {
//     console.log(x);
// }


// /*
//  * Programming Quiz: Fix the Error 2 (4-6)
//  */

// // fix the for loop
// for (var k = 0; k < 200; k++) {
//     console.log(k);
// }

/*
 * Programming Quiz: Factorials (4-7)
 */

// your code goes here
// solution = 1;
// for(var i = 12; i > 0; i--){
// solution *= i;
// console.log(i);                            /// Factoral - pain in ass confusing
// console.log(solution);
// }
// console.log(solution);
// console.log(5*4*3*2*1);
// console.log(12*11*10*9*8*7*6*5*4*3*2*1);


/*
 * Programming Quiz: Find my Seat (4-8)
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

// Write your code here
for(i = 0; i <=25; i++){
  for(x = 0; x<=99;x++){
    console.log(i + "-" + x);
  }
}