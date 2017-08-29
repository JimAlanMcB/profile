var turn = "";


var startButton = document.getElementById("startBtn");
startButton.addEventListener("click", startGame());

function startGame() {
  
  
  turn = "X";
  for (var i = 1; i < 10; i++) {
    clearGameBoard(i);
  }
  if (Math.random() < 0.5) {
    turn = "O";
  }
winner = null;
setMsg("It's " + turn + "'s turn");
}

function nextMove(square) {
  if (winner != null) {
    setMsg(winner + " already won!");
  } else if (square.innerText == "") {
    square.innerText = turn;
    switchTurn();
    //setMsg("It's " + turn + "'s turn");
  } else {
    setMsg("Can't Move there " + turn);
  }
}

function switchTurn() {
    
  if (checkWinner(turn)) {
    setMsg(turn + " is the winner!!");    
    winner = turn;
        
  } else if (turn == "X") {
    turn = "O";
    setMsg("It's " + turn + "'s turn");
  } else {
    turn = "X";
    setMsg("It's " + turn + "'s turn");
    }
}

function checkRow(a, b, c, move) {
  var result = false;
  if (getSquare(a) == move && getSquare(b) == move && getSquare(c) == move) {
    result = true;
  }
  return result;
}

function getSquare(number) {
  return document.getElementById("s" + number).innerText;
}

function checkWinner(move) {
  var result = false;
  if (
    checkRow(1, 2, 3, move) ||
    checkRow(4, 5, 6, move) ||
    checkRow(7, 8, 9, move) ||
    checkRow(1, 4, 7, move) ||
    checkRow(2, 5, 8, move) ||
    checkRow(3, 6, 9, move) ||
    checkRow(1, 5, 9, move) ||
    checkRow(3, 5, 7, move)
  ) {
    result = true;
    
  }
  return result;
}

function setMsg(msg) {
  document.getElementById("msgArea").innerHTML = msg;
}

function clearGameBoard(number) {
  document.getElementById("s" + number).innerHTML = "";
}
