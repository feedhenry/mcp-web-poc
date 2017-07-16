'use strict';

// Declare app level module which depends on views, and components
angular.module('mcpWebPoc', [
  'ngRoute',
  'mcpWebPoc.services',
  'mcpWebPoc.version',
  'openshiftCommonServices'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);
  
  $routeProvider
    .when('/services', {
      templateUrl: 'views/services/services.html',
      controller: 'ServicesController'
    })
    .when('/oauth', {
      templateUrl: 'views/oauth/oauth.html',
      controller: 'OAuthController'
    })
    .otherwise({redirectTo: '/services'});
}]);

hawtioPluginLoader.addModule('mcpWebPoc');
