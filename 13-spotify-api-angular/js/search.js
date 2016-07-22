(function($) {
	$("form").on('submit', function(event) {

		event.preventDefault();
		var searchTerm = $("input").val();
		$( document ).trigger( "searchDataArtistReady", searchTerm );

	});	
})(jQuery);