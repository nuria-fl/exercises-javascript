(function($) {
	$('ul').on('click', '.js-artist', function(e){
		e.preventDefault();
		target = this;
		recipient = $(this).parent();
		$( document ).trigger( "getAlbums", [target, recipient] );
	})
})(jQuery)