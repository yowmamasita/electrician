angular.module('app.controllers', ['firebase'])

.controller('packageCtrlr', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	var database = firebase.database();
	var storage = firebase.storage();
	var storageRef = firebase.storage().ref();


  $scope.increment = function(record) {
    if(record.count == 5) return;
    record.count++;
  };

  $scope.decrement = function(record) {
    if(record.count == 0) return;
    record.count--;
  };


	return firebase.database().ref('/packages/').once('value').then(function(snapshot) {
		$scope.records = snapshot.val();
		angular.forEach($scope.records, function(value, key) {
      var imRef = storageRef.child(value.image);
      imRef.getDownloadURL().then(function(url) {
    		value.public_image = url;
        value.count = 0;
		  });

		});
	});



}])

.controller('homePageCtrlr', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('assocHomePageCtrlr', ['$scope', '$stateParams', '$state',
function ($scope, $stateParams, $state) {
  $scope.onViewBiddables = function () {
  firebase.database().ref('/bookings').once('value').then(function(snapshot) {
    var biddables = snapshot.val();
    var assocBiddables = biddables.filter(function (biddable) {
            return biddable.status === 'paid';
    });
    $state.go('biddableItems', { items: assocBiddables});
  });
}
}])

.controller('adminHomeCtrlr', ['$scope', '$stateParams', '$state' ,
function ($scope, $stateParams, $state) {
  $scope.onClickViewRequests = function () {
    $state.go('adminViewRequests');
  };

  $scope.onClickViewPackages = function () {
    $state.go('adminPackages');
  };
}])

.controller('adminViewRequestsCtrlr', ['$scope', '$stateParams', '$state',
function ($scope, $stateParams, $state) {
  $scope.bookings = [];

  firebase.database().ref('/bookings/').once('value').then(function(snapshot) {
		var items = snapshot.val();
		angular.forEach(items, function (item){

		  var booking = {
		    reference_no: item.reference_no,
        status: item.status,
        customer_id: item.user,
        package_id: item.package
      };

		  firebase.database().ref('/packages/' + item.package).once('value').then(function (snapshot) {
        booking['package'] = snapshot.val();
        firebase.storage().ref().child(snapshot.val().image).getDownloadURL().then(function (url) {
          booking['package']['public_image'] = url;
        });
      });

      firebase.database().ref('/user/' + item.user).once('value').then(function (snapshot) {
        booking['customer'] = snapshot.val();
      });

      $scope.bookings.push(booking);
    })
	});


  $scope.onBookingClick = function (booking) {
    $state.go('bookingsDetailPage', {booking: booking});
  }

}])

.controller('requestBookingCtrlr', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencie as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('packageDetailsCtrlr', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('cartCtrlr', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('successCtrlr', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('adminPackagesCtrlr', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('pDPCRUDCtrlr', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('bookingsDetailPageCtrlr', ['$scope', '$stateParams', '$state',
function ($scope, $stateParams, $state) {
  $scope.booking = $stateParams.booking;

  $scope.statuses = [
    'for inspection',
    'bidding',
    'processing permit',
    'completed'
  ];

  $scope.selectedStatus = {status: null};

  $scope.onUpdateBookingStatus = function () {
    var updateBooking = {
      reference_no: $scope.booking.reference_no,
      package: $scope.booking.package_id,
      user: $scope.booking.customer_id,
      status: $scope.selectedStatus.status
    };

    firebase.database().ref().child("bookings").child($scope.booking.reference_no).update(updateBooking);

    if ($scope.selectedStatus.status === 'bidding') {
      $state.go('setBidding');// todo: pass booking ref_no
    }
  }

}])

.controller('setBiddingCtrlr', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('biddableItemsCtrlr', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
    $scope.items = $stateParams.items;
    angular.forEach($scope.items, function(item) {
        var foundPackage = firebase.database().ref('/packages/' + item.package).once('value').then(function(snapshot) {
            item.package = snapshot.val();
          });
    });
}])

.controller('biddableDetailPageCtrlr', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('placeBidCtrlr', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('pageCtrlr', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrlr', ['$scope', '$stateParams', '$state',
function ($scope, $stateParams, $state) {
  $scope.user = {userId: '', password: ''};
  var USER_TYPE = {
    CUSTOMER: 'customer',
    ADMIN: 'admin',
    ASSOC: 'assoc'
  };

  $scope.onSignIn = function () {
    firebase.database().ref('/user/' + $scope.user.userId).once('value').then(function(snapshot) {
      var user = snapshot.val();
      var success = (user && user.password) && user.password === $scope.user.password;
      console.log(user);
      if (success && user.type === USER_TYPE.CUSTOMER) {
        $state.go('homePage', user);
      }

      if (success && user.type === USER_TYPE.ADMIN) {
        $state.go('adminHome');
      }

      if (success && user.type === USER_TYPE.ASSOC) {
        $state.go('assocHomePage');
      }
    });
  }
}])
