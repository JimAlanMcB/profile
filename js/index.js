// JS Jim McBrayer
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


var resPage = document.getElementById("resume");

resPage.innerHTML = `
<h1>Jim McBrayer</h1>
<h2>Web Developer</h2>

<a class="btn btn-social-icon btn-lg btn-twitter" href="https://www.twitter.com/alancode" target="_blank"><span class="fa fa-twitter"></span></a>
<a class="btn btn-social-icon btn-lg btn-linkedin" href="https://www.linkedin.com/in/alan-mcbrayer-1768a557/"
target="_blank"><span class="fa fa-linkedin"></span></a>
<a class="btn btn-social-icon btn-lg btn-github" href="https://jimalanmcb.github.io/profile" target="_blank"><span class="fa fa-github"></span></a>
<a class="btn btn-social-icon btn-lg" href="mailto:alancode@gmail.com">
  <span class="fa fa-envelope-o"></span></a>
<div class="col-xs-12" id="respage">
   
   
	<div class="col-xs-12">
	   
	   
		<br>
	  <a href="Jim-Mcbrayer.pdf">Download Resume</a>
	  <br>
	  <a href="https://jimalanmcb.github.io/profile">Portfolio</a>
	</div>

</div>


<div class="col-xs-4">
  <p>
	<ul class="rUl">
	  <ul>
		<h3>-Experience with</h3>
	  </ul>
	  <li>HTML5 - Advanced</li>
	  <li>CSS - Intermediate</li>
	  <li>JavaScript - Intermediate</li>
	  <li>React/React Native/Redux</li>
	  <li>Git/Github - Intermediate</li>
	  <li>Wordpress - Intermediate</li>
	</ul>
  </p>

</div>

<div class="col-xs-6">
  <p>
	<ul class="rUl">
	  <ul>
		<h3>-Education</h3>
	  </ul>
	  <li>FCC Front-End-Certification</li>
	  <li>Solo Learn JavaScript Tutorial Certification</li>
	  <li>Udemy Full JavaScript & ES6, ES7 & React</li>
	  <h5>-Currently Studying:</h5>
	  <li>Udacity Full Stack NanoDegree</li>
	  <li>Udemy React and Redux</li>
	  <li>Node</li>
	</ul>
  </p>
</div>


<div class="col-xs-12">
  <p>
	<ul class="rUl">
	  <ul>
		<h3>-Work Experience</h3>
	  </ul>
	  <li>Operations Manager Dogtopia 2017 New Store Openings</li>
	  <li>Restaurant General Manager - 2015-2017</li>
	  <li>Regional Training and Development Manager - 2013-2015
		<li>Retail-Co/Store Manager - 2010-2014 </li>
	</ul>
  </p>
</div>
`;

var conPage = document.getElementById("contact");
conPage.innerHTML = `<div id="contactme">
<!-- contact -->
<h1>Contact Me</h1>

<p>Hey there! Here are some various links and or social media accounts if you would like to check them out or get
  in touch!</p>

<ul>
  <li> <a class="btn btn-social-icon btn-lg btn-twitter" href="https://www.twitter.com/alancode" target="_blank">
<span class="fa fa-twitter"></span> </a></li>
  <li><a class="btn btn-social-icon btn-lg btn-facebook" href="https://www.facebook.com" target="_blank">
<span class="fa fa-facebook"></span></a></li>
  <li><a class="btn btn-social-icon btn-lg btn-linkedin" href="https://www.linkedin.com/in/alan-mcbrayer-1768a557/"
	  target="_blank">
<span class="fa fa-linkedin"></span></a></li>
  <li><a class="btn btn-social-icon btn-lg btn-github" href="https://jimalanmcb.github.io/profile" target="_blank">
  <span class="fa fa-github"></span></a></li>
  <li><a class="btn btn-social-icon btn-lg btn-codepen" href="https://codepen.io/alancode" target="_blank">
  <span class="fa fa-codepen"></span></a></li>
  <li><a class="btn btn-social-icon btn-lg" href="mailto:alancode@gmail.com">
	  <span class="fa fa-envelope-o"></span></a></li>
</ul>
<ul>
  <li><a href="https://www.twitter.com/alancode">@alancode</a></li>
  <li><a href="https://www.facebook.com">alanmcbrayer86</a></li>
  <li><a href="https://www.linkedin.com/in/jim-mcbrayer-1768a557/">jimalanmcb</a></li>
  <li><a href="https://jimalanmcb.github.io/profile">jimalanmcb.github.io</a></li>
  <li><a href="https://codepen.io/alancode">alancode</a></li>
  <li><a href="mailto:alancode@gmail.com">alancode@gmail.com</a></li>
</ul>


</div>
`;
var portPage = document.getElementById("portfolio");

