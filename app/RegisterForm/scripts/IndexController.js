steroids.logger.log("Inside registerForm indexController");
	var regForm = angular.module('RegisterForm');


  	regForm.controller('IndexController', function($scope, supersonic) {
    // Controller functionality here
    //$scope.user1 = new Apple('Gen');
    
    steroids.logger.log("Inside controller");

// Wait for Cordova to load
    //
    document.addEventListener("deviceready", function() {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, $scope.fail);
        steroids.logger.log("Inside dr");
    }, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, $scope.fail);
        //steroids.logger.log("Inside dr");
    }

    function gotFS(fileSystem) {
        fileSystem.root.getFile("readme5.txt", {create: true}, 
        	function(fileEntry) {
		        fileEntry.createWriter(function(writer) {
					//alert("Inside write")
		        	// writer.onwriteend = function(evt) {
		         //    //console.log("contents of file now 'some sample text'");
			        //     writer.truncate(11);  
			        //     writer.onwriteend = function(evt) {
			        //         //console.log("contents of file now 'some sample'");
			        //         writer.seek(4);
			        //         writer.write(" different text");
			        //         writer.onwriteend = function(evt){
			        //             //console.log("contents of file now 'some different text'");
			        //         }
			        //     };
			        // };
			        writer.onwriteend = function(evt) {
	                    alert("write success");
	                };
		        	writer.write("some sample text");
		    	
		    	}
	    	, $scope.fail);
	        //alert("Inside fe");
	    }
	, $scope.fail);
        
        //alert("Inside fs");
    }

    // function gotFileEntry(fileEntry) {
    //     //alert(''+fileEntry.createWriter(gotFileWriter, fail));
    //     alert("Inside fe");
    // }

    $scope.gotFileWriter = function(writer) {
    	alert("Inside write");
        writer.onwriteend = function(evt) {
            console.log("contents of file now 'some sample text'");
            writer.truncate(11);  
            writer.onwriteend = function(evt) {
                console.log("contents of file now 'some sample'");
                writer.seek(4);
                writer.write(" different text");
                writer.onwriteend = function(evt){
                    console.log("contents of file now 'some different text'");
                }
            };
        };
        writer.write("some sample text");
    }

    $scope.fail = function(error) {
        alert(error.code);
    }

    // // function gotFileEntry(fileEntry) {
    // //     fileEntry.createWriter(gotFileWriter, fail);
    // //     alert("fe");
    // // }

    // // function gotFileWriter(writer) {
    // // 	alert("writer");
    // //     writer.onwriteend = function(evt) {
    // //         console.log("contents of file now 'some sample text'");
    // //         writer.truncate(11);
    // //         writer.onwriteend = function(evt) {
    // //             console.log("contents of file now 'some sample'");
    // //             writer.seek(4);
    // //             writer.write(" different text");
    // //             writer.onwriteend = function(evt){
    // //                 console.log("contents of file now 'some different text'");
    // //             }
    // //         };
    // //     };
    // //     writer.write("some sample text");
    // // }

    // function fail(error) {
    //     alert("myerror: "+error.code);
    // }

    // document.addEventListener("deviceready", onDeviceReady, false);

    // // device APIs are available
    // //
    // function onDeviceReady() {
    //     window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
    //     window.resolveLocalFileSystemURL("file:///example.txt", onResolveSuccess, fail);
    //     //steroids.logger.log("1");
    //     alert('deviceready');
    // }

    // function onFileSystemSuccess(fileSystem) {
    //     alert(fileSystem.name);
    //     //steroids.logger.log("2");
    //     //alert(deviceready);
    // }

    // function onResolveSuccess(fileEntry) {
    //     alert(fileEntry.name);
    //     //steroids.logger.log("3");
    // }

    // function fail(evt) {
    //     alert(evt.target.error.code);
    //     //steroids.logger.log("4");
    // }

 //    $scope.takePic = function(){
	// 	navigator.camera.getPicture($scope.onSuccess, onFail, { quality: 50,
	// 	destinationType: Camera.DestinationType.FILE_URI });
	// 	steroids.logger.log("Inside takePic");
	// }

	// $scope.onSuccess = function(imageURI) {
 //    	// var image = document.getElementById('myImage');
 //    	// image.src = imageURI;
 //    	steroids.logger.log("Inside success ");
 //    	steroids.logger.log(imageURI);
 //    	alert('success' + imageURI);
    	
	// }

	// function onFail(message) {
 //    	alert('Failed because: ' + message);
 //    	steroids.logger.log("Inside success "+imageURI);
	// }

});




