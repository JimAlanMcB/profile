if (!("ontouchstart" in document.documentElement)) {
  document.documentElement.className += "no-touch";
}

var btnG = document.getElementById("btnG");
var btnY = document.getElementById("btnY");
var btnB = document.getElementById("btnB");
var btnR = document.getElementById("btnR");
var btnM = document.getElementById("btnM");
var audioY = new Audio("sounds/simonSound1.mp3");
var audioR = new Audio("sounds/simonSound2.mp3");
var audioB = new Audio("sounds/simonSound3.mp3");
var audioG = new Audio("sounds/simonSound4.mp3");
var count = 0;
var seq = [];
var litSeq = [];
var power = false;
var strictMode = false;

var pwrBtn = document.getElementById("pwrBtn");
pwrBtn.addEventListener("click", function() {
  if (power) {
    power = false;
    seq = [];
    litSeq = [];
    count = 0;
  } else {
    power = true;
  }
  console.log(power);
  return power;
});
var strictModeBtn = document.getElementById("strictMode");
strictModeBtn.addEventListener("click", function() {
  if (strictMode) {
    strictMode = false;
    seq = [];
    litSeq = [];
    count = 0;
  } else {
    strictMode = true;
  }
});

btnR.addEventListener("click", function hR() {
  //red
  if (!power) {
    return;
  } else {
    seq.push("RED");
    audioR.play();
    this.style.backgroundColor = "#FF00D8";
    checkSeq();
    setTimeout(function() {
      this.btnR.style.backgroundColor = "#FF0F63";
    }, 50);
  }
});

btnY.addEventListener("click", function() {
  //yellow
  if (!power) {
    return;
  } else {
    audioY.play();
    seq.push("YELLOW");
    btnY.style.backgroundColor = "#FF9900";
    checkSeq();
    setTimeout(function() {
      this.btnY.style.backgroundColor = "#FF7700";
    }, 50);
  }
});

btnB.addEventListener("click", function hB() {
  //blue
  if (!power) {
    return;
  } else {
    audioB.play();
    seq.push("BLUE");
    this.style.backgroundColor = "#075AFF";
    checkSeq();
    setTimeout(function() {
      this.btnB.style.backgroundColor = "#00D0FF";
    }, 50);
  }
});

btnG.addEventListener("click", function hG() {
  //green
  if (!power) {
    return;
  } else {
    audioG.play();
    seq.push("GREEN");
    this.style.backgroundColor = "#43FF05";
    checkSeq();
    setTimeout(function() {
      this.btnG.style.backgroundColor = "#37CA05";
    }, 50);
  }
});

function startGame() {
  if (!power) {
    return;
  } else {
    restartGame();
  }
}

function newMove() {
  if (!power) {
    return;
  } else {
    nextSequence();
    count++;
    var msg = document.getElementById("msgArea");
    msg.innerHTML = count;

    console.log(count);
  }
}

function nextSequence() {
  if (!power) {
    return;
  } else {
    var nextSequenceArr = ["RED", "GREEN", "BLUE", "YELLOW"][
      Math.floor(Math.random() * 4)
    ];
    litSeq.push(nextSequenceArr);

    console.log(litSeq);
    move();
  }
}

function move() {
  if (!power) {
    return;
  } else {
    var i = 0;
    var moves = setInterval(function() {
      lightUp(i);
      // console.log(litSeq[i])
      i++;
      if (i >= litSeq.length) {
        clearInterval(moves);
      }
    }, 1000);
  }
}
// testing
//    for(var i=0;i<litSeq.length;i++){
//        console.log(litSeq[i] + " Color")
//       color = i;

//    }
//     lightUp(color);

// }
function lightUp(i) {
  if (litSeq[i] === "RED") {
    hR(btnR);
  }
  if (litSeq[i] === "GREEN") {
    hG(btnG);
  }
  if (litSeq[i] === "YELLOW") {
    hY(btnY);
  }
  if (litSeq[i] === "BLUE") {
    hB(btnB);
  }
}

