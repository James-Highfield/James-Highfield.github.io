$( document ).ready(function() {
    console.log( "ready!" );

$('.public-domain').click(function() {
	$('.left-content').removeClass('popup-show');
  	$('.left-content-pd').addClass('popup-show');
});

$('.pd-return').click(function() {
	$('.left-content').removeClass('popup-show');
  	$('.left-content-primary').addClass('popup-show');
});

$('.index-killer').click(function() {
	$('.right-content').removeClass('popup-show');
  	$('.right-killer').addClass('popup-show');
});

$('.index-monster').click(function() {
 	 $('.right-content').removeClass('popup-show');
  	$('.right-monster').addClass('popup-show');
});

$('.index-destroy').click(function() {
 	 $('.right-content').removeClass('popup-show');
  	$('.right-destroy').addClass('popup-show');
});

$('.index-ufo').click(function() {
 	 $('.right-content').removeClass('popup-show');
  	$('.right-ufo').addClass('popup-show');
});

$('.index-doomsday').click(function() {
 	 $('.right-content').removeClass('popup-show');
  	$('.right-doomsday').addClass('popup-show');
});

$('.index-beyond').click(function() {
 	 $('.right-content').removeClass('popup-show');
  	$('.right-beyond').addClass('popup-show');
});

$('.index-plan').click(function() {
 	 $('.right-content').removeClass('popup-show');
  	$('.right-plan').addClass('popup-show');
});

$('.index-phantom').click(function() {
 	 $('.right-content').removeClass('popup-show');
  	$('.right-phantom').addClass('popup-show');
});


});