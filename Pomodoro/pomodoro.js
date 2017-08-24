// because I didn't assign the interval ID, and will do refactoring later.
function clear() {
  for (var i = 1; i < 999999; i++) clearInterval(i);
}

var running = false;
var timerTitle = document.getElementById("timerTitle").textContent;

var showTimeView = document.getElementById("showTimeView");
var int = parseInt(document.getElementById("showTimeView").textContent);
var totalTimeView = document.getElementById("totalTimeView");

//-- total time view area--------------------------------------------------------------------

var showTimeViewBtnMinus = document.getElementById("showTimeViewBtnMinus");
showTimeViewBtnMinus.addEventListener("click", function(event) {
  if (int <= 1) {
    return;
  } else {
    running = false;
    clear();
    int--;
    totalTimeView.textContent = int;
    showTimeView.textContent = int;
  }
});

var showTimeViewBtnPlus = document.getElementById("showTimeViewBtnPlus");
showTimeViewBtnPlus.addEventListener("click", function(event) {
  if (int <= 1) {
    return;
  } else {
    running = false;
    clear();
    int++;
    totalTimeView.textContent = int;
    showTimeView.textContent = int;
  }
});

totalTimeView.addEventListener("click", function(event) {

  if (!running) {
    startTimer(int, totalTimeView); //showTimeView
    running = true;
  }

});

//-- breakTime Area----------------------------------------------------------------------------

var breakTimeView = document.getElementById("breakTimeView");
var bint = parseInt(document.getElementById("breakTimeView").textContent);

var breakTimeViewBtnMinus = document.getElementById("breakTimeViewBtnMinus");
breakTimeViewBtnMinus.addEventListener("click", function(event) {
  // running = false;
  // clear();
  if (bint <= 1) {
    return;
  } else {
    bint--;
    // totalTimeView.textContent = int;
    breakTimeView.textContent = bint;
  }
});

var breakTimeViewBtnPlus = document.getElementById("breakTimeViewBtnPlus");
breakTimeViewBtnPlus.addEventListener("click", function(event) {
  //running = false;
  //clear();
  if (bint <= 1) {
    return;
  } else {
    bint++;
    // totalTimeView.textContent = int;
    breakTimeView.textContent = bint;
  }
});

//--pause and resume buttons -----------------------------------------------------------------------
var pauseBtn = document.getElementById("pauseBtn");
pauseBtn.addEventListener("click", function(event) {
  running = false;
  var per = 100;
});

var resumeBtn = document.getElementById("resumeBtn");
resumeBtn.addEventListener("click", function(event) {
  running = true;
});

//-- timer section ----------------------------------------------------------------------------------
function startTimer(duration, display) {
  fillerup(int);
  document.getElementById("timerTitle").textContent = "Session Started";
  var timer = duration * 60,
    minutes,
    seconds;

  setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    totalTimeView.textContent = minutes + ":" + seconds; //showTimeView
    //debugger;

    if (running == false) {
      return;
    } else {
      if (--timer < 0) {
        timer = duration;
      }

      if (timer === 0) {
        var audio = new Audio('bell.mp3');
        audio.play();
        clear();
        startBreak(bint, display);
      }
    }
  }, 1000);
}

function startBreak(duration, display) {
  breakerup(int);
  document.getElementById("timerTitle").textContent = "Break Time!";
  var timer = duration * 60,
    minutes,
    seconds;

  setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    totalTimeView.textContent = minutes + ":" + seconds; //showTimeView
    //debugger;

    if (running == false) {
      return;
    } else {
      if (--timer < 0) {
        timer = duration;
      }

      if (timer === 0) {
        clear();
        startTimer(int, display);
      }
    }
  }, 1000);
}

function fillerup(int) {
  var per = 1;
  setInterval(function() {
    if (!running) {
      return;
    } else {
      per++;
      if (per <= 100) {
        $("#fillme").css({
          background:
            "linear-gradient(to top, #DF3232 " +
            per +
            "%,transparent " +
            per +
            "%,transparent 100%)"
        });
      }
    }
  }, int * 600);
}
function breakerup(int) {
  var per = 1;
  setInterval(function() {
    if (!running) {
      return;
    } else {
      per++;
      if (per <= 100) {
        $("#fillme").css({
          background:
            "linear-gradient(to bottom, #519669 " +
            per +
            "%,transparent " +
            per +
            "%,transparent 100%)"
        });
      }
    }
  }, int * 600);
}
