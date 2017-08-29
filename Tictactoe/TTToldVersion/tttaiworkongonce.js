var huPlayer = "X";
var aiPlayer = "O";
//var turn = "X";
//board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
realBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

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
      // debugger;
      //  console.log(realBoard);
      realBoard[i] = i;
      console.log(realBoard[i]);
    }
  }

  realBoard = realBoard.reduce((a, b) => a.concat(b), []);
}
console.log(realBoard);

function startGame() {
  turn = aiPlayer;

  for (var i = 0; i < 9; i++) {
    clearGameBoard(i);
  }

  if (Math.random() < 0.5) {
    turn = huPlayer;
  }
  winner = null;
  setMsg("It's " + turn + "'s turn");
  if(turn == aiPlayer){
      aiTurn();
  }
}

function nextMove(square) {
  if (winner != null) {
    setMsg(winner + " already won!");
  } else if (square.innerText == "" || turn == huPlayer) {
    square.innerText = huPlayer;

    //switchTurn(); // -- NO AI

    aiTurn(); // -- AI ADDED
  } else {
    setMsg("Can't Move there " + turn);
  }
}

// ------------------------ AI
// currently the AI just chooses a random number and places aN x or o there
function aiTurn() {
 // debugger;
  if (checkWinner(turn)) {
    console.log("tested");
    setMsg(turn + " is the winner!!");
    winner = turn;
    return;
 }
  switchTurn();

  document.getElementById("s" + bestSpot.index).innerText = aiPlayer; // just place x or o in the best spot. -- MINIMAX
  // aiGuess(); // - only turn on if random AI is on
  //switchTurn(); // -- Must be on if MINIMAX is implimented
}

// function aiGuess() {
//   var test = getRandom(1, 10);
//   if (getSquare(test) != "") {
//     return;
//   } else if (getSquare(test) == "") {
//     document.getElementById("s" + test).innerText = turn;
//     console.log(test);
//   } else {
//     aiGuess();
//   }
// }

// function getRandom(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// // --------------------------- AI

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
console.log(turn);
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
    checkRow(0, 1, 2, move) ||
    checkRow(3, 4, 5, move) ||
    checkRow(6, 7, 8, move) ||
    checkRow(0, 3, 6, move) ||
    checkRow(1, 4, 7, move) ||
    checkRow(2, 5, 8, move) ||
    checkRow(0, 4, 8, move) ||
    checkRow(2, 4, 6, move)
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

// ---------- minimax


// this is the board flattened and filled with some values to easier asses the Artificial Inteligence.
//var origBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//var origBoard = [0,1 ,2,3,4 ,5, 6 ,7,8];

//keeps count of function calls
var fc = 0;

// finding the ultimate play on the game that favors the computer
var bestSpot = minimax(realBoard, aiPlayer);

//loging the results
console.log("index: " + bestSpot.index);
console.log("function calls: " + fc);

// the main minimax function
function minimax(newBoard, player) {
  //add one to function calls
  fc++;

  //available spots
  var availSpots = emptyIndexies(newBoard);

  // checks for the terminal states such as win, lose, and tie and returning a value accordingly
  if (winning(newBoard, huPlayer)) {
    return { score: -10 };
  } else if (winning(newBoard, aiPlayer)) {
    return { score: 10 };
  } else if (availSpots.length === 0) {
    return { score: 0 };
  }

  // an array to collect all the objects
  var moves = [];

  // loop through available spots
  for (var i = 0; i < availSpots.length; i++) {
    //create an object for each and store the index of that spot that was stored as a number in the object's index key
    var move = {};
    move.index = newBoard[availSpots[i]];

    // set the empty spot to the current player
    newBoard[availSpots[i]] = player;

    //if collect the score resulted from calling minimax on the opponent of the current player
    if (player == aiPlayer) {
      var result = minimax(newBoard, huPlayer);
      move.score = result.score;
    } else {
      var result = minimax(newBoard, aiPlayer);
      move.score = result.score;
    }

    //reset the spot to empty
    newBoard[availSpots[i]] = move.index;

    // push the object to the array
    moves.push(move);
  }

  // if it is the computer's turn loop over the moves and choose the move with the highest score
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
    // else loop over the moves and choose the move with the lowest score
    var bestScore = 10000;
    for (var i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  // return the chosen move (object) from the array to the higher depth
  return moves[bestMove];
}

// returns the available spots on the board
function emptyIndexies(board) {
  return board.filter(s => s != "O" && s != "X");
}

// winning combinations using the board indexies for instace the first win could be 3 xes in a row
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
