$(document).ready(function() {
	setYear();
	setImageHover();
});

function setImageHover() {
	$('.img-hover').hover(
		function() {
			$(this).fadeTo(140, .5);
		},
		function() {
			$(this).fadeTo(140, 1);
		}
	);
}

function setYear() {
  var thisYear = new Date().getFullYear();
  $('.year').text(thisYear);
}
