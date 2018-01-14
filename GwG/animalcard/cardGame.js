var audioC = new Audio("sounds/cheetah.mp3");
var audioE = new Audio("sounds/elephant.mp3");
var audioG = new Audio("sounds/gazelle.mp3");
var audioZ = new Audio("sounds/zebra.mp3");
var audioGi = new Audio("sounds/giraffe.mp3");
var audioR = new Audio("sounds/rhino.mp3");
var audioH = new Audio("sounds/hippo.mp3");
var audioHy = new Audio("sounds/hyena.mp3");

var cheetahCard = document.getElementById("cheetah");
var elephantCard = document.getElementById("elephant");
var gazelleCard = document.getElementById("gazelle");
var zebraCard = document.getElementById("zebra");
var giraffeCard = document.getElementById("giraffe");
var rhinoCard = document.getElementById("rhino");
var hippoCard = document.getElementById("hippo");
var hyenaCard = document.getElementById("hyena");


cheetahCard.addEventListener("click", function () {
    audioC.play();
});
elephantCard.addEventListener("click", function () {
    audioE.play();
});
gazelleCard.addEventListener("click", function () {
    audioG.play();
});
zebraCard.addEventListener("click", function () {
    audioZ.play();
});
giraffeCard.addEventListener("click", function () {
    audioGi.play();
});
rhinoCard.addEventListener("click", function () {
    audioR.play();
});
hippoCard.addEventListener("click", function () {
    audioH.play();
});
hyenaCard.addEventListener("click", function () {
    audioHy.play();
});