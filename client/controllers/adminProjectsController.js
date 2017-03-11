angular.module("app").controller("AdminProjectsController", function($location, projectFactory){
  var self = this;
  self.errorFlag = false;
  self.error = "";
  self.successFlag = false;
  //dummy projects data
  self.projects = [
    {
      name: "Project 1",
      location: "Location 1",
      description: "Description 1"
    },
    {
      name: "Project 2",
      location: "Location 2",
      description: "Description 2"
    }
  ];
  //This will use a factory method to reach our back-end and populate the projects
  function getProjects(){

  };

  function createError(error){
    self.errorFlag = true;
    self.error = error;
  };

  //need factory methods
  self.createProject = function(){
    if(!self.newProjectName){
      createError("Missing project name!");
      return;
    }
    if(!self.newProjectLocation){
      createError("Missing project location!");
      return;
    }
    if(!self.newProjectDescription){
      createError("Missing project description!");
      return;
    }
    var newProject = {
      name: self.newProjectName,
      location: self.newProjectLocation,
      description: self.newProjectDescription
    };
    self.errorFlag = false;
    self.error = "";
    projectFactory.createProject(newProject, function(returnedData){
      console.log(returnedData);
      if(returnedData.status == "success"){
        self.successFlag = true;
        self.responseProjectName = returnedData.data.projectName;
        self.newProjectName = "";
        self.newProjectLocation = "";
        self.newProjectDescription = "";
      }
      else{
        alert("Project Creation Error!");
      }
    });
  };

});
