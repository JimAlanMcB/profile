// /*
//  * Programming Quiz: Umbrella (7-1)
//  */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    // your code goes here
    close: function() {
        if (umbrella.isOpen === false){
            msg = "the umbrella is already closed";
            return console.log(msg); 
        } else {
            umbrella.isClosed = true;
            umbrella.isOpen = false;
            msg = "Julia closed the umbrella!";
            return console.log(msg); 
        }
    },
    type: ["rainy", "stylish", "bucket", ["lvlup", "lvldown"]],
    style: {
        color: "blue",
        material: "rubber"
    },
};

umbrella.open();
console.log(umbrella.isOpen);
umbrella.close();
console.log(umbrella.isClosed);
umbrella.close();
console.log(umbrella.type[3][0]);

console.log(typeof(umbrella.type[3][0]));
console.log(umbrella.type[3][0].replace("lvlup", umbrella.type[0]));

console.log(umbrella.style.material);




// /*
//  * Programming Quiz: Menu Items (7-2)
// //  */

// // // your code goes here

// // var breakfast = {
// //     name: "The Lumberjack",
// //     price: "$9.95",
// //     ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"],
// // };

// // console.log(breakfast);
// // console.log(breakfast.name);
// // console.log(breakfast.price);
// // console.log(breakfast.ingredients);



// /*
//  * Programming Quiz: Bank Accounts 1 (7-3)
//  */

// var savingsAccount = {
//     balance: 1000,
//     interestRatePercent: 1,
//     deposit: function addMoney(amount) {
//         if (amount > 0) {
//             savingsAccount.balance += amount;
//         }
//     },
//     withdraw: function removeMoney(amount) {
//         var verifyBalance = savingsAccount.balance - amount;
//         if (amount > 0 && verifyBalance >= 0) {
//             savingsAccount.balance -= amount;
//         }
//     },
//     printAccountSummary: function(){
//         msg = "Welcome!\n" + "Your balance is currently " + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%.";
//         return msg;

//     },

//     // your code goes here
// };

// console.log(savingsAccount.printAccountSummary());



/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here

// var facebookProfile = {
//     name: "Jim",
//     friends: 300, 
//     messages: ["Hello, world", "Hey guys Im traveling again", "Im back in Phoenix"],

//     postMessage: function postMessage(message) {
//       facebookProfile.messages.push(message); 
//       console.log(facebookProfile.messages); 
//     },
//     deleteMessage: function deleteMessage(index){
//         msg = "Deleted message " + facebookProfile.messages[index];
//         facebookProfile.messages.splice(index, 1); 
//         console.log(msg);

//     },
//     addFriend: function addFriend(){
//         facebookProfile.friends++;
//         console.log(facebookProfile.friends);
//     },
//     removeFriend: function removeFriend(){
//         facebookProfile.friends--;
//         console.log(facebookProfile.friends);
//     },
//   };


//   //facebookProfile.postMessage("Hello again");
//   //facebookProfile.deleteMessage(2);
// //facebookProfile.addFriend();
// //facebookProfile.removeFriend();

/*
 * Programming Quiz: Donuts Revisited (7-6)
//  */

// var donuts = [
//     { type: "Jelly", cost: 1.22 },
//     { type: "Chocolate", cost: 2.45 },
//     { type: "Cider", cost: 1.59 },
//     { type: "Boston Cream", cost: 5.99 }
// ];

// donuts.forEach(function(element) {
//     console.log(element);
//     console.log(element.type + " donuts cost $" + element.cost + " each");
// }, this);
// // your code goes here

// let startGame = () => {
//     console.log('game started');
// };
// const haveFun = () => {
//     console.log('having fun');
// };
// let doMath = (num) => {
//     return num * 2;
// };

// let init = () => {

//     let game = {
//         person: "Hello ",
//         test: function () {
//             let hello = 'world';
//             return console.log(this.person + hello);
           
//         },
//         preload: { 
//          person: person,
//         },
//         create:  () => { 
            
//         },
//         render: () => {
//            // console.log(this);
//         }

//     }
//     //console.log(game.test("jim"));
//     game.create();
//     game.render();
//     game.test();
//     console.log(game.preload.person);

// };



// init();