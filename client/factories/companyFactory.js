angular.module("app").factory("companyFactory", function($http){
  var factory = {};

  factory.registerCompany = function(newCompany, callback){
    $http.post("/companies", newCompany).then(function(returnedData){
      // expect a new user with password popup (companynameAdmin);
      callback(returnedData.data);
    });
  };

  return factory;
});
