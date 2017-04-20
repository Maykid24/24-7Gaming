myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
      when('/about', {
        templateUrl: "views/routes/about.html",
        controller: "aboutController"
      }).
      when('/eve',{
        templateUrl: "views/routes/eve.html",
        controller: "eveController"
      }).
      when('/reviews', {
        templateUrl: "views/routes/reviews.html",
        controller: "reviewsController"
      }).
      otherwise({
        redirectTo: "reviews"
      });
}]);//end of myApp config function

myApp.controller('eveController', ['$scope', '$http', function ($scope, $http) {
  console.log('EvEEEEEEE');

}]);//End of controller

myApp.controller('aboutController', ['$scope', '$http', function ($scope, $http){
  console.log('About.....');
}]);

myApp.controller('reviewsController', ['$scope', '$http', function($scope, $http){
  console.log('Reviews...');
}]);
