angular.module('spotifyServices',[])
	.factory('dataArtists', function($http){
		return {
			getArtists: function(searchVal){
				return $http.get('https://api.spotify.com/v1/search?type=artist&query='+searchVal)	
			}
		}
	})
	.factory('dataAlbums', function($http){
		return {
			getAlbums: function(searchVal){
				return $http.get('https://api.spotify.com/v1/artists/' + searchVal + '/albums?market=ES')	
			}
		}
	})
	.factory('dataTracks', function($http){
		return {
			getTracks: function(searchVal){
				return $http.get('https://api.spotify.com/v1/albums/' + searchVal + '/tracks')	
			}
		}
	})