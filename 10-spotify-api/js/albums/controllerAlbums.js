/* 
	this module is in charge of creating the list of albums once we receive response from the ajax request
*/

(function($) {

	function createBlockAlbums( listAlbums ) {
		var htmlBlock = '<ul class="list-group">';
		listAlbums.forEach( function(album, i) {

			var albumPic = '';

			if(album.images[2]) {
				albumPic = '<img src="'+ album.images[2].url +'" alt="'+ album.name +'" class="img-thumbnail" width="80">';
			}
			htmlBlock += '<li class="list-group-item" id="' + album.id +'"><a href="#" class="js-album" data-id="'+album.id+'">'+ albumPic+ album.name +'</a></li>'
		})
		htmlBlock += '</ul>';

		return htmlBlock;
	}

	$(document).on('dataAlbumsReady', function(event, albums, artistId ) {
		
		var htmlBlock = createBlockAlbums ( albums.items );

		$("#"+artistId).find('ul').remove();
		$("#"+artistId ).append(htmlBlock)

	})

	$('#containerResults').on('click', '.js-album', function(e){
		e.preventDefault();
		var albumId = $(this).data('id');
		$( document ).trigger( "searchDataTracksReady", albumId );
	})
})(jQuery);