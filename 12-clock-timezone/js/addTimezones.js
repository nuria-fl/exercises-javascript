(function($){
	$(document).on('addTimezones', function(event, timezones){
		var arrayZones = timezones.zones;
		arrayZones.forEach(function(zone, i){
			var zoneNameDisplay = zone.zoneName.split('_').join(' ');
			$('#timezones').append('<option value="'+ zone.zoneName +'">'+ zoneNameDisplay +'</option>');
		})
		$('#loading').hide();
		$('#timezones').show().selectpicker({
			liveSearch: true
		})
	})	
})(jQuery);