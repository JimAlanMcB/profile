var btnG = document.getElementById("btnG");
var btnY = document.getElementById("btnY");
var btnB = document.getElementById("btnB");
var btnR = document.getElementById("btnR");
var btnM = document.getElementById("btnM");
var count = "0";
var seq = [];
var litSeq = [];

btnR.addEventListener("click", function hR() {
  //red
  seq.push("RED");
  this.style.backgroundColor = "rgba(255,0,0,0.5)";
  checkSeq();
  setTimeout(function() {
    this.btnR.style.backgroundColor = "black";
  }, 500);
});
btnY.addEventListener("click", function() {
  //yellow
  seq.push("YELLOW");
  btnY.style.backgroundColor = "rgba(255,255,0,0.5)";
  checkSeq();
  setTimeout(function() {
    this.btnY.style.backgroundColor = "black";
  }, 500);
});
btnB.addEventListener("click", function hB() {
  //blue
  seq.push("BLUE");
  this.style.backgroundColor = "rgba(0,102,255,0.5)";
  checkSeq();
  setTimeout(function() {
    this.btnB.style.backgroundColor = "black";
  }, 500);
});
btnG.addEventListener("click", function hG() {
  //green
  seq.push("GREEN");
  this.style.backgroundColor = "rgba(0,255,0,0.5)";
  checkSeq();
  setTimeout(function() {
    this.btnG.style.backgroundColor = "black";
  }, 500);
});

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

function startGame() {
    restartGame();
    
}

function newMove() {
 var ran = Math.floor(Math.random()*4);
// var level1 = [hY(btnY)];
seq = [];
 nextSequence();
 //checkWin();
// check win needs to check if the arr.length is 20
// before actually winning, otherwise, needs to do another move
// else new move();
// find a way to make each move not a ton of typing
  count++;
  console.log(count);
}

function nextSequence(){

   var nextSequenceArr = ["RED", "GREEN", "BLUE", "YELLOW"][Math.floor(Math.random()*4)]; 
   litSeq.push(nextSequenceArr);
 
   console.log(litSeq);
   move();
  
}
function move(){

 var i = 0;
   var moves = setInterval(function(){
    lightUp(i);
    console.log(litSeq[i])
    i++;
    if(i >= litSeq.length){
        clearInterval(moves);
    }
},1000)


}
//    for(var i=0;i<litSeq.length;i++){
//        console.log(litSeq[i] + " Color")
//       color = i; 
   

//    }
//     lightUp(color);

// }
function lightUp(i){
    if(litSeq[i] === "RED"){
           hR(btnR)
       }
       if(litSeq[i] === "GREEN"){
           hG(btnG);
       } 
        if(litSeq[i] === "YELLOW"){
           hY(btnY);
       }
        if(litSeq[i] === "BLUE"){
           hB(btnB);
       }

}

function restartGame() {
    count = 0;
    litSeq = [];
    seq = [];
    newMove();
}

function strict() {}

function hY(btnY) {
  //yellow
 // litSeq.push("YELLOW");
  btnY.style.backgroundColor = "rgba(255,255,0,0.5)";
  setTimeout(function() {
    this.btnY.style.backgroundColor = "black";
  }, 500);
}
function hG(btnG) {
  //green
  btnG.style.backgroundColor = "rgba(0,255,0,0.5)";
  setTimeout(function() {
    this.btnG.style.backgroundColor = "black";
  }, 500);
}
function hR(btnR) {
  //red
  btnR.style.backgroundColor = "rgba(255,0,0,0.5)";
  setTimeout(function() {
    this.btnR.style.backgroundColor = "black";
  }, 500);
}
function hB(btnB) {
  //blue
  btnB.style.backgroundColor = "rgba(0,102,255,0.5)";
  setTimeout(function() {
    this.btnB.style.backgroundColor = "black";
  }, 500);
}
function checkSeq(){

    var newSeq = seq.join(",");
   // for(var i=0;i<litSeq.length;i++){
        if(litSeq.length === seq.length){
           // if(seq[i].indexOf(litSeq[i]) == -1){
            if(newSeq != litSeq.join(",")){
            console.log("Try Again");
            move();
            seq = [];    
            }
        else{
            
                newMove();
            }
            
            
            
            
        }
          
            
        
   // }

}

function checkWin(){

    for(var i=0;i<litSeq.length;i++){
        if(litSeq[i] === seq[i]){
            console.log("YOU WIN"); 
        }
    }

}


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