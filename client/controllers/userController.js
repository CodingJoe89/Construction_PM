angular.module("app").controller("UserController", function($location){
  var self = this;

  // Dummy User Data - this should be pulled in via the factory from the back-end
  self.projects = [
    {
      name: "Amazon",
      location: "Seattle, WA",
      tasks: [{name: "Task 1",
      startDate: "Jan 1",
      endDate: "Jan 30",
      description: "Task 1 Description goes here..."},
      {
        name: "Task 2",
        startDate: "Jan 1",
        endDate: "Jan 30",
        description: "Task 2 Description goes here..."
      }]
    },{
      name: "Facebook",
      location: "Menlo Park, CA",
      tasks: [
        {name: "Task 3",
        startDate: "Jan 1",
        endDate: "Jan 30",
        description: "Task 1 Description goes here..."},
        {
          name: "Task 4",
          startDate: "Jan 1",
          endDate: "Jan 30",
          description: "Task 2 Description goes here..."
        }
      ]
    },{
      name: "Google",
      location: "Mountain View, CA",
      tasks: [
        {name: "Task 5",
        startDate: "Jan 1",
        endDate: "Jan 30",
        description: "Task 1 Description goes here..."},
        {
          name: "Task 6",
          startDate: "Jan 1",
          endDate: "Jan 30",
          description: "Task 2 Description goes here..."
        }
      ]
    },{
      name: "Apple",
      location: "Cupertino, CA",
      tasks: [
        {name: "Task 7",
        startDate: "Jan 1",
        endDate: "Jan 30",
        description: "Task 1 Description goes here..."},
        {
          name: "Task 8",
          startDate: "Jan 1",
          endDate: "Jan 30",
          description: "Task 2 Description goes here..."
        }
      ]
    }
  ];
  self.activeProject = self.projects[0];
  self.firstName = "John";
  self.lastName = "Doe";
  self.specialty = "Carpentry";
  self.company = "XY Construction";

// We will use this function to populate the data upon pageload.
  // getUserInfo = function(){
  //   factory.GetUserInfo(function(returnedData){
  //   self.firstName = returnedData.firstName;
  //   self.lastName = returnedData.lastName;
  //   self.specialty = returnedData.specialty;
  //   self.company = returnedData.company;
  //   }
  // };

  // getUserInfo();

  self.goToProjectWall = function(project){
    // needs to call a factory method to get data and set it in the factory
    // and then go to the project wall
    $location.url("/project");
  }

  self.taskListUpdate = function(projectName){
    self.activeProject = self.projects.find(function(project){
      return project.name == projectName;
    });
  }
});
