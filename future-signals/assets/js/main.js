$(document).ready(function(){
	console.log("The page is ready");

	$('.research-item').click(function(){
		$(this).toggleClass('large');
	});

	$('.nav-cat').click(function(){
		$('.nav-cat').removeClass('active')
		$(this).addClass('active');

	})

	var hideAll = function(){
		$('.research-item').addClass('hide');
	}

	$('.btn-space').click(function(){
		hideAll();
		$('.space').removeClass('hide');
	});

	$('.btn-ai').click(function(){
		hideAll();
		$('.ai').removeClass('hide');
	});

	$('.btn-arti').click(function(){
		hideAll();
		$('.arti').removeClass('hide');
	});
	
	$('.btn-propa').click(function(){
		hideAll();
		$('.propa').removeClass('hide');
	});

	$('.btn-egypt').click(function(){
		hideAll();
		$('.egypt').removeClass('hide');
	});

	$('.btn-anci').click(function(){
		hideAll();
		$('.anci').removeClass('hide');
	});

});