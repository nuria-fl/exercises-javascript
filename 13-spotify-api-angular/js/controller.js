angular.module("spotifyController", ["spotifyServices"])
	.controller("searchBox", function($scope, dataArtists, dataAlbums, dataTracks) {
		var urlApi = 'https://api.spotify.com/v1/search?type=artist&query='
		$scope.artists = "";
		$scope.albums = "";
		$scope.albums = "";
		$scope.submit = function() {
			dataArtists.getArtists($scope.searchValue)
				.then(function( dataFromApi ) {
					$scope.artists = dataFromApi.data.artists.items;
				})
		}
		$scope.getAlbums = function() {
			dataAlbums.getAlbums($scope.selectArtists)
				.then(function( dataFromApi ) {
					$scope.albums = dataFromApi.data.items;
				})
		}
		$scope.getTracks = function() {
			dataTracks.getTracks($scope.selectAlbums)
				.then(function( dataFromApi ) {
					$scope.tracks = dataFromApi.data.items;
				})
		}
	})