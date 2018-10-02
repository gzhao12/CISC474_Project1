function getCell(column, row) {
    var column = $('#' + column).index();
    var row = $('#' + row)
    return row.find('td').eq(column);
}

$(document).ready(function () {
	var flagClicked = 0;



	$(".faces").click(function () {
		
		var column = $('#column2').index();
		//alert(column);
		var cell = $('#row4').find('td').eq(column);
		//alert(cell.html());
		
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


});