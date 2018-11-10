angular.module('app.controllers', ['firebase'])
  
.controller('assocHomePageCtrlr', ['$scope', '$stateParams', '$state',
function ($scope, $stateParams, $state) {
  $scope.onViewBiddables = function () {
  firebase.database().ref('/bookings').once('value').then(function(snapshot) {
    var biddables = snapshot.val();
    $scope.biddables = biddables.filter(function (biddable) {
        return biddable.status === 'paid';
    });

    $state.go('biddableItems');
    // return statusPaidOnly;
  });
}
}])