function restartGame() {
  count = 0;
  litSeq = [];
  seq = [];
  newMove();
}

function hY(btnY) {
  //yellow
  // litSeq.push("YELLOW");
  btnY.style.backgroundColor = "#FF9900";
  audioY.play();
  $("#btnY").removeClass("Yhover");
  $("#btnY").addClass("Yhover");
  setTimeout(function() {
    $("#btnY").removeClass("Yhover");
    this.btnY.style.backgroundColor = "#FF7700";
  }, 500);
}
function hG(btnG) {
  //green

  audioG.play();
  btnG.style.backgroundColor = "#43FF05";
  $("#btnG").removeClass("Ghover");
  $("#btnG").addClass("Ghover");
  setTimeout(function() {
    $("#btnG").removeClass("Ghover");
    this.btnG.style.backgroundColor = "#37CA05";
  }, 500);
}
function hR(btnR) {
  //red

  audioR.play();
  btnR.style.backgroundColor = "#FF32B0";
  $("#btnR").removeClass("Rhover");
  $("#btnR").addClass("Rhover");
  setTimeout(function() {
    $("#btnR").removeClass("Rhover");
    this.btnR.style.backgroundColor = "#FF0F63";
  }, 500);
}
function hB(btnB) {
  //blue

  audioB.play();
  btnB.style.backgroundColor = "#00EEFF";
  $("#btnB").removeClass("Bhover");
  $("#btnB").addClass("Bhover");
  setTimeout(function() {
    $("#btnB").removeClass("Bhover");
    this.btnB.style.backgroundColor = "#00D0FF";
  }, 500);
}
function checkSeq() {
  //console.log(litSeq.length);
  // console.log(seq.length);
  if (seq[seq.length - 1] !== litSeq[seq.length - 1]) {
    console.log("WRONG");
    if (strictMode) {
      alert("Start Over!");
      console.log("try again");
      restartGame();
    } else{
    alert("Try Again!");
    seq = [];
    move();
          }
  } else {
    var next = seq.length === litSeq.length;
    console.log(next);
    if (next) {
      if (count === 20) {
        alert("YOU WIN!?!?!");
      } else {
        console.log("moving on");
        setTimeout(function(){
        newMove();
        seq = [];
        },1000);
      }
    }
  }

  // This did not work. I'm thinking because it kept calling
  // the for loop over and over again, and with seq being reset
  //
  // adding in a booleen to test the two lengths..worked easier
  // than i thought.
  // for(var i = litSeq.length;i--;){
  // console.log(litSeq[i] + " game seq");
  // console.log(seq[i] + " player seq");
  // if(litSeq[i] !== seq[i]){
  //     console.log("wtf");
  //     move();
  //     seq = [];
  //     //return;
  // else{
  //     console.log("right");
  //     seq = [];
  //    // newMove();
}

// function checkWin() {
//   for (var i = 0; i < litSeq.length; i++) {
//     if (litSeq[i] === seq[i]) {
//       console.log("YOU WIN");
//     }
//   }
// }

// console.log(ran);
// if(ran < 1){
//     console.log("less than 1");
//     ran++;
// }
//  switch(ran){

//     case 1:
//     hR(btnR);
//     hB(btnB);
//     hY(btnY);
//     hG(btnG);
//     break;

//     case 2:
//     hB(btnB);
//     break;

//     case 3:
//     hY(btnY);
//     break;

//     case 4:
//     hG(btnG);

//  }

//var result = [hR(btnR), hB(btnB), hY(btnY), hG(btnG)];

//  var randomArea = {
//     ranR: function() {
//       hR(btnR);
//     },
//     ranB: function() {
//       hB(btnB);
//     },
//     ranY: function() {
//       hY(btnY);
//     },
//     ranG: function() {
//       hG(btnG);
//     }
//   };
