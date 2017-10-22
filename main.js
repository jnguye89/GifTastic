var animalArray = [];

$("#add-animal").on("click", function() {
  	event.preventDefault();
	var animalInput = $("#animal-input").val().trim();
	animalArray.push(animalInput);
	showButtons();
});

var showButtons = function() {
	$("#button-display").empty();
	for (var i = 0; i < animalArray.length; i++){
		var a = $("<button>");
		a.addClass("animal btn btn-primary btn-md animal-button");
		a.attr("data-value", animalArray[i]);
		a.text(animalArray[i]);
		$("#button-display").append(a);
	}
}

var displayGIF = function() {
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=fO4RqXpbU2Pg5nQe4vacMwhEnxNDw12S&limit=10";
	var animal = $(this).attr("data-value");
	$.ajax({
	  url: queryURL,
	  method: 'GET'
	}).done(function(response) {
	  console.log(response);
	});

}

$(document).on("click", ".animal", displayGIF);



//http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5