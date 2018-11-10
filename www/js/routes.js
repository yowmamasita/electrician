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
    controller: 'homePageCtrlr'
  })

  .state('assocHomePage', {
    url: '/page18',
    templateUrl: 'templates/assocHomePage.html',
    controller: 'assocHomePageCtrlr'
  })

  .state('adminHome', {
    url: '/page12',
    templateUrl: 'templates/adminHome.html',
    controller: 'adminHomeCtrlr'
  })

  .state('requestBooking', {
    url: '/page8',
    templateUrl: 'templates/requestBooking.html',
    controller: 'requestBookingCtrlr'
  })

  .state('packageDetails', {
    url: '/page9',
    templateUrl: 'templates/packageDetails.html',
    controller: 'packageDetailsCtrlr'
  })

  .state('cart', {
    url: '/page10',
    templateUrl: 'templates/cart.html',
    controller: 'cartCtrlr'
  })

  .state('success', {
    url: '/page11',
    templateUrl: 'templates/success.html',
    controller: 'successCtrlr'
  })

  .state('adminPackages', {
    url: '/page13',
    templateUrl: 'templates/adminPackages.html',
    controller: 'adminPackagesCtrlr'
  })

  .state('pDPCRUD', {
    url: '/page14',
    templateUrl: 'templates/pDPCRUD.html',
    controller: 'pDPCRUDCtrlr'
  })

  .state('bookingsDetailPage', {
    url: '/page15',
    templateUrl: 'templates/bookingsDetailPage.html',
    controller: 'bookingsDetailPageCtrlr'
  })

  .state('setBidding', {
    url: '/page16',
    templateUrl: 'templates/setBidding.html',
    controller: 'setBiddingCtrlr'
  })

  .state('biddableItems', {
    url: '/page19',
    templateUrl: 'templates/biddableItems.html',
    controller: 'biddableItemsCtrlr'
  })

  .state('biddableDetailPage', {
    url: '/page20',
    templateUrl: 'templates/biddableDetailPage.html',
    controller: 'biddableDetailPageCtrlr'
  })

  .state('placeBid', {
    url: '/page17',
    templateUrl: 'templates/placeBid.html',
    controller: 'placeBidCtrlr'
  })

  .state('page', {
    url: '/page21',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrlr'
  })

$urlRouterProvider.otherwise('/page3')


});