angular.module("app").factory("taskFactory", function($http){
  var factory = {};

  factory.getProjects = function(callback){
    $http.get("/projects").then(function(returnedData){
      factory.projects = returnedData;
      callback(returnedData.data);
    });
  }
  factory.addTask = function(newTask, callback){
    $http.post("/task", newTask).then(function(returnedData){
      // expect a new task;
      callback(returnedData.data);
    });
  };

  return factory;
});
