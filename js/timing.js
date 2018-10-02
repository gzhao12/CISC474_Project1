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



/*$(document).ready(function () {
	$(".times").click(function () {
		start();
	});
});*/

//"noteName" equals a quarter note
//"" equals a quarter rest
// first array is one "hand", second array is another
var sample = [
	["c1", "e1", "g1", "e1", "c1", "e1", "g1", "e1", "d1", "d1", "f1", "d1", "c1", "c1", "c1", "c1",
	"c1", "e1", "g1", "e1", "c1", "e1", "g1", "e1", "", "d1", "f1", "d1", "c1", "c1", "c1", "c1"]
	["", "", "", "", "", "", "", "", "f1", "f1", "f1", "f1", "e1", "e1", "e1", "e1",
	"", "", "", "", "", "", "", "", "", "f1", "f1", "f1", "e1", "e1", "e1", "e1"]
];
////Tiles
//String file
//boolean isSelected

////Board{
//arr[][] //of Tiles
//int tempo
//}

//Passes in board.tempo
function start(board){
	//alert(board.);
	num = 0; //Restart
	let timerId = setInterval(function() {update(board.arr[num])}, (1/board.tempo)*60*1000);
}

//Figure out how to do a 2D array in JavaScript for any number of concurrent notes
function update (col) {
	for(row = 0 ; row < col.length; row++){
		if(col[row] != ""){
			var obj = document.createElement("audio");
			//Set audio data
			obj.src="audio/wav/"+col[row]+".wav";
			obj.autoPlay=false;
			obj.preLoad=true;
			obj.play();
		}
		//if(num >= arr[row].length+1)
			//clearInterval(timerId);
	}
	num++;	
}
	/*var obj = document.createElement("audio");
	var obj2 = document.createElement("audio");
	//Set audio data
	obj.src="audio/wav/"+"c1"+".wav";
	obj.autoPlay=false;
	obj.preLoad=true;
	obj2.src="audio/wav/"+"a1"+".wav";
	obj2.autoPlay=false;
	obj2.preLoad=true;
	//Play audio
	obj.play();
	obj2.play();
	num++;
	//Stop at end of arrays
	if(num >= arr[0].length && num >= arr[1].length)
		clearInterval(timerId);*/

start(boardSample);
