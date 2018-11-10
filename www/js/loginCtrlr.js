angular.module('app.controllers', ['firebase'])

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

      if (success && user.type === USER_TYPE.CUSTOMER) {
        $state.go('homePage');
      }

      if (success && user.type === USER_TYPE.ADMIN) {
        $state.go('adminHome');
      }

      if (success && user.type === USER_TYPE.ASSOC) {
        // todo: redirect to assoc homepage
        // $state.go('homePage');
      }
    });
  }

}])
