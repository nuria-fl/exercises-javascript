(function($) {

	$( document ).on( "searchDataArtistReady", function(event, searchTerm) {

		var urlRequest = 'https://api.spotify.com/v1/search?q='+searchTerm+'&type=artist';

		$.ajax({
			url: urlRequest,
		})
		.done(function( artists ) {
			$(document).trigger("dataArtistsReady", artists);
		})
	});
})(jQuery)