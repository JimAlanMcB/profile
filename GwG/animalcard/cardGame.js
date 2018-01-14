var audioC = new Audio("sounds/cheetah.mp3");
var audioE = new Audio("sounds/elephant.mp3");
var audioG = new Audio("sounds/gazelle.mp3");
var audioZ = new Audio("sounds/zebra.mp3");
var audioGi = new Audio("sounds/giraffe.mp3");
var audioR = new Audio("sounds/rhino.mp3");
var audioH = new Audio("sounds/hippo.mp3");
var audioHy = new Audio("sounds/hyena.mp3");



Audio.prototype.stop = function () {
    this.pause();
    this.currentTime = 0.0;
}

function stopAudio() {

    audioC.stop();
    audioE.stop();
    audioG.stop();
    audioZ.stop();
    audioGi.stop();
    audioR.stop();
    audioH.stop();
    audioHy.stop();

}

var cheetahCard = document.getElementById("cheetah");
var elephantCard = document.getElementById("elephant");
var gazelleCard = document.getElementById("gazelle");
var zebraCard = document.getElementById("zebra");
var giraffeCard = document.getElementById("giraffe");
var rhinoCard = document.getElementById("rhino");
var hippoCard = document.getElementById("hippo");
var hyenaCard = document.getElementById("hyena");

// currently adding each audio a stop function. May be able to use a for loop...make a function for it.  

cheetahCard.addEventListener("click", function () {
    stopAudio();
    audioC.play();
});
elephantCard.addEventListener("click", function () {
    stopAudio();
    audioE.play();
});
gazelleCard.addEventListener("click", function () {
    stopAudio();
    audioG.play();
});
zebraCard.addEventListener("click", function () {
    stopAudio();
    audioZ.play();
});
giraffeCard.addEventListener("click", function () {
    stopAudio();
    audioGi.play();
});
rhinoCard.addEventListener("click", function () {
    stopAudio();
    audioR.play();
});
hippoCard.addEventListener("click", function () {
    stopAudio();
    audioH.play();
});
hyenaCard.addEventListener("click", function () {
    stopAudio();
    audioHy.play();
});