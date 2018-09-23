var tempo = 120; //bpm
var num = 0;

$(document).ready(function () {
	$(".times").click(function () {
		start();
	});
});

//"noteName" equals a quarter note
//"" equals a quarter rest
var rightHand = new Array("c1", "e1", "g1", "e1", "c1", "e1", "g1", "e1", "d1", "d1", "f1", "d1", "c1", "c1", "c1", "c1",
	"c1", "e1", "g1", "e1", "c1", "e1", "g1", "e1", "", "d1", "f1", "d1", "c1", "c1", "c1", "c1");
var leftHand = new Array("", "", "", "", "", "", "", "", "f1", "f1", "f1", "f1", "e1", "e1", "e1", "e1",
	"", "", "", "", "", "", "", "", "", "f1", "f1", "f1", "e1", "e1", "e1", "e1");

function start(){
	num = 0; //Restart
	let timerId = setInterval(updating, (1/tempo)*60*1000);
}

//Figure out how to do a 2D array in JavaScript for any number of concurrent notes
function update (arr1, arr2) {
	var obj = document.createElement("audio");
	var obj2 = document.createElement("audio");
	//Set audio data
	obj.src="audio/wav/"+arr1[num]+".wav";
	obj.autoPlay=false;
	obj.preLoad=true;
	obj2.src="audio/wav/"+arr2[num]+".wav";
	obj2.autoPlay=false;
	obj2.preLoad=true;
	//Play audio
	obj.play();
	obj2.play();
	num++;
	//Stop at end of arrays
	if(num >= arr1.length && num >= arr2.length)
		clearInterval(timerId);
  }

function updating(){
	//update(["a1", "b1"], ["c1", "d1"]);
	update(rightHand, leftHand);
}