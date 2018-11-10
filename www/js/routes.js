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
    controller: 'packagesCtrl'
  })

  .state('homePage', {
    url: '/page7',
    templateUrl: 'templates/homePage.html',
    controller: 'homePageCtrl'
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

  .state('page', {
    url: '/page11',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('login', {
    url: '/loginpage',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/loginpage')


});