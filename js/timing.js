//var tempo = 120; //bpm
var num = 0;
var boardSample = {
	arr:[
		["a1"],
		["b1"],
		["a1", "c1"],
		[""],
		[""],
		["c1"],
		["d1"],
		["a1", "e1"],
		[""],
		[""],
		[""],
		["a1", "e1"],
		["g1"],
		["d1"],
		[""],
		[""],
		[""],
		["a1", "c1"],
		["b1"],
		["a1"]
	],
	tempo:120
};



//Passes in board.tempo
function start(board){
	num = 0; //Restart
	let timerId = setInterval(function() {update(board.arr[num])}, (1/board.tempo)*60*1000);
}

//Figure out how to do a 2D array in JavaScript for any number of concurrent notes
function update (col) {
	for(row = 0 ; row < col.length; row++){
		if(col[row] != undefined || col[row].length == 0){
			var obj = document.createElement("audio");
			//Set audio data
			obj.src="audio/wav/"+col[row]+".wav";
			obj.autoPlay=false;
			obj.preLoad=true;
			obj.play();
		}
	}
	num++;
}
