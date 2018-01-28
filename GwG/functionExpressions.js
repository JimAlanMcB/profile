// /*
//  * Programming Quiz: Laugh (5-4)
//  */

// var laugh = function(num){
//     result="";
//     for(i=1;i<num;i++){
//     console.log(i);
//     result += "ha"
//     }
//     return result;
//     }
//     //finish the function expression */
    
//     console.log(laugh(10));
    



    /*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression

emotions("happy", function myFunc(num)
{
msgStr="";
    for(i=1;i<=num;i++){
    //console.log(i);
    msgStr += "ha"
    }
return msgStr + "!";
});



//finish the function expression */


