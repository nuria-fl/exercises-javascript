(function($) {
	$('ul').on('click', '.js-album', function(e){
		e.preventDefault();
		target = this;
		recipient = $(this).parent();
		$( document ).trigger( "getTracks", [target, recipient] );
	})
})(jQuery)