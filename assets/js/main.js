
/* javascript */

$("#two-faced-button").on("click",function(){
	$(".two-faced-popup").removeClass("hidden");
	$(".two-faced-popup").addClass("visible");
	$("#two-faced-button").addClass("hidden");
});



$(".x").on("click", function(){
	$(".two-faced-popup").removeClass("visible");
	$(".two-faced-popup").addClass("hidden");
	$(".-results-popup").removeClass("hidden");

});

$(".upgrade").on("click", function(){
	$(".two-faced-popup").removeClass("visible");
	$(".two-faced-popup").addClass("hidden");
	$(".-results-popup").removeClass("hidden");

});


$(".ok").on("click", function(){
	$(".two-faced-popup").removeClass("visible");
	$(".two-faced-popup").addClass("hidden");
	$(".-results-popup").removeClass("hidden");

});

$(".solution1").on("click", function(){
	$(".two-faced-popup").removeClass("visible");
	$(".two-faced-popup").addClass("hidden");
	$(".posi-results-popup").removeClass("hidden");
});

/*
function hidden(classtohide) {
  if($(classtohide.hasClass("visible")){
		$("classtohide").removeClass("visible");
		$("classtohide").addClass("hidden");
	}
	else {
		$("classtohide").addClass("hidden");
		$("classtohide").removeClass("visible");

	}
}

*/
