(function($) {
	$( document ).on( "getArtists", function(event, searchTerm, recipient) {
		$.ajax({
			url: 'https://api.spotify.com/v1/search?q='+searchTerm+'&type=artist',
		})
		.done(function( artists ) {
			var list = '';
			artists.artists.items.forEach(function(elem, i){
				var artistPic = '';
				if(elem.images[2]) {
					artistPic = '<img src="'+ elem.images[2].url +'" alt="'+ elem.name +'" class="img-thumbnail" width="80">';
				}
				list += '<li class="list-group-item"><a href="#" class="js-artist" data-id="'+elem.id+'">'+ artistPic+ elem.name +'</a></li>'
			})
			recipient.html(list)
		})
	});
})(jQuery)