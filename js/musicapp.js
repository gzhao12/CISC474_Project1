$(document).ready(function () {
	var flagClicked = 0;



	$(".faces").click(function () {
		alert(this.id);
		
		var obj = document.createElement("audio");
        obj.src="audio/wav/"+this.id+".wav";
        obj.autoPlay=false;
        obj.preLoad=true;
        
			if (flagClicked == 0) {
				$(this).css("background-color", "#DF5246");
				obj.play();
				flagClicked = 1;
			} else if (flagClicked == 1) {
				$(this).css("background-color", "#00C5FF");
				obj.play()
				flagClicked = 0;
			}

	});
	
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


});