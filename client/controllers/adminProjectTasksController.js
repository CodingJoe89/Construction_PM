angular.module("app").controller("AdminProjectTasksController", function($location){
  var self = this;
  self.errorFlag = false;
  self.error = "";
  //we will want to pull the project from the DB using a factory - this is placeholder data for the moment
  self.project = {
    name: "Test Project",
    tasks: [
      {name: "Task 1",
      startDate: "Jan 1",
      endDate: "Jan 30",
      description: "Task 1 Description goes here..."},
      {
        name: "Task 2",
        startDate: "Jan 1",
        endDate: "Jan 30",
        description: "Task 2 Description goes here..."
      }]
    };

  //this will use a factory to reach our back-end and populate our project data
  function getProjectData(){

  };

  function createError(error){
    self.errorFlag = true;
    self.error = error;
  };

  // need factory methods
  self.createTask = function(){
    if(!self.newTaskName){
      createError("Missing task name!");
      return;
    }
    if(!self.newTaskStart || !self.newTaskStart){
      createError("Missing date information!");
      return;
    }
    if(self.newTaskStart > self.newTaskEnd){
      createError("Start date must occur before end date!");
      return;
    }
    if(!self.newTaskDescription){
      createError("Description required");
      return;
    }
    var newTask = {
      task_name: self.newTaskName,
      task_description: self.newTaskDescription,
      start_date: self.newTaskStart,
      end_date: self.newTaskEnd
    };
    self.errorFlag = false;
    self.error = "";
    console.log(newTask);
  };

});
