angular
  .module('geolocation')
  .controller('IndexController', function($scope, supersonic) {
    // Controller functionality here
    $scope.position = undefined;

	$scope.getPosition = function() {
	steroids.logger.log("Location requested")
  	supersonic.device.geolocation.getPosition().then( function(position){
    	$scope.position = position;
  		});
	};
});
