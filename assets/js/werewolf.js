
/* javascript */


$("#werewolf-button").on("click",function(){
	$(".first-popup").removeClass("hidden");
	$("#werewolf-button").off('click');
});

$(".continue").on("click", function(){
	$(".first-popup").addClass("hidden");
	$(".second-popup").removeClass("hidden");
});


$(".continue2").on("click",function(){
	$(".second-popup").addClass("hidden");
	$(".last-popup").removeClass("hidden");
});

$("#two-faced-button").on("click",function(){
	$(".two-faced-popup").removeClass("hidden");
	$("#two-faced-button").off('click');
});


/* test popup options
*/
$(".x").on("click", function(){
	$(".two-faced-popup").addClass("hidden");
	$(".-results-popup").removeClass("hidden");
});

$(".upgrade").on("click", function(){
	$(".two-faced-popup").addClass("hidden");
	$(".-results-popup").removeClass("hidden");
});


$(".ok").on("click", function(){
	$(".two-faced-popup").addClass("hidden");
	$(".-results-popup").removeClass("hidden");
});

$(".solution1").on("click", function(){
	$(".two-faced-popup").addClass("hidden");
	$(".posi-results-popup").removeClass("hidden");
});

/*Answer popup buttons*/
$(".exit1").on("click", function(){
	$(".posi-results-popup").addClass("hidden");
	$("#two-faced-button").on("click",function(){
		$(".two-faced-popup").removeClass("hidden");
		$("#two-faced-button").off('click');
	});
});

$(".again").on("click", function(){
	$(".-results-popup").addClass("hidden");
		$(".two-faced-popup").removeClass("hidden");
	});

$(".giveup").on("click", function(){
	$(".-results-popup").addClass("hidden");
	$(".noanswer").removeClass("hidden");
	});

	$(".exit2").on("click", function(){
		$(".noanswer").addClass("hidden");
		$("#two-faced-button").on("click",function(){
			$(".two-faced-popup").removeClass("hidden");
			$("#two-faced-button").off('click');
		});
	});
