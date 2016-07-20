(function($) {

	$( document ).on( "searchDataTracksReady", function(event, albumId) {

		var urlRequest = 'https://api.spotify.com/v1/albums/' + albumId + '/tracks';

		$.ajax({
			url: urlRequest,
		})
		.done(function( tracks ) {
			$(document).trigger("dataTracksReady", [tracks, albumId]);
		})
		
	});

})(jQuery);