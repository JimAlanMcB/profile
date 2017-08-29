var huPlayer = "";
var aiPlayer = "";
var turn = "";

if (huPlayer == "" || aiPlayer == "") {
  setMsg("Choose X or O");
}
var fc = 0;
var realBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var bestSpot = minimax(realBoard, aiPlayer);

var choosex = document.getElementById("chooseX");
choosex.addEventListener("click", chooseX());

var chooseo = document.getElementById("chooseO");
chooseo.addEventListener("click", chooseO());

function chooseO() {
  huPlayer = "O";
  aiPlayer = "X";
  startGame();
}
function chooseX() {
  huPlayer = "X";
  aiPlayer = "O";
  startGame();
}

var startButton = document.getElementById("startBtn");
startButton.addEventListener("click", startGame());

function checkBoard(number) {
  realBoard = [];

  for (var i = 0; i < 9; i++) {
    spot = document.getElementById("s" + i).innerText;
    realBoard.push(spot);
  }

  for (var i = 0; i < 9; i++) {
    if (realBoard[i] == "") {
      realBoard[i] = i;
    }
  }

  realBoard = realBoard.reduce((a, b) => a.concat(b), []);
}
console.log(realBoard);

function startGame() {
  
  checkWinner();
  for (var i = 0; i < 9; i++) {
    clearGameBoard(i);
  }
  turn = aiPlayer;
  if (Math.random() < 0.5) {
    turn = huPlayer;
  }
if (turn != "X" || turn != "O") {
    setMsg("Choose X or O");
    return;
  }
  else{
  setMsg("It's " + turn + "'s turn");
  }
  if (turn == aiPlayer) {
    aiTurn();
  }
  checkBoard();
}

function nextMove(square, number) {
  if (huPlayer == "" || aiPlayer == "") {
    setMsg("Choose X or O");
    return;
  }
  square = document.getElementById("s" + number);
  if (checkWinner()) {
    setMsg(turn + " already won!");
    return;
  } else if (square.innerText != "") {
    setMsg("Can't Move there " + turn);
    return;
  } else if (square.innerText == "") {
    square.innerText = huPlayer;
  }

  switchTurn();
  aiTurn();
}

// ------------------------ AI

function aiTurn() {
  if (checkWinner()) {
    setMsg(turn + " is the winner!!");
    return;
  } else {
    console.log("ITS " + turn + "'S TURN");
    checkBoard();

    if (emptyIndexies(realBoard)[1] == undefined) {
      console.log("TIE");
      setMsg("Draw");
      result = true;
      return;
    }
    bestSpot = minimax(realBoard, aiPlayer);
    console.log(bestSpot);
    console.log(fc);

    document.getElementById("s" + bestSpot.index).innerText = aiPlayer; // just place x or o in the best spot. -- MINIMAX

    console.log(turn + "'S TURN");
    checkBoard();
    switchTurn();
    console.log(turn + "'S TURN");
    checkWinner();

    if (checkWinner()) {
      setMsg("GAME OVER " + turn + " WINS!!");
    }
  }
  // switchTurn();
}

function switchTurn() {
  if (checkWinner()) {
    setMsg(turn + " is the winner winner!!");
    winner = turn;
    return;
  } else if (turn == huPlayer) {
    turn = aiPlayer;
    setMsg("It's " + turn + "'s turn");
  } else {
    turn = huPlayer;
    setMsg("It's " + turn + "'s turn");
  }
}

function checkRow(a, b, c) {
  var result = false;

  if (
    (getSquare(a) == "X" && getSquare(b) == "X" && getSquare(c) == "X") ||
    (getSquare(a) == "O" && getSquare(b) == "O" && getSquare(c) == "O")
  ) {
    result = true;
  }
  return result;
}

function getSquare(number) {
  return document.getElementById("s" + number).innerText;
}

function checkWinner() {
  var result = false;
  if (
    checkRow(0, 1, 2) ||
    checkRow(3, 4, 5) ||
    checkRow(6, 7, 8) ||
    checkRow(0, 3, 6) ||
    checkRow(1, 4, 7) ||
    checkRow(2, 5, 8) ||
    checkRow(0, 4, 8) ||
    checkRow(2, 4, 6)
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

function minimax(newBoard, player) {
  
  fc++;

  var availSpots = emptyIndexies(newBoard);

    if (winning(newBoard, huPlayer)) {
    return { score: -10 };
  } else if (winning(newBoard, aiPlayer)) {
    return { score: 10 };
  } else if (availSpots.length === 0) {
    return { score: 0 };
  }

   var moves = [];

  
  for (var i = 0; i < availSpots.length; i++) {
   
    var move = {};
    move.index = newBoard[availSpots[i]];

    
    newBoard[availSpots[i]] = player;

    
    if (player == aiPlayer) {
      var result = minimax(newBoard, huPlayer);
      move.score = result.score;
    } else {
      var result = minimax(newBoard, aiPlayer);
      move.score = result.score;
    }
   
    newBoard[availSpots[i]] = move.index;
  
    moves.push(move);
  }
 
  var bestMove;
  if (player === aiPlayer) {
    var bestScore = -10000;
    for (var i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    
    var bestScore = 10000;
    for (var i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  
  return moves[bestMove];
}


function emptyIndexies(board) {
  return board.filter(s => s != "O" && s != "X");
}

function winning(board, player) {
  if (
    (board[0] == player && board[1] == player && board[2] == player) ||
    (board[3] == player && board[4] == player && board[5] == player) ||
    (board[6] == player && board[7] == player && board[8] == player) ||
    (board[0] == player && board[3] == player && board[6] == player) ||
    (board[1] == player && board[4] == player && board[7] == player) ||
    (board[2] == player && board[5] == player && board[8] == player) ||
    (board[0] == player && board[4] == player && board[8] == player) ||
    (board[2] == player && board[4] == player && board[6] == player)
  ) {
    return true;
  } else {
    return false;
  }
}
