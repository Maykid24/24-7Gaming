myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
      when('/about', {
        templateUrl: "/views/routes/about.html",
        controller: "aboutController"
      }).
      when('/eve',{
        templateUrl: "/views/routes/eve.html",
        controller: "eveController"
      }).
      when('/reviews', {
        templateUrl: "/views/routes/reviews.html",
        controller: "reviewsController"
      }).
      when('/character', {
        templateUrl: "/views/routes/character.html",
        controller: "characterController"
      }).
      otherwise({
        redirectTo: "reviews"
      });
}]);//end of myApp config function

myApp.controller('eveController', ['$scope', '$http', function ($scope, $http) {
  console.log('EvEEEEEEE');

}]);//End of eveController

myApp.controller('characterController', ['$scope', '$http', function($scope, $http){
  console.log('Character killing is fun...');
}]);//End of characterController

myApp.controller('aboutController', ['$scope', '$http', function ($scope, $http){
  console.log('About.....');
}]);//End of aboutController

myApp.controller('reviewsController', ['$scope', '$http', function($scope, $http){
  console.log('Reviews...');
}]);//End of reviewsController
