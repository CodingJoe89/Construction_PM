angular.module("app", ["ngRoute"]);

angular.module("app").config(function($routeProvider){
  $routeProvider.when("/loginRegister", {
    templateUrl: "partials/loginRegistration.html",
    controller: "LoginRegistrationController",
    controllerAs: "LRC"
  })
  .when("/admin/project/tasks", {
    templateUrl: "partials/adminProjectTasks.html",
    controller: "AdminProjectTasksController",
    controllerAs: "PTC"
  })
  .when("/admin/projects",{
    templateUrl: "partials/adminProjects.html",
    controller: "AdminProjectsController",
    controllerAs: "PC"
  });
  .otherwise('/', {
    redirectTo: '/'
  })
});
