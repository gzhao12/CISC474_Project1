var tempo = 120; //bpm
var num = 0;

function update () {
    document.getElementById('time').innerHTML = num%4 + 1;
	num++;
  }

update();
setInterval(update, (1/tempo)*60*1000);