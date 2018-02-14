// caculate total price of phone purchase
// keep purchasing phones until out of money
// buy accessories for each phone as long as your purchase amount is blow mental spend threshhold

// after you'ved caculated your purchase, add tax, prit out the purchase amount

// consts tax rate, phone price, accessory price, spending threshhold
// bank account balance


// BONUS add input



const phonePrice = 499;
const tax = .10;  // 10% tax
const accPrice = 39;

let accTotal = accPrice * tax + accPrice;

let balance = prompt('What is your back account balance?');

let totalTax = phonePrice * tax;
let totalPrice = totalTax + phonePrice;

let accountBalance = document.getElementById('accountBalance');
let messageArea = document.getElementById('messageArea');
let purchasePhoneBtn = document.getElementById('purchasePhoneBtn');
let purchaseAccBtn = document.getElementById('purchaseAccBtn');

accountBalance.innerText = balance;



purchaseAccBtn.addEventListener('click', purchaseAcc => {
    if (balance > accTotal) {
        messageArea.innerText = 'You purchased accessories';
        balance -= accPrice;
        accountBalance.innerText = balance;
        console.log('acc purchased balance is ' + balance + '-' + accPrice);
    } 
    else {
        messageArea.innerText = "You don't have enough money!!"; 
        console.log('out of money');
        return;
    }


});

purchasePhoneBtn.addEventListener('click', purchasePhone => {
    messageArea.innerText = 'You purchased a phone';
    balance -= totalPrice;
    accountBalance.innerText = balance;
    console.log('phone purchased');
});


for (let i = 0; i < totalPrice; i++) {

    // purchasePhone();
    // purchaseAcc();

}


console.log(totalPrice);


