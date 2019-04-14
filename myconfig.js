var app = angular.module('myApp', ['ui.router']);

	app.config(['$stateProvider', function($stateProvider){
		$stateProvider.state('firstMessage', {
			url: '/first-msg',
			templateUrl: 'fil1.html'
		}).state('secondMessage', {
			url: '/second-msg',
			templateUrl: 'fil2.html'
		});
	}]);