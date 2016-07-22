angular.module("spotifyController", ["spotifyServices"])
	.controller("searchBox", function($scope, dataArtists, dataAlbums, dataTracks) {
		$scope.artists = "";
		$scope.albums = "";
		$scope.tracks = "";
		$scope.submit = function() {
			dataArtists.getArtists($scope.searchValue)
				.then(function( dataFromApi ) {
					$scope.artists = dataFromApi.data.artists.items;
				})
		}
	})
	.controller("getAlbumsFromArtist", function($scope, dataAlbums) {
		$scope.getAlbums = function() {
			dataAlbums.getAlbums($scope.selectArtists)
				.then(function( dataFromApi ) {
					$scope.$parent.albums = dataFromApi.data.items;
				})
		}
	})
	.controller("getTracksFromAlbum", function($scope, dataTracks) {
		$scope.getTracks = function() {
			dataTracks.getTracks($scope.selectAlbums)
				.then(function( dataFromApi ) {
					$scope.$parent.tracks = dataFromApi.data.items;

				})

		}
	})