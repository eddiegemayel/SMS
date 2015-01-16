//create application variable
var app = angular.module('myApp', ['firebase','ngRoute']);

//route configuration
app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/', {
			controller: "home",
			templateUrl: "views/home.html"
		}).
		when('/event', {
			controller: "eventController",
			templateUrl : 'views/event.html'
		}).
		when('/about', {
			controller:"aboutController",
			templateUrl:"views/about.html"
		}).
		when('/login', {
			controller:"loginController",
			templateUrl : "views/login.html"
		});
}]);


//TWITTER LOGIN FUNCTION
//not sure why it is app.run
//but you have to pass in firebaseauth, firebase, and rootscope to this twitter login function
app.run(['$rootScope', '$firebase', '$firebaseAuth', function ($rootScope, $firebase, $firebaseAuth) {
	//store URL in variable
 	var url = "https://quickclickpicks.firebaseio.com";
 	//new reference variable, passing url in
 	var ref = new Firebase(url);

 	//new auth object created with reference
 	$rootScope.authObj = $firebaseAuth(ref);

 	//authentication function
 	$rootScope.authObj.$onAuth(function(data){

 		//console log login data
    	console.log('data',data);

    	//if the data exists
    	if(data){
			var url = 'https://quickclickpicks.firebaseio.com/users/'+data.uid;
			var ref = new Firebase(url);

			//put user in object
			$rootScope.user = $firebase(ref).$asObject();

			//console logs twitter username
			// console.log(data.twitter.username);
    	}
  	});
}]);

//login controller
app.controller('loginController', ['$scope', '$firebaseAuth', function ($scope,$firebaseAuth) {
	//empty login controller
}]);

//home index controller
app.controller('home', ['$scope', '$firebase', function($scope, $firebase){
	//store firebase database URL
	var url = "https://quickclickpicks.firebaseio.com/users";

	//open connection
	var ref = new Firebase(url);

	//passes connection to angular fire
	//you have to specificly tell it is an array, or an object
	$scope.users = $firebase(ref).$asArray();

}]);

//event page controller
app.controller('eventController', ['$scope', '$firebase', function($scope, $firebase){

	//store firebase database URL
	var url = "https://quickclickpicks.firebaseio.com/messages";

	//open connection
	var ref = new Firebase(url);

	//passes connection to angular fire
	//you have to specificly tell it is an array, or an object
	$scope.messages = $firebase(ref).$asArray();

	//send message function in chatroom
	$scope.sendMessage = function(){
		//add function
		$scope.messages.$add($scope.newMessage);
		//empty message inputs
		$scope.newMessage = {};
	}

}]);