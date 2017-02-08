$(document).ready(function() {
	console.log( "ready!" );
	$('.img-hover').hover(
		function() {
			$(this).fadeTo('fast', .5);
			//$(this).addClass('img-highlight');			
		},
		function() {
			$(this).fadeTo('fast', 1);
			//$(this).removeClass('img-highlight');
		}
	);
});