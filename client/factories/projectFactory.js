angular.module("app").factory("projectFactory", function($http){
  var factory = {};
  factory.createProject = function(newProject, callback){
    $http.post("/projects", newProject).then(function(returnedData){
      callback(returnedData.data);
    });
  }
  return factory;
});
