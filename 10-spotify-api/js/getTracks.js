(function($) {
	$( document ).on( "getTracks", function(event, target, recipient) {

		$(recipient).find('ul').remove();

		var albumId = $(target).data('id');
		
		$.ajax({
			url: 'https://api.spotify.com/v1/albums/' + albumId + '/tracks',
		})
		.done(function( tracks ) {
			var tracksList = '<ul class="list-group">'
			tracks.items.forEach(function(elem, i){
				tracksList += '<li class="list-group-item"><a href="'+elem.preview_url+'" class="js-track" target="_blank"><i class="glyphicon glyphicon-music"></i> '+ elem.name +'</a></li>'
			})
			tracksList += '</ul>';
			recipient.append(tracksList)
		})
	});
})(jQuery)