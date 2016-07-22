(function($) {

	$( document ).on( "searchDataAlbumsReady", function(event, artistId) {

		var urlRequest = 'https://api.spotify.com/v1/artists/' + artistId + '/albums?market=ES';

		$.ajax({
			url: urlRequest,
		})
		.done(function( albums ) {
			$(document).trigger("dataAlbumsReady", [albums, artistId]);
		})

	});
})(jQuery);