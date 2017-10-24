var animalArray = [];

$("#add-animal").on("click", function() {
  	event.preventDefault();
	var animalInput = $("#animal-input").val().trim();
	animalArray.push(animalInput);
	showButtons();
	$("#animal-input").val("");
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
};

var displayGIF = function() {
	var animal = $(this).attr("data-value");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=fO4RqXpbU2Pg5nQe4vacMwhEnxNDw12S&limit=10";
	$("#gif-display").empty();

	$.ajax({
	  url: queryURL,
	  method: 'GET'
	}).done(function(response) {
		var result = response.data;
		for (i = 0; i < result.length; i++){
			var animalDIV = $("<div class='item'>")
			animalDIV.append("<p>Rating: " + result[i].rating + "</p>");
			animalDIV.append("<img data-state='still' class='gif' src='" + result[i].images.original_still.url + "' data-still='" + result[i].images.original_still.url + "' data-animate='" + result[i].images.original.url + "'>");
			// animalDIV.append("<img src='" + result[i].images.downsized_still.url +"'>");
			// animalDIV.addClass("gif");
			// animalDIV.attr("data-state", "still");
			// animalDIV.attr("data-still", result[i].images.downsized_still.url);
			// animalDIV.attr("data-animate", result[i].images.fixed_width_downsampled.url);
			// animalDIV.append("<img src='" + animalDIV.attr('data-still') + "''>");
			$("#gif-display").append(animalDIV);
		}
		$(".gif").on("click", function() {
		
			var state = $(this).attr("data-state");

			if (state === "still") {
				$(this).attr("src", $(this).attr("data-animate"));
				$(this).attr("data-state", "animate");
			} 
			else if (state === "animate"){
				$(this).attr("src", $(this).attr("data-still"));
				$(this).attr("data-state", "still");
			}
		});

	});

};


$(document).on("click", ".animal", displayGIF);



//http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5