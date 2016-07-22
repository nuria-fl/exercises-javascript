angular.module('myAppConfig', [])
	.config(function( $routeProvider ){
		$routeProvider
			.when('/',{
				templateUrl: '/templates/home.html',
				controller: 'HomeController'
			})
			.when('/about',{
				templateUrl: '/templates/about.html',
				controller: 'AboutController'
			})
			.when('/contact',{
				templateUrl: '/templates/contact.html',
				controller: 'ContactController'
			})
			.when('/clients',{
				templateUrl: '/templates/clients.html',
				controller: 'ClientsController'
			})
			.when('/client/:CLIENT',{
				templateUrl: '/templates/clientDetail.html',
				controller: 'ClientDetailController'
			})
			.otherwise({ redirectTo: '/' }); ;
	})