$(document).ready(function () {
	$(".panel-heading").click(function () {
		$(this).toggleClass("open");
		$(this).next(".panel-collapse").slideToggle(500);
	});
});