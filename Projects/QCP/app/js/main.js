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
	//store firebase database URL
	var url = "https://quickclickpicks.firebaseio.com/users";

	//open connection
	var ref = new Firebase(url);

	//passes connection to angular fire
	//you have to specificly tell it is an array, or an object
	$scope.users = $firebase(ref).$asArray();

	

}]);

app.controller('eventController', ['$scope', '$firebase', function($scope, $firebase){
	console.log("hello");
}]);