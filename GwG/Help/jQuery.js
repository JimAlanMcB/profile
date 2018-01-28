/*
For this quiz, use articleList and DOM navigation methods to collect articleList's
sibling <h1> (var h1), children (var kids), and parent <div>s (var parents).

You must use articleList to navigate to the element(s)!
*/

// Start with these variable!
var articleList, h1, kids, parents;

articleList = $('.article-list');

h1 = articleList.siblings();// Your code goes here!

kids = articleList.children();// Your code goes here!

parents = articleList.parents();// Your code goes here!

console.log(h1);
console.log(kids);
console.log(parents);



/*
For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

The starter code below creates an event listener that will run any time the input changes.
For more on events, check the instructor notes.
*/


$('#input').on('change', function() {
    
    var val = $('#input').next();
    console.log(val);
    val.text($('#input').val());
});

$('#input').on('change', function() {

    var val = $('#input').val();

    var h1 = $('.articles').children('h1');

    h1.text(val);
});

/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems;

articleItems = $('.bold').parent('ul');

articleItems.remove();

console.log(articleItems);// your code goes here!


/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

// Your code goes here!

$("<div id='family2'><h1>Family 2</h1></div>").insertAfter('#family1');
$('#family2').append("<div id='bruce'><h2>Bruce</h2></div>");
$('#bruce').append("<div id='madison'><h3>Madison</h3></div>");
$('#bruce').append("<div id='hunter'><h3>Hunter</h3></div>");


$('.example').each(function(){
$(this).text("here");
});



/*
For this quiz, use jQuery's each() method to iterate through the <p>s,
calculate the length of each one, and add each length to the end of each <p>.

Also, make sure you don't change the text inside each <p> except to add the length, otherwise your
length numbers won't be correct!
*/

// Your code goes here!
$('p').each(function(){
    var length = $(this).text().length;
    this.append(length);
   });



$('.class').on('click', function(){
//basic even listener

});


/*
For this quiz, use jQuery to set up an event listener. Your event listener must:
    1. listen to the #my-button element
    2. listen for a `click` event
    3. perform the following actions when the button is clicked:
        a. remove the #my-button element from the DOM
        b. add the `success` class to the body
*/


$('#my-button').on('click', function(){
    $('#my-button').remove();
    $('body').addClass('success');
     
 });

 $('#my-button').click(function(){


 });