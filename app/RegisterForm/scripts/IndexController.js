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
        // steroids.logger.log("Inside dr");
    }, false);

    // // Cordova is ready
    // //
    // function onDeviceReady() {
    //     window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, $scope.fail);
    //     steroids.logger.log("Inside dr");
    // }

    function gotFS(fileSystem) {
        fileSystem.root.getFile("readme4.txt", {create: true, exclusive: false},
             function(fileEntry) {
                //alert("1 "+fileEntry.fullpath);
                fileEntry.file(
                    function(file) {
                        //alert("2");
                        var reader = new FileReader();
                        // reader.onloadstart = function(evt) {
                        //     alert("Read start ");
                        // };

                        reader.onloadend = function(evt) {
                            alert("Read success "+reader.result);
                        };
                        reader.readAsText(file);
                    }
                    );
             }
            , $scope.fail);



//Writing working

 //        fileSystem.root.getFile("readme5.txt", {create: true}, 
 //        	function(fileEntry) {
	// 	        fileEntry.createWriter(function(writer) {
	// 				writer.onwriteend = function(evt) {
	//                     alert("write success");
	//                 };
	// 	        	writer.write("some sample text");
		    	
	// 	    	}
	//     	, $scope.fail);
	//         //alert("Inside fe");
	//     }
	// , $scope.fail);
        
        //alert("Inside fs");
    }

    // function gotFS(fileSystem) {
    //     fileSystem.root.getFile("readme.txt", null, gotFileEntry, fail);
    // }

    // function gotFileEntry(fileEntry) {
    //     fileEntry.file(gotFile, fail);
    // }

    // function gotFile(file){
    //     readDataUrl(file);
    //     readAsText(file);
    // }

    // function readDataUrl(file) {
    //     var reader = new FileReader();
    //     reader.onloadend = function(evt) {
    //         console.log("Read as data URL");
    //         console.log(evt.target.result);
    //     };
    //     reader.readAsDataURL(file);
    // }

    // function readAsText(file) {
    //     var reader = new FileReader();
    //     reader.onloadend = function(evt) {
    //         console.log("Read as text");
    //         console.log(evt.target.result);
    //     };
    //     reader.readAsText(file);
    // }

   
    $scope.fail = function(error) {
        alert(error.code);
    }
   
});




