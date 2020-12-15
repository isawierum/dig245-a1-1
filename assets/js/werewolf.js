
/* javascript */


$("#werewolf-button").on("click",function(){
	$(".first-popup").removeClass("hidden");
	$("#werewolf-button").off('click');
});


var price = "";
var priceval = 0;
var totalprice = 0;


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


		 if(id == "flower1"){
			 price = "23"
			 priceval = 23;
		 }
			 else if (id == "flower2") {
				 price = "29"
				 priceval = 29;
			 }
			 else {
			 	price = "27"
				priceval = 27;
			 }
			 totalprice = String(priceval + 20);

			 console.log(price);
			 console.log(priceval);
			 console.log(totalprice)
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


	$('.names').html("<p>Name: "+ firstname + " " + lastname + "</p>");
	$('.addy1').html("<p>Delivery Address: " + address + ", " + city+ "</p>");
	$('.howl').html("<p>Howling Number: " + howlnum+ "</p>");
	$('.cc').html("<p>Credit Card Number: " + ccnum+ "</p>");
	$('.addy2').html("<p>Billing Address: " + address + ", " + city+ "</p>");
	$(".bill").html("<p>Price of Flowers: " + price + " beans<br>Tax: 5 beans<br>Fees: 15 beans  <br> Total: " + totalprice + " beans</p>");
	});

	$(".confirm").on("click", function(){
		$(".last-popup").addClass("hidden");
		$(".-results-popup").removeClass("hidden");
	});

	$(".leave").on("click", function(){
		$(".last-popup").addClass("hidden");
		$(".posi-results-popup").removeClass("hidden");
	});

	$(".exit1").on("click", function(){
		$(".posi-results-popup").addClass("hidden");
		$("#werewolf-button").on("click",function(){
			$(".first-popup").removeClass("hidden");
			$("#werewolf-button").off('click');
		});
	});

	$(".exit2").on("click", function(){
		$(".-results-popup").addClass("hidden");
		$("#werewolf-button").on("click",function(){
			$(".first-popup").removeClass("hidden");
			$("#werewolf-button").off('click');
		});
	});
