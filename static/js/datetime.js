$(function() {

	function getCountdown(){

		var date = new Date() - new Date(2016,8,15); // set the countdown date
		var days, daysmod, hours, hoursmod, minutes, minutesmod, seconds; // variables for time units

		var countdown = document.getElementById("tiles"); // get tag element


		days = Math.floor(date / 1000 / 60 / 60 / 24);// 从这里开始
		daysmod = date - days * 24 *60 * 60 * 1000;
		 
		hours = Math.floor(daysmod / 1000 / 60 / 60);
		hoursmod = date - (days * 24 *60 * 60 * 1000) - (hours * 1000 * 60 * 60);
		  
		minutes = Math.floor(hoursmod / 1000 / 60);
		minutesmod = date - (days * 24 *60 * 60 * 1000) - (hours * 1000 * 60 * 60) - (minutes * 1000 * 60);

		seconds = Math.floor(minutesmod / 1000);// 到这里结束，是将总毫秒转化成对应天数+小时数+分钟数+秒数的转换方法

		// format countdown string + set tag value
		countdown.innerHTML = "<span>" + days + "</span>天<span>" + hours + "</span>时<span>" + minutes + "</span>分<span>" + seconds + "</span> 秒"; 
	}

	setInterval(function () { getCountdown(); }, 1000);

});