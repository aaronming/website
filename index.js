$(document).ready(function(){
	var state = 1;
	
	$("#contentAboutMe").hide();
	$("#contentDrawings").hide();
	$("#contentProjects").hide();
	
	
	$(".aLink").hover(
		function(){
			$(this).css("color", "darkgrey")
		},
		function(){
			$(this).css("color", "grey")
		}
	);
	
	$("#linkHome").click(function(){
		if (state != 1){
			$(".contentClass").fadeOut();
			$("#contentHome").delay(400).fadeToggle();
			state = 1;
		}
	});
	$("#linkAboutMe").click(function(){
		if (state != 2){
			$(".contentClass").fadeOut();
			$("#contentAboutMe").delay(400).fadeToggle();
			state = 2;
		}
	});
	$("#linkProjects").click(function(){
		if (state != 3){
			$(".contentClass").fadeOut();
			$("#contentProjects").delay(400).fadeToggle();
			state = 3;
		}
	});
	$("#linkDrawings").click(function(){
		if (state != 4){
			$(".contentClass").fadeOut();
			$("#contentDrawings").delay(400).fadeToggle();
			state = 4;
		}
	});

});