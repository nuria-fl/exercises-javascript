(function($) {
	$( document ).on( "getAlbums", function(event, target, recipient) {
		
		$(recipient).find('ul').remove();
		var artistId = $(target).data('id');

		$.ajax({
			url: 'https://api.spotify.com/v1/artists/' + artistId + '/albums?market=ES',
		})
		.done(function( albums ) {
			var albumsList = '<ul class="list-group">'
			albums.items.forEach(function(elem, i){
				var albumPic = '';
				if(elem.images[2]) {
					albumPic = '<img src="'+ elem.images[2].url +'" alt="'+ elem.name +'" class="img-thumbnail" width="80">';
				}
				albumsList += '<li class="list-group-item"><a href="#" class="js-album media" data-id="'+elem.id+'">' + albumPic + elem.name +'</a></li>'
			})
			albumsList += '</ul>';
			recipient.append(albumsList)
		})
	});
})(jQuery)