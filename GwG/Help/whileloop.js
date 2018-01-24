/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 0;
while (x <= 19) {
    x = x + 1;

    var Julia = x % 3 == 0 && x % 5 == 0 ? console.log("JuliaJames")
    : x % 5 == 0 ? console.log("James") 
    : x % 3 == 0 ? console.log("Julia") 
    : console.log(x);
}


  
    // var James = x % 5 == 0 ? console.log("James") : console.log(x);
    // var JuliaJames = x % 3 == 0 && x % 5 == 0 ? console.log("JuliaJames") : console.log(x);
 
    // console.log(Julia);
    // console.log(JuliaJames);
    // console.log(James);
    
    // var isDivisible = x % 3 == 0 ? x = "Julia" : x; 
    
        //console.log(x);

    // check divisibility
    // print Julia, James, or JuliaJames


    // increment x