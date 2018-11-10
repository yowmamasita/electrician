angular.module('app.controllers', [])
  
.controller('packageCtrlr', ['$scope', '$stateParams',
function ($scope, $stateParams) {
	var database = firebase.database();
	var storage = firebase.storage();
	var storageRef = firebase.storage().ref();

	return firebase.database().ref('/packages/').once('value').then(function(snapshot) {
		$scope.records = snapshot.val();
		angular.forEach($scope.records, function(value, key) {
        	var imRef = storageRef.child(value.image);
			imRef.getDownloadURL().then(function(url) {
	  			value.public_image = url;
  			});

		});
	});

}]);
