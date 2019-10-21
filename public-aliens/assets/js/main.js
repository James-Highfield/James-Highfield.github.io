$( document ).ready(function() {
    console.log( "ready!" );

$('.index-killer').click(function() {
	$('.right-content').removeClass('popup-show');
  	$('.right-killer').addClass('popup-show');
});

$('.index-monster').click(function() {
 	 $('.right-content').removeClass('popup-show');
  	$('.right-monster').addClass('popup-show');
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


});