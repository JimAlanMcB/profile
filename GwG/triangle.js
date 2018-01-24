/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(num){
    var x = num;
    var result = "";
    for(i = 1; i <= num; i++){
        
       // result = makeLine(i).repeat(x);
                
        result += makeLine(i);
        //console.log(makeLine(i));
    }
    //console.log(i);
    return result;
    
}
console.log(buildTriangle(10));