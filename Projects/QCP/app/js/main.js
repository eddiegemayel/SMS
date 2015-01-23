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

//controller that allows each ng-model to vote
app.controller("vote", ['$scope', "$firebase", function($scope, $firebase){
	//add vote functions
	$scope.voteRed1 = function(){
		var url = "https://quickclickpicks.firebaseio.com/redFight1";
 		//new reference variable, passing url in
 		var ref = new Firebase(url);
 		//connected to database
		$scope.redFight1 = $firebase(ref).$asArray();
		//console log for fun
		console.log("Red corner via " +$scope.red1.result);
		//add pick to database
		$scope.redFight1.$add($scope.red1);
	}
	$scope.voteBlue1 = function(){
		var url = "https://quickclickpicks.firebaseio.com/blueFight1";
 		//new reference variable, passing url in
 		var ref = new Firebase(url);
 		//connected to database
		$scope.blueFight1 = $firebase(ref).$asArray();
		console.log("Blue corner via "+$scope.blue1.result);

		//add pick to database
		$scope.blueFight1.$add($scope.blue1);
	}
	$scope.voteRed2 = function(){
		var url = "https://quickclickpicks.firebaseio.com/redFight2";
 		//new reference variable, passing url in
 		var ref = new Firebase(url);
 		//connected to database
		$scope.redFight2 = $firebase(ref).$asArray();
		//console log for fun
		console.log("Red corner via " +$scope.red2);
		//add pick to database
		$scope.redFight2.$add($scope.red2);
	}
	$scope.voteBlue2 = function(){
		var url = "https://quickclickpicks.firebaseio.com/blueFight2";
 		//new reference variable, passing url in
 		var ref = new Firebase(url);
 		//connected to database
		$scope.blueFight2 = $firebase(ref).$asArray();
		console.log("Blue corner via "+$scope.blue2);
		//add pick to database
		$scope.blueFight2.$add($scope.blue2);
	}

	// $scope.voteFight2 = function(){
	// 	var url = "https://quickclickpicks.firebaseio.com/fight2";

	// 	var ref = new Firebase(url);

	// 	$scope.fight2 = $firebase(ref).$asArray();

	// 	$scope.fight2.$add($sc);
	// }

	$scope.voteRed3 = function(){
		var url = "https://quickclickpicks.firebaseio.com/redFight3";
 		//new reference variable, passing url in
 		var ref = new Firebase(url);
 		//connected to database
		$scope.redFight3 = $firebase(ref).$asArray();
		//console log for fun
		console.log("Red corner via " +$scope.red3);
		//add pick to database
		$scope.redFight3.$add($scope.red3);
	}
	$scope.voteBlue3 = function(){
		var url = "https://quickclickpicks.firebaseio.com/blueFight3";
 		//new reference variable, passing url in
 		var ref = new Firebase(url);
 		//connected to database
		$scope.blueFight3 = $firebase(ref).$asArray();
		console.log("Blue corner via "+$scope.blue3);
		//add pick to database
		$scope.blueFight3.$add($scope.blue3);
	}
	$scope.voteRed4 = function(){
		var url = "https://quickclickpicks.firebaseio.com/redFight4";
 		//new reference variable, passing url in
 		var ref = new Firebase(url);
 		//connected to database
		$scope.redFight4 = $firebase(ref).$asArray();
		//console log for fun
		console.log("Red corner via " +$scope.red4);
		//add pick to database
		$scope.redFight4.$add($scope.red4);
	}
	$scope.voteBlue4 = function(){
		var url = "https://quickclickpicks.firebaseio.com/blueFight4";
 		//new reference variable, passing url in
 		var ref = new Firebase(url);
 		//connected to database
		$scope.blueFight4 = $firebase(ref).$asArray();
		console.log("Blue corner via "+$scope.blue4);
		//add pick to database
		$scope.blueFight4.$add($scope.blue4);
	}
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
    	// console.log('data',data);

    	//if the data exists
    	if(data){
			var url = 'https://quickclickpicks.firebaseio.com/users/'+data.uid;
			var ref = new Firebase(url);

			//put user in object
			$rootScope.user = data;

			// $rootScope.data = data.twitter.username;

			// $rootScope.user.$add($rootScope.data);

			//console logs twitter username
			// console.log("yo",$rootScope.user.twitter.username);
			$rootScope.userloggedin.username = $rootScope.user.twitter.username;
    	}
  	});
}]);

//login controller
app.controller('loginController', ['$rootScope', '$firebase', function ($rootScope,$firebase) {
	//test code

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
	//messages connector
	//store firebase database URL
	var url1 = "https://quickclickpicks.firebaseio.com/messages";
	//open connection
	var ref1 = new Firebase(url1);

	//fight vote connectors
	//each fight vote database connection. so event html ng-repeat can access it
	var url2 = "https://quickclickpicks.firebaseio.com/redFight1";
 	var ref2 = new Firebase(url2);
	$scope.redFight1 = $firebase(ref2).$asArray();
	var url3 = "https://quickclickpicks.firebaseio.com/blueFight1";
 	var ref3 = new Firebase(url3);
	$scope.blueFight1 = $firebase(ref3).$asArray();
	var url4 = "https://quickclickpicks.firebaseio.com/redFight2";
 	var ref4 = new Firebase(url4);
	$scope.redFight2 = $firebase(ref4).$asArray();
	var url5 = "https://quickclickpicks.firebaseio.com/blueFight2";
 	var ref5 = new Firebase(url5);
	$scope.blueFight2 = $firebase(ref5).$asArray();
	var url6 = "https://quickclickpicks.firebaseio.com/redFight3";
 	var ref6 = new Firebase(url6);
	$scope.redFight3 = $firebase(ref6).$asArray();
	var url7 = "https://quickclickpicks.firebaseio.com/blueFight3";
 	var ref7 = new Firebase(url7);
	$scope.blueFight3 = $firebase(ref7).$asArray();
	var url8 = "https://quickclickpicks.firebaseio.com/redFight4";
 	var ref8 = new Firebase(url8);
	$scope.redFight4 = $firebase(ref8).$asArray();
	var url9 = "https://quickclickpicks.firebaseio.com/blueFight4";
 	var ref9 = new Firebase(url9);
	$scope.blueFight4 = $firebase(ref9).$asArray();


	//passes connection to angular fire
	//you have to specificly tell it is an array, or an object
	$scope.messages = $firebase(ref1).$asArray();

	//send message function in chatroom
	$scope.sendMessage = function(){

		//as long as twitter username is defined
		if($scope.user.twitter.username && $scope.user.twitter.username != " " || $scope.user.twitter.username != undefined){
			//signed author in chatroom as twitter username
			$scope.newMessage.author = "@"+ $scope.user.twitter.username;
			//add function
			$scope.messages.$add($scope.newMessage);
		}else{
			//otherwise make them guest
			$scope.newMessage.author = "Guest";
			//add function
			$scope.messages.$add($scope.newMessage);
		}

		//empty message inputs
		$scope.newMessage = {};
	}

}]);