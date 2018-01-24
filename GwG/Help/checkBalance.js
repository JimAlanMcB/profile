var balance = 4.00;
var checkBalance = true;
var isActive = true;


var byeBye = "Thank you. Have a nice day!";
var noActive = "Your account is no longer active.";
var balanceIs = "Your balance is $" + balance.toFixed(2) + ".";
var noMoney = "Your account is empty.";
var actNegative = "Your balance is negative. Please contact bank.";


var useAtm = !checkBalance ? console.log(byeBye) 
: checkBalance && !isActive ? console.log(noActive) 
: isActive && balance > 0 ? console.log(balanceIs)
: isActive && balance == 0 ? console.log(noMoney)
: isActive && balance < 0 ? console.log(actNegative)
: console.log(byeBye);




if (checkBalance == false){
    console.log("Thank you. Have a nice day!");
}
else if (checkBalance == true && isActive == false){
    console.log("Your account is no longer active.");
}

else if (isActive && balance > 0){
    console.log("Your balance is $" + balance.toFixed(2) + ".");
}
else if(isActive && balance == 0){
    console.log("Your account is empty.");
}
else if(isActive && balance < 0){
    console.log("Your balance is negative. Please contact bank.");
}