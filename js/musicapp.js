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
		for (var counter2 = 0; counter2 < 8; counter2++) {
			switch(counter1) {
				case 0:
					boardArr[counter1][counter2] = new Tile('audio/c1.wav', false);
				case 1:
					boardArr[counter1][counter2] = new Tile('audio/d1.wav', false);
				case 2:
					boardArr[counter1][counter2] = new Tile('audio/e1.wav', false);
				case 3:
					boardArr[counter1][counter2] = new Tile('audio/f1.wav', false);
				case 4:
					boardArr[counter1][counter2] = new Tile('audio/g1.wav', false);
				case 5:
					boardArr[counter1][counter2] = new Tile('audio/a1.wav', false);
				case 6:
					boardArr[counter1][counter2] = new Tile('audio/b1.wav', false);
				case 7:
					boardArr[counter1][counter2] = new Tile('audio/c2.wav', false);
			}
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
