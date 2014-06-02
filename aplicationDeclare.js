var ZombieApp = angular.module("ZombieApp",["ngRoute","ngSanitize","ngAnimate"]);

ZombieApp.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider) {
   
    $routeProvider.
      when('/', {
			templateUrl: 'templates/list.html'
      }).
      when('/show/:zombieId', {
			templateUrl: 'templates/zobieDetails.html',
			controller: 'ZombieController'
      }).
      otherwise({
			redirectTo: '/'
      });
      
//      $locationProvider.html5Mode(true);
}]);