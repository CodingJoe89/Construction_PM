const myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when('/project',{
                    templateUrl:'project_wall.html',
                    controller:'ProjectController',
                    controllerAs:'PC'
    })

});
/*myApp.controller('ProjectController',function($scope, $window){
$window.location.href ='project_wall.html';
});*/

myApp.controller('ProjectController', function($scope, $location){
    $scope.projectPage ="Project Wall";
    $scope.redirect = function(path) {
    $location.path("/project");
    };
    
});