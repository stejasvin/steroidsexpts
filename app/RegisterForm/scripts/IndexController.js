steroids.logger.log("Inside registerForm indexController");
	var regForm = angular.module('RegisterForm');


  	regForm.controller('IndexController', function($scope, supersonic) {
    // Controller functionality here
    //$scope.user1 = new Apple('Gen');
    
    steroids.logger.log("Inside controller");

    $scope.takePic = function(){
		navigator.camera.getPicture($scope.onSuccess, onFail, { quality: 50,
		destinationType: Camera.DestinationType.FILE_URI });
		steroids.logger.log("Inside takePic");
	}

	$scope.onSuccess = function(imageURI) {
    	// var image = document.getElementById('myImage');
    	// image.src = imageURI;
    	alert('success' + imageURI);
    	steroids.logger.log("Inside success ");
    	steroids.logger.log(imageURI);
	}

	function onFail(message) {
    	alert('Failed because: ' + message);
    	steroids.logger.log("Inside success "+imageURI);
	}

});


 //    var downloadedImage = new steroids.File("image.png");
	// downloadedImage.resizeImage({
	//   format: {
	//     type: "jpg",
	//     compression: 80
	//   },
	//   constraint: {
	//     dimension: "width",
	//     length: "150"
	//   }
	// }, {
	//   onSuccess: function() {
	//     alert("resized successfully");
	//   },
	//   onFailure: function() {
	//     alert("resize failed");
	//   }
	// });

 //    function onInitFs(fs) {
 //  		steroids.logger.log('Opened file system: ' + fs.name);
	// }

	// window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onInitFs, errorHandler);

	// function errorHandler(e) {
	//   var msg = '';

	//   switch (e.code) {
	//     case FileError.QUOTA_EXCEEDED_ERR:
	//       msg = 'QUOTA_EXCEEDED_ERR';
	//       break;
	//     case FileError.NOT_FOUND_ERR:
	//       msg = 'NOT_FOUND_ERR';
	//       break;
	//     case FileError.SECURITY_ERR:
	//       msg = 'SECURITY_ERR';
	//       break;
	//     case FileError.INVALID_MODIFICATION_ERR:
	//       msg = 'INVALID_MODIFICATION_ERR';
	//       break;
	//     case FileError.INVALID_STATE_ERR:
	//       msg = 'INVALID_STATE_ERR';
	//       break;
	//     default:
	//       msg = 'Unknown Error';
	//       break;
	//   };

	//   console.log('Error: ' + msg);
	// }

 //    $scope.Apple = function(type) {
 //    this.type = type;
 //    this.color = "red";    
 //    this.getFullName = function(){
 //    	return this.type + "!" + this.color;
 //    }
	// }

 //    var apple1 = new $scope.Apple('gen');
 //    $scope.name1 = apple1.getFullName();
 //    steroids.logger.log(apple1.type);
 //    steroids.logger.log(apple1.getFullName());

 //    onInitFs = function(fs) {
 //      steroids.logger.log("Inside onInitFs");

	//   fs.root.getFile(cordova.file.externalDataDirectory+'/logsteroids.txt', {create: true}, function(fileEntry) {

	//     // Create a FileWriter object for our FileEntry (log.txt).
	//     fileEntry.createWriter(function(fileWriter) {

	//       fileWriter.onwriteend = function(e) {
	//         console.log('Write completed.');
	//       };

	//       fileWriter.onerror = function(e) {
	//         console.log('Write failed: ' + e.toString());
	//       };

	//       // Create a new Blob and write it to log.txt.
	//       var blob = new Blob(['Lorem Ipsum'], {type: 'text/plain'});

	//       fileWriter.write(blob);

	//     }, errorHandler);

	//   }, errorHandler);

	// }

	// $scope.writeData = function(){
	// 	steroids.logger.log("Inside writeData");
	// 	window.requestFileSystem(window.PERSISTENT, 0, onInitFs, errorHandler);
	// }


