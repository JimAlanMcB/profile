/*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - you must use an `if` statement to verify code is divisible by 3
 *  - you can use `console.log` to verify the `test` variable when you're finished looping
//  */

// var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
//     19, 300, 3775, 299, 36, 209, 148, 169, 299,
//     6, 109, 20, 58, 139, 59, 3, 1, 139
// ];

// // Write your code h

// /*
//  * Programming Quiz: Another Type of Loop (6-8)
//  *
//  * Use the existing `test` variable and write a `forEach` loop
//  * that adds 100 to each number that is divisible by 3.
//  *
//  * Things to note:
//  *  - you must use an `if` statement to verify code is divisible by 3
//  *  - you can use `console.log` to verify the `test` variable when you're finished looping
//  */

// var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
//     19, 300, 3775, 299, 36, 209, 148, 169, 299,
//     6, 109, 20, 58, 139, 59, 3, 1, 139
// ];

// // forEach reference (element, position of element)
// test.forEach((element, pos) => {
//     if(element % 3 === 0){

//         //element + 100;
//         test.splice(pos, 1, element + 100);
        
//     }     
     
// });
// console.log(test);

// // console.log(test);


/*
 * Programming Quiz: I Got Bills (6-9)
 *
/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */

// var bills = [50.23, 19.12, 34.01,
//     100.11, 12.15, 9.90, 29.11, 12.99,
//     10.00, 99.22, 102.20, 100.10, 6.77, 2.22
// ];


// var totals = bills.map(num => {
    
//       numTax = num * 0.15;
//       num += numTax;
//       num = num.toFixed(2);
//       return Number(num);
    
// });

// console.log(totals);

/*
 * Programming Quiz: Nested Numbers (6-10)
 *
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */

// var numbers = [
//     [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
//     [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
//     [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
//     [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
//     [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
//     [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
//     [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
//     [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
//     [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
//     [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
// ];

// // your code goes here
// // for(var i = 0; i < numbers.length; i++){
// //     for(var x = 0; x < numbers[i].length; x++){
// //         console.log(numbers[i][x]);
// //     }
// // }
// // 
// for(var x = 0; x < numbers.length; x++){
//     for(var i = 0; i < numbers[x].length; i++){
//         //console.log(numbers[x][i]);
//         if(numbers[x][i] % 2 === 0){
//             numbers[x][i] = "even";
//         }
//         else{
//             numbers[x][i] = "odd";
//        }
//     }
// }
// console.log(numbers);

import brain from 'brain';

const trainingData = [
  'Jane saw Doug.',
  'Doug saw Jane.',
  'Spot saw Doug and Jane looking at each other.',
  'It was love at first sight, and Spot had a frontrow seat. It was a very special moment for all.'
];

const lstm = new brain.recurrent.LSTM();
const result = lstm.train(trainingData, { iterations: 1500 });
const run1 = lstm.run('Jane');
const run2 = lstm.run('Doug');
const run3 = lstm.run('Spot');
const run4 = lstm.run('It');

console.log('run 1: Jane' + run1);
console.log('run 2: Doug' + run2);
console.log('run 3: Spot' + run3);
console.log('run 4: It' + run4);
