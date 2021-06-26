
setInterval(function(){
var today =new Date();
document.getElementById('crntime').innerHTML ="Current time   :-   "+
today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()},1000);

function sysHour(){
	var sh = document.getElementById('syshour');
	var hrs = 12;
	for( i=1;i<=hrs;i++){
		sh.options[sh.options.length]= new Option(i<10?"0"+i:i);
	}
}
sysHour();

function sysMinutes(){
	var sm = document.getElementById('sysminutes');
	var mins = 59;
	for( i=0;i<=mins;i++){
		sm.options[sm.options.length]= new Option(i<10?"0"+i:i);
	}
}
sysMinutes();

 var alarms = [];
 var message = [];
 var alarm_showed = false;
 var sound = new Audio('0110. My Dream - AShamaluevMusic.mp3');
 sound.loop = true
//var audioSrc = ctx.createMediaElementSource(audio);
//sound.crossOrigin= 'anonymous'
function save(){
	//console.log("saving alarm");
	alarms.push([document.getElementById('syshour').value, 
				 document.getElementById('sysminutes').value
				]);
	message.push(document.getElementById('message').value);
	//console.log(alarms);console.log(message);
}
setInterval(function(){
	if (alarms.length != 0) {
		for(i=0;i<alarms.length;i++){
		var hour = parseInt(alarms[i][0]);
		var min = parseInt(alarms[i][1]);
		var time= new Date();
		var curHour = parseInt(time.getHours());
		var curMin = parseInt(time.getMinutes());
		//console.log(hour, curHour,min, curMin, alarm_showed);
		if((hour === curHour || hour === curHour-12)&& min === curMin){
			if(!alarm_showed){
				sound.play();
				//alert(`${message}`);window.confirm(message);
				//window.prompt(message);
				window.alert(message);
				alarm_showed = true;
			}
		}else {
			alarm_showed = false;
		}
	}

	}
}, 1000);

function pause(){
	document.getElementById('syshour').disabled = false;
	document.getElementById('sysminutes').disabled = false;
	sound.pause();
}

