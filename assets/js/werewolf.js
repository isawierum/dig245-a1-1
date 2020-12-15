
/* javascript */


$("#werewolf-button").on("click",function(){
	$(".first-popup").removeClass("hidden");
	$("#werewolf-button").off('click');
});



const btn = document.querySelector('.continue');
 // handle click button
 btn.onclick = function () {
		 const rbs = document.querySelectorAll('input[name="flowers"]');
		 let id;
		 for (const rb of rbs) {
				 if (rb.checked) {
						 id = rb.id
						 break;
				 }
			}
		console.log(id);

		var price = 0;
		 if(id == "flower1"){
			 price = 25;
		 }
			 else if (id == "flower2") {
				 price = 32;
			 }
			 else {
			 	price = 29;
			 }
			 console.log(price);
 };

$(".continue").on("click", function(){
	$(".first-popup").addClass("hidden");
	$(".second-popup").removeClass("hidden");
});



$('#firstname').val(" ");
$('#lastname').val(" ");
$('#address').val(" ");
$('#city').val(" ");
$('#howlnum').val(" ");
$('#ccnum').val(" ");





$(".continue2").on("click",function(){
	$(".second-popup").addClass("hidden");
	$(".last-popup").removeClass("hidden");
	var firstname = $('#firstname').val();
	var lastname = $('#lastname').val();
	var address = $('#address').val();
	var city = $('#city').val();
	var howlnum = $('#howlnum').val();
	var ccnum = $('#ccnum').val();


$('.names').html("Name: "+ firstname + " " + lastname);
$('.addy1').html("Delivery Address: " + address + ", " + city);
$('.howl').html("Howling Number: " + howlnum);
$('.cc').html("Credit Card Number: " + ccnum);
$('.addy2').html("Billing Address: " + address + ", " + city);
$("#bill").html(price);
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
