(function($){
	$(document).on('ready', function(){
		var urlRequest = 'http://api.timezonedb.com/v2/list-time-zone?key=3LCSZ8930XBZ&format=json&zone=*';
		$.ajax({
			url: urlRequest,
		})
		.done(function( timezones ) {
			$(document).trigger('addTimezones', timezones)
		})
	})	
})(jQuery);