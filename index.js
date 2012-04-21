$(document).ready(function(){
	$(".aLink").hover(
		function(){
			$(this).css("color", "darkgrey")
		},
		function(){
			$(this).css("color", "grey")
		}
	);

});