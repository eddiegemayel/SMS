//create application variable
var app = angular.module('myApp', ['firebase','ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/', {
			controller: "home",
			templateUrl: "views/home.html"
		}).
		when('/event', {
			controller: "eventController",
			templateUrl : 'views/event.html'
		});
}]);

app.controller('home', ['$scope', '$firebase', function($scope, $firebase){
	console.log("goodbye");
}]);

app.controller('eventController', ['$scope', '$firebase', function($scope, $firebase){
	console.log("hello");
}]);