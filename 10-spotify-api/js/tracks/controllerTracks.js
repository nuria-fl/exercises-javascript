/* 
	this module is in charge of creating the list of tracks once we receive response from the ajax request
*/

(function($) {

	function createBlockTracks( listTracks ) {
		var htmlBlock = '<ul class="list-group">';
		listTracks.forEach( function(track, i) {
			htmlBlock += '<li class="list-group-item"><a href="'+track.preview_url+'" class="js-track" target="_blank"><i class="glyphicon glyphicon-music"></i> '+ track.name +'</a></li>'
			
		})
		htmlBlock += '</ul>';
		
		return htmlBlock;
	}


	$(document).on('dataTracksReady', function(event, tracks, albumId) {

		var htmlBlock = createBlockTracks ( tracks.items );

		$("#"+albumId).find('ul').remove();
		$("#"+albumId ).append(htmlBlock)

	})
	
})(jQuery);