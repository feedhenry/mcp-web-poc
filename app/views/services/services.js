'use strict';

angular.module('myApp.services', ['ngRoute'])

.controller('ServicesController', ['$scope', 'ProjectsService', 'DataService', function($scope, ProjectsService, DataService) {
  $scope.services = [];

    var watches = [];

    ProjectsService
      .get('myproject')
      .then(_.spread(function(project, context) {
        $scope.project = project;
         watches.push(DataService.watch("services", context, function(services) {
           $scope.services = services.by("metadata.name");
        }));
      }));


  $scope.$on('$destroy', function(){
    DataService.unwatchAll(watches);
  });

}]);