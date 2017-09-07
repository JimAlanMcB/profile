// $(document).ready(function() {
// 	// navigation click actions	
// 	$('.scroll-link').on('click', function(event){
// 		event.preventDefault();
// 		var sectionID = $(this).attr("data-id");
// 		scrollToID('#' + sectionID, 750);
// 	});
// 	// scroll to top action
// 	$('.scroll-top').on('click', function(event) {
// 		event.preventDefault();
// 		$('html, body').animate({scrollTop:0}, 'slow'); 		
// 	});
// 	// mobile nav toggle
// 	$('#nav-toggle').on('click', function (event) {
// 		event.preventDefault();
// 		$('#main-nav').toggleClass("open");
// 	});
// });
// // scroll function
// function scrollToID(id, speed){
// 	var offSet = 50;
// 	var targetOffset = $(id).offset().top - offSet;
// 	var mainNav = $('#main-nav');
// 	$('html,body').animate({scrollTop:targetOffset}, speed);
// 	if (mainNav.hasClass("open")) {
// 		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
// 		mainNav.removeClass("open");
// 	}
// }
// if (typeof console === "undefined") {
//     console = {
//         log: function() { }
//     };
// }

//Top right Nav Menu

$('#homeBtn').click(function(element){
$('#about, #portfolio, #contact, #resume').fadeOut('slow').promise().done(function(){
	$('#home').fadeIn('slow');
});
});

$('#aboutBtn').click(function(element){
$('#about, #portfolio, #contact, #resume, #home').fadeOut('slow').promise().done(function(){
	$('#about').fadeIn('slow');
});
});
$('#portBtn').click(function(element){
$('#about, #portfolio, #contact, #resume, #home').fadeOut('slow').promise().done(function(){
	$('#portfolio').fadeIn('slow');
});
});
$('#resumeBtn').click(function(element){
$('#about, #portfolio, #contact, #resume, #home').fadeOut('slow').promise().done(function(){
	$('#resume').fadeIn('slow');
});
});
$('#contactBtn').click(function(element){
$('#about, #portfolio, #contact, #resume, #home').fadeOut('slow').promise().done(function(){
	$('#contact').fadeIn('slow');
});
});

//-- Secondary Nav

$('#aboutBtn2').click(function(element){
$('#about, #portfolio, #contact, #resume, #home').fadeOut('slow').promise().done(function(){
	$('#about').fadeIn('slow');
});
});
$('#portBtn2').click(function(element){
$('#about, #portfolio, #contact, #resume, #home').fadeOut('slow').promise().done(function(){
	$('#portfolio').fadeIn('slow');
});
});
$('#contactBtn2').click(function(element){
$('#about, #portfolio, #contact, #resume, #home').fadeOut('slow').promise().done(function(){
	$('#contact').fadeIn('slow');
});
});

$('#resumeBtn2').click(function(element){
$('#about, #portfolio, #contact, #resume, #home').fadeOut('slow').promise().done(function(){
	$('#resume').fadeIn('slow');
});
});
