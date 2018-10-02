$(document).ready(function () {
	var isClicked = false;
	var slider = $("myRange");
	var output = $("demo");
	output.innerHTML = slider.value; // Display the default slider value

	// Update the current slider value (each time you drag the slider handle)
	slider.oninput = function() {
	    output.innerHTML = this.value;
	}
	//download function
	$("#save").click(function(/*passed_object*/) {
		var fileprefix = prompt ("Please name the file");
		var filesuffix = ".txt";
		var filename = fileprefix.concat(filesuffix);
		var passed_object = new Array (1,2,3,4);
		var saveJSON = JSON.stringify(passed_object);
		var textFileAsBlob = new Blob([saveJSON], {type:'text/plain'});
		var downloadLink = document.createElement("a");
		downloadLink.download = filename;
		downloadLink.innerHTML = "Download File";
		if (window.webkitURL != null)
		{
			downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
		}
		else
		{
			downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
			downloadLink.onclick = destroyClickedElement;
			downloadLink.style.display = "none";
			document.body.appendChild(downloadLink);
		}

		downloadLink.click();

	});

	$(".faces").click(function () {
		var obj = document.createElement("audio");
				obj.src="audio/wav/"+$(this).attr("title")+".wav";
				obj.autoPlay=false;
				obj.preLoad=true;

			if (isClicked == false) {
				$(this).css("background-color", "#DF5246");
				obj.play();
				isClicked = true;
			} else if (isClicked == true) {
				$(this).css("background-color", "#00C5FF");
				obj.play()
				isClicked = false;
			}

	});

// rgb(223, 82, 70) = selected
// rgb(0, 197, 255) = not selected
	$("#play").click(function() {
		var selectedTiles = [];

		for (var colCounter = 1; colCounter < 5; colCounter++) {
			var selectedTilesInCol = [];
			for (var rowCounter = 1; rowCounter < 5; rowCounter++) {
				if ($("#" + rowCounter + "_" + colCounter).css("background-color") == "rgb(223, 82, 70)")
					selectedTilesInCol.push($("#" + rowCounter + "_" + colCounter).attr("title"));
			}
			selectedTiles.push(selectedTilesInCol);
		}
	});
});
