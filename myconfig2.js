var app = angular.module('myApp', ['ui.router']);

	app.config(['$stateProvider', function($stateProvider){
		$stateProvider.state('secondMessage', {
			url: '/second-msg',
			templateUrl: '<strong>second message!!</strong>'
		});
	}]);	