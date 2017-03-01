

//set the module
angular.module('constructionManagementApp', ['ngRoute'])
//set the route provider
angular.module('constructionManagementApp')
    .config(function($routeProvider){
        $routeProvider
            .when('/admin', {
                templateUrl: 'partials/admin.html',
                controller: 'AdminController',
                controllerAs: 'AC'
            })
            .otherwise('/', {
                redirectTo: 'index.html'
            })
    })