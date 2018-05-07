//check your balance 

let balance = 200;
let checkBalance = false;
let isActive = true;

// {
// let apple = "apple";
// //console.log(apple);
// }
// {
// var apple = "apple"
// }

// console.log(apple);


if (!checkBalance){
    console.log("Thank you. Have a nice day!");
} else if (checkBalance && !isActive) {
    console.log("Your account is no longer active.");
} else if (isActive && balance > 0){
    console.log("Your balance is $" + balance.toFixed(2) + ".");
} else if (isActive && balance === 0){
    console.log("Your account is empty.");
} else if (isActive && balance < 0){
    console.log("Your balance is negative. Please contact bank");
}



// let goodBye = "Thank you. Have a nice day!";
// let notActive = "Your account is no longer active.";
// let currBalance = "Your balance is $" + balance.toFixed(2) + ".";
// let accEmpty = "Your account is empty.";
// let negAccount = "Your balance is negative. Please contact bank.";

// let useAtm = !checkBalance ? console.log(goodBye)
// : checkBalance && !isActive ? console.log(notActive)
// : isActive && balance > 0 ? console.log(currBalance)
// : isActive && balance == 0 ? console.log(accEmpty)
// : isActive && balance < 0 ? console.log(negAccount)
// : console.log(goodBye);
