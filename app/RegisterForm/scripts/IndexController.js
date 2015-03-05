steroids.logger.log("Inside registerForm indexController");
var regForm = angular.module('RegisterForm');


  regForm.controller('IndexController', function($scope, supersonic) {
    // Controller functionality here
    //$scope.user1 = new Apple('Gen');
    
    steroids.logger.log("Inside controller");

    $scope.Apple = function(type) {
    this.type = type;
    this.color = "red";    
    this.getFullName = function(){
    	return this.type + "!" + this.color;
    }
	}

    var apple1 = new $scope.Apple('gen');
    $scope.name1 = apple1.getFullName();
    steroids.logger.log(apple1.type);
    steroids.logger.log(apple1.getFullName());

  });

