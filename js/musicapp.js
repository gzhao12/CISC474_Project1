$(document).ready(function () {
	var flag = 0;
	
	

	$(".faces").click(function () {
		
		var obj = document.createElement("audio");
        obj.src="audio/wav/"+this.id+".wav";
        obj.autoPlay=false;
        obj.preLoad=true;
			
		if (flag == 0) {
			$(this).css("background-color", "#DF5246");
			obj.play();
			flag = 1;
		} else if (flag == 1) {
			$(this).css("background-color", "#00C5FF");
			flag = 0;
		}

	});


});