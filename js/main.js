$(document).ready(function() {
	setYear();
	setImageHover();
});

function setImageHover() {
	$('.img-hover').hover(
		function() {
			$(this).fadeTo('fast', .5);
		},
		function() {
			$(this).fadeTo('fast', 1);
		}
	);
}

function setYear() {
  var thisYear = new Date().getFullYear();
  $('.year').text(thisYear);
}
