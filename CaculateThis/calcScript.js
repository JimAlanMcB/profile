// todo :
// delete eval function and replace
// some refactoring needs to be completed. 
// users can input special characters and should not be able to. 
// color scheme needs adjustment




var btn = document.querySelector("div");

btn.addEventListener("click", function(event) {
  var elementClicked = event.target;
  // console.log("clicked");
  if (
    elementClicked.className === "col-xs-3 cButton" ||
    elementClicked.className === "col-xs-6 cButton"
  ) {
   }
});

var clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", function(event) {
  document.getElementById("viewArea").innerHTML = "";
});

var oneBtn = document.getElementById("oneBtn");
oneBtn.addEventListener("click", function(event) {
  document.getElementById("viewArea").innerHTML += 1;
});

var twoBtn = document.getElementById("twoBtn");
twoBtn.addEventListener("click", function(event) {
  document.getElementById("viewArea").innerHTML += 2;
});
var threeBtn = document.getElementById("threeBtn");
threeBtn.addEventListener("click", function(event) {
  document.getElementById("viewArea").innerHTML += 3;
});
var fourBtn = document.getElementById("fourBtn");
fourBtn.addEventListener("click", function(event) {
  document.getElementById("viewArea").innerHTML += 4;
});
var fiveBtn = document.getElementById("fiveBtn");
fiveBtn.addEventListener("click", function(event) {
  document.getElementById("viewArea").innerHTML += 5;
});
var sixBtn = document.getElementById("sixBtn");
sixBtn.addEventListener("click", function(event) {
  document.getElementById("viewArea").innerHTML += 6;
});
var sevenBtn = document.getElementById("sevenBtn");
sevenBtn.addEventListener("click", function(event) {
  document.getElementById("viewArea").innerHTML += 7;
});
var eightBtn = document.getElementById("eightBtn");
eightBtn.addEventListener("click", function(event) {
  document.getElementById("viewArea").innerHTML += 8;
});
var nineBtn = document.getElementById("nineBtn");
nineBtn.addEventListener("click", function(event) {
  document.getElementById("viewArea").innerHTML += 9;
});
var zeroBtn = document.getElementById("zeroBtn");
zeroBtn.addEventListener("click", function(event) {
  document.getElementById("viewArea").innerHTML += 0;
});
var decimalBtn = document.getElementById("decimalBtn");
decimalBtn.addEventListener("click", function(event) {
  document.getElementById("viewArea").innerHTML += ".";
});

var equalBtn = document.getElementById("equalBtn");
equalBtn.addEventListener("click", function(event) {
  if (viewArea.innerHTML === "") {
    document.getElementById("viewArea").innerHTML = 0;
  } else {
    document.getElementById("viewArea").innerHTML = eval(viewArea.innerHTML);
  }
});

var plusBtn = document.getElementById("plusBtn");
plusBtn.addEventListener("click", function(event) {
  document.getElementById("viewArea").innerHTML += " + ";
});

var minusBtn = document.getElementById("minusBtn");
minusBtn.addEventListener("click", function(event) {
  document.getElementById("viewArea").innerHTML += " - ";
});

var divideBtn = document.getElementById("divideBtn");
divideBtn.addEventListener("click", function(event) {
  document.getElementById("viewArea").innerHTML += " / ";
});

var multiplyBtn = document.getElementById("multiplyBtn");
multiplyBtn.addEventListener("click", function(event) {
  document.getElementById("viewArea").innerHTML += " * ";
});
// var percentBtn = document.getElementById("percentBtn");
// percentBtn.addEventListener("click", function(event) {

//     document.getElementById("viewArea").innerHTML += " % ";

//   });
