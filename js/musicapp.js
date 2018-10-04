$(document).ready(function () {
	$("#stop").css("background-color", "#a83b32");

	var isPlaying = false;
	var timerId;
	var slider = document.getElementById("myRange");
	var output = document.getElementById("demo");
	output.innerHTML = slider.value;

	slider.oninput = function() {
	  output.innerHTML = this.value;
	}

	//download function
	$("#save").click(function() {
		let selectedTiles = [];

		for (let colCounter = 1; colCounter < 5; colCounter++) {
			let selectedTilesInCol = [];
			for (let rowCounter = 1; rowCounter < 5; rowCounter++) {
				if ($("#" + rowCounter + "_" + colCounter).css("background-color") == "rgb(223, 82, 70)")
				selectedTilesInCol.push($("#" + rowCounter + "_" + colCounter).attr("title"));
			}
			selectedTiles.push(selectedTilesInCol);
		}

		let board = {
			arr: selectedTiles,
			tempo: slider.value
		};

		var fileprefix = prompt ("Please name the file");
		var filesuffix = ".txt";
		var filename = fileprefix.concat(filesuffix);
		var saveJSON = JSON.stringify(board);
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
		let obj = document.createElement("audio");
		obj.src="audio/wav/"+$(this).attr("title")+".wav";
		obj.autoPlay=false;
		obj.preLoad=true;

		if ($(this).css("background-color") == "rgb(255, 255, 255)") {
			$(this).css("background-color", "#DF5246").hover(
				function() {
					$(this).css("background-color", "#00C5FF");
				},
				function() {
					$(this).css("background-color", "#DF5246")
				}
			);
			obj.play();
		} else {
			$(this).css("background-color", "#00C5FF").hover(
				function() {
					$(this).css("background-color", "white");
				},
				function() {
					$(this).css("background-color", "#00C5FF")
				}
			);
			obj.play()
		}
	});

	$("#play").click(function() {
		if(isPlaying) {
			alert("You're already playing!");
		} else {
			isPlaying = true;
			$("#play").css("background-color", "#a83b32");
			$("#stop").css("background-color", "#F05F40");

			let selectedTiles = [];

			for (let colCounter = 1; colCounter < 5; colCounter++) {
				let selectedTilesInCol = [];
				for (let rowCounter = 1; rowCounter < 5; rowCounter++) {
					if ($("#" + rowCounter + "_" + colCounter).css("background-color") == "rgb(223, 82, 70)")
					selectedTilesInCol.push($("#" + rowCounter + "_" + colCounter).attr("title"));
				}
				selectedTiles.push(selectedTilesInCol);
			}

			let board = {
				arr: selectedTiles,
				tempo: slider.value
			};

			console.log(slider.value);

			let loopCounter = 0;
			timerId = setInterval(
				function() {
					update(board.arr[loopCounter%4])
					loopCounter++;
				}, 60000/board.tempo
			);
			function update (col) {
				for(row = 0 ; row < col.length; row++){
					if(col[row] != undefined || col[row].length == 0){
						let obj = document.createElement("audio");
						//Set audio data
						obj.src="audio/wav/"+col[row]+".wav";
						obj.autoPlay=false;
						obj.preLoad=true;
						obj.play();
					}
				}
				col++;
			}
		}
	});

	$("#stop").click(function() {
		if (!isPlaying)
		alert("There's nothing to stop!");
		else {
			isPlaying = false;
			clearInterval(timerId);
			$("#play").css("background-color", "#F05F40");
			$("#stop").css("background-color", "#a83b32");
		}
	});
});
// dark orange = rgb(168, 59, 50) = #a83b32
// light orange = rgb(240, 95, 64) = #F05F40
// light blue = rgb(0, 197, 255) = #00C5FF
