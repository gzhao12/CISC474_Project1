$(document).ready(function () {
	function Tile (filePath, isSelected) {
		this.filePath = filePath;
		this.isSelected = isSelected;
	}
	function Board (arr) {
		this.arr = arr;
		this.tempo = 100;
		this.getArrIndex = function(row, col) {
			return this.arr[row][col];
		}
	}

	var boardArr = [];

	for (var counter1 = 0; counter1 < 8; counter1++) {
		boardArr[counter1] = [];
		for (var counter2 = 0; counter2 < 8; counter2++) {
			boardArr[counter1][counter2] = new Tile('something', false);
		}
	}
});


// var flag = 0;
//
// $(".faces").click(function () {
//
// 	var obj = document.createElement("audio");
// 			obj.src="audio/wav/"+this.id+".wav";
// 			obj.autoPlay=false;
// 			obj.preLoad=true;
//
// 	if (flag == 0) {
// 		$(this).css("background-color", "#DF5246");
// 		obj.play();
// 		flag = 1;
// 	} else if (flag == 1) {
// 		$(this).css("background-color", "#00C5FF");
// 		flag = 0;
// 	}
//
// });
