//instantiate application
var demoApp = angular.module('demoApp', ['firebase', 'ngRoute']);

demoApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/', {
			controller: 'DemoControl',
			templateUrl : 'views/home.html'
		}).when('/login',{
			controller: "loginController",
			templateUrl:"views/login.html"
		});	
}]);

demoApp.controller('DemoControl', ['$scope', '$firebase', function($scope, $firebase){

	//store firebase database URL
	var url = "https://demoapplica.firebaseio.com/posts";

	//open connection
	var ref = new Firebase(url);


}]);

demoApp.controller('loginController', ['$scope', "$firebaseAuth", function($scope, $firebaseAuth){
	var url = "https://demoapplica.firebaseio.com";
	var ref = new Firebase(url);

	$scope.authObj = $firebaseAuth(ref);

	$scope.authObj.$onAuth(function(data){
		console.log('data : ', data);
	});


}]);