/* 
	this module is in charge of creating the list of the artists once we receive response from the ajax request
*/

(function($) {

	function createBlockArtists( listArtists ) {
		var htmlBlock = '';
		listArtists.forEach( function(artist, i) {

			var artistPic = '';

			if(artist.images[2]) {
				artistPic = '<img src="'+ artist.images[2].url +'" alt="'+ artist.name +'" class="img-thumbnail" width="80">';
			}
			htmlBlock += '<li class="list-group-item" id="' + artist.id +'"><a href="#" class="js-artist" data-id="'+artist.id+'">'+ artistPic+ artist.name +'</a></li>'
		})

		return htmlBlock;
	}


	$(document).on('dataArtistsReady', function(event, artists) {
		
		var htmlBlock = createBlockArtists ( artists.artists.items );
		$("#containerResults").html(htmlBlock)

	})

	$('#containerResults').on('click', '.js-artist', function(e){
		e.preventDefault();
		var artistId = $(this).data('id');
		$( document ).trigger( "searchDataAlbumsReady", artistId );
	})
	
})(jQuery)