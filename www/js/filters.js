angular.module('app.filters', [])

.filter('peso', [function(){
  return function (item) {
      return '₱ ' + item;
  };
}]);
