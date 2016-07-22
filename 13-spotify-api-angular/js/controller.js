angular.module("spotifyController", ["spotifyServices"])
	.controller("mainController", function($scope, dataArtists) {
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
	// .controller("artistsController", function($scope, dataArtists) {

	// })
	.controller("artistsController", function($scope, dataAlbums) {
		$scope.getAlbums = function() {
			dataAlbums.getAlbums($scope.selectArtists)
				.then(function( dataFromApi ) {
					$scope.$parent.albums = dataFromApi.data.items;
				})
		}
	})
	.controller("albumsController", function($scope, dataTracks) {
		$scope.getTracks = function() {
			dataTracks.getTracks($scope.selectAlbums)
				.then(function( dataFromApi ) {
					$scope.$parent.tracks = dataFromApi.data.items;

				})

		}
	})
	// $rootScope.$broadcast(eventName, data)
	// $scope.$on(eventName, function(event, data){})