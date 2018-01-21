var x = 61;

while(x > 0){

    orbTran = "Orbiter transfers from ground to internal power";
    groundSeq = "Ground launch sequencer is go for auto sequence start";
    activatePad = "Activate launch pad sound suppression system";
    activateMain = "Activate main engine hydrogen burnoff system";
    engineStart = "Main engine start";
    solidLiftoff = "Solid rocket booster ignition and liftoff!";
    
    x -= 1;
    
    var liftoff = x == 50 ? console.log(orbTran) 
    : x == 31 ? console.log(groundSeq)
    : x == 16 ? console.log(activatePad)
    : x == 10 ? console.log(activateMain)
    : x == 6 ? console.log(engineStart)
    : x == 0 ? console.log(solidLiftoff)
    : console.log("T-" + x + " seconds");




}