portPage.innerHTML=`
<h1>Portfolio</h1>
<p>Current Projects</p>
<p>

  <div class="container">
	<div class="row">

	  <div class="col-lg-3">Random Quote Generator
		<p> <a href="https://codepen.io/alancode/full/MvKJPK/" target="_blank" id="port-link"><img src="rqm.jpg" class="img-thumbnail"  alt="Random Quote Machine" width="304" height="236"></a><img>
		</p>
	  </div>

	<!--  <div class="col-lg-3">Weather App
		<p><a href="https://codepen.io/alancode/full/gxMrrO/" target="_blank" id="port-link"><img src="weather.jpg" class="img-thumbnail" alt="WeatherApp" width="304" height="236"></a></img>
		</p>
	  </div> -->

	  <div class="col-lg-3">Wiki Viewer
		<p><a href="https://codepen.io/alancode/full/ZJOaVg/" target="_blank" id="port-link"><img src="wiki.jpg" class="img-thumbnail" alt="Wiki Viewer" width="304" height="236"></a></img>
		</p>
	  </div>

	  <div class="col-lg-3">Twitch JSON API
		<p><a href="https://codepen.io/alancode/full/zdBRrR/" target="_blank" id="port-link"><img src="twitch.jpg" class="img-thumbnail"  alt="Twitch JSON Api" width="304" height="236"></a></img>
		</p>
	  </div>

	  <div class="col-lg-3">Plain JS Caculator
		<p><a href="https://jimalanmcb.github.io/profile/CaculateThis" target="_blank" id="port-link"><img src="CaculateThis.jpg" class="img-thumbnail"  alt="CaculateThis" width="304" height="236"></a></img>
		</p>
	  </div>

	  <div class="col-lg-3">Pomodoro Clock
		<p><a href="https://jimalanmcb.github.io/profile/Pomodoro" target="_blank" id="port-link"><img src="pomo.jpg" class="img-thumbnail"  alt="Pomodoro Clock" width="304" height="236"></a></img>
		</p>
	  </div>

	  <div class="col-lg-3">TicTacToe
		<p><a href="https://jimalanmcb.github.io/profile/Tictactoe" target="_blank" id="port-link"><img src="tictactoe.png" class="img-thumbnail"  alt="TicTacToe" width="304" height="236"></a></img>
		</p>
	  </div>

	  <div class="col-lg-3">Simon
		<p><a href="https://jimalanmcb.github.io/profile/Simon" target="_blank" id="port-link"><img src="simon.png" class="img-thumbnail"  alt="Simon" width="304" height="236"></a></img>
		</p>
	  </div>




	</div>
	<!--row-->
  </div>
`;

var aboutPage = document.getElementById("about");
aboutPage.innerHTML= `
<div id="aboutme"></div>
<!--/about me -->
<h1>About</h1>
<!-- <div class="row">
  <div class="col-lg-3">Free Code Camp Front-End Certification
	<p><a href="https://www.freecodecamp.com/jimalanmcb/front-end-certification" target="_blank" id="port-link"><img src="jimfcccert.png" class="img-thumbnail"  alt="FCC Cert" width="304" height="236"></a></img>
	</p>
  </div>
</div> -->

<em>"Try not, do or do not, there is no try." -Yoda</em>
<p>I want to develop and design, and be able to make life better for millions of people. </p>
<p>I was born and raised in Tennessee and now I live in Phoenix, AZ. I would say my passion is learning, and being
  able to create, or edit something..and see the amazing results. </p>
<p>
  I have gone through the ranks of Managment in Retail and Restaurant businesses. I was a Regional Training Manager, I'm currently
  a Operations Manager and I'm taking a step into the development world!</p>
<p>
  I also have a Front-End Certification from FCC which has added to my JavaScript, React, HTML5, jQuery, CSS and Git abilities.
</p>`;

