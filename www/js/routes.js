angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('packages', {
    url: '/page3',
    templateUrl: 'templates/packages.html',
    controller: 'packageCtrlr'
  })

  .state('homePage', {
    url: '/page7',
    templateUrl: 'templates/homePage.html',
    controller: 'homePageCtrl'
  })

  .state('assocHomePage', {
    url: '/page18',
    templateUrl: 'templates/assocHomePage.html',
    controller: 'assocHomePageCtrl'
  })

  .state('adminHome', {
    url: '/page12',
    templateUrl: 'templates/adminHome.html',
    controller: 'adminHomeCtrl'
  })

  .state('requestBooking', {
    url: '/page8',
    templateUrl: 'templates/requestBooking.html',
    controller: 'requestBookingCtrl'
  })

  .state('packageDetails', {
    url: '/page9',
    templateUrl: 'templates/packageDetails.html',
    controller: 'packageDetailsCtrl'
  })

  .state('cart', {
    url: '/page10',
    templateUrl: 'templates/cart.html',
    controller: 'cartCtrl'
  })

  .state('success', {
    url: '/page11',
    templateUrl: 'templates/success.html',
    controller: 'successCtrl'
  })

  .state('adminPackages', {
    url: '/page13',
    templateUrl: 'templates/adminPackages.html',
    controller: 'adminPackagesCtrl'
  })

  .state('pDPCRUD', {
    url: '/page14',
    templateUrl: 'templates/pDPCRUD.html',
    controller: 'pDPCRUDCtrl'
  })

  .state('bookingsDetailPage', {
    url: '/page15',
    templateUrl: 'templates/bookingsDetailPage.html',
    controller: 'bookingsDetailPageCtrl'
  })

  .state('setBidding', {
    url: '/page16',
    templateUrl: 'templates/setBidding.html',
    controller: 'setBiddingCtrl'
  })

  .state('biddableItems', {
    url: '/page19',
    templateUrl: 'templates/biddableItems.html',
    controller: 'biddableItemsCtrl'
  })

  .state('biddableDetailPage', {
    url: '/page20',
    templateUrl: 'templates/biddableDetailPage.html',
    controller: 'biddableDetailPageCtrl'
  })

  .state('placeBid', {
    url: '/page17',
    templateUrl: 'templates/placeBid.html',
    controller: 'placeBidCtrl'
  })

  .state('page', {
    url: '/page21',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/page3')

});
