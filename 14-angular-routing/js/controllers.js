angular.module('myAppControllers', [])
	.controller('HomeController', function($scope, $rootScope){
		$rootScope.activePage ="home"
		
	})
	.controller('AboutController', function($scope, $rootScope){
		$rootScope.activePage ="about"	
	})
	.controller('ContactController', function($scope, $rootScope){
		$rootScope.activePage ="contact"
	})
	.controller('ClientsController', function($scope, $rootScope, $location){		
		$rootScope.activePage ="clients";
		$scope.goTo = function(){
			$location.path( "/client/"+$scope.searchInput );
		}
	})
	.controller('ClientDetailController', function($scope, $rootScope, $routeParams){
		$rootScope.activePage ="clients";
		$scope.clientName = $routeParams.CLIENT;
	})