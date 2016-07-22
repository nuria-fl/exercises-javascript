(function($){
	var currentTimezone = jstz.determine().name();
	var currentTime = moment().tz(currentTimezone);
	var hour = currentTime.format('H');
	var minute = currentTime.format('m');
	var second = currentTime.format('s');

	function addZero(d){
		return (d < 10) ? '0' + d.toString() : d.toString();
	}
	function displayTime( hour, minute, second ) {
		var $timeSpots = $("#date span");
		$timeSpots.eq(0).text( addZero(hour) );
		$timeSpots.eq(1).text( addZero(minute) );
		$timeSpots.eq(2).text( addZero(second) );
	}
	function updateTime() {
		second++;
		if (second >= 60) {
			minute++; second = 0;
		}
		if (minute >= 60) {
			hour++; minute = 0;
		}
		if (hour >= 24) {
			hour=0;
		}
		displayTime( hour, minute, second );
	}

	displayTime( hour, minute, second );

	var interval = setInterval (updateTime, 1000);

	$('#timezoneTitle').text(currentTimezone);

	$('#timezones').change(function(){

		var selectedZone = $(this).val();
		var selectedZoneDisplay = $(this).val().split('_').join(' ');
		var nowZone = moment().tz(selectedZone);

		hour = nowZone.format('H');
		minute = nowZone.format('m');
		second = nowZone.format('s');

		displayTime( hour, minute, second );
		clearInterval(interval);
		interval = setInterval (updateTime, 1000);

		$('#timezoneTitle').text(selectedZoneDisplay);

	})
})(jQuery)