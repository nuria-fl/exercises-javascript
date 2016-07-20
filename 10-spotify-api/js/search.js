(function($) {
	$("form").on('submit', function(event) {
		event.preventDefault();
		var searchTerm = $("input").val();
		var recipient = $('ul');
		$( document ).trigger( "getArtists", [searchTerm, recipient] );
	});	
})(jQuery)