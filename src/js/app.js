angular.module('SongSearcher', [
  'ngRoute',
  'mobile-angular-ui',
  'SongSearcher.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});
