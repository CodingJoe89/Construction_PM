angular.module("app").controller("AdminProjectTasksController", function($location, taskFactory){
  var self = this;
  self.errorFlag = false;
  self.error = "";
  self.projects = [];
  //we will want to pull the project from the DB using a factory - this is placeholder data for the moment
  // self.project = {
    // name: "Test Project",
    // tasks: [
    //   {name: "Task 1",
    //   startDate: "Jan 1",
    //   endDate: "Jan 30",
    //   description: "Task 1 Description goes here..."},
    //   {
    //     name: "Task 2",
    //     startDate: "Jan 1",
    //     endDate: "Jan 30",
    //     description: "Task 2 Description goes here..."
    //   }]
    // };

  //this will use a factory to reach our back-end and populate our project data
  function getProjectData(returnedData){
    self.projects = returnedData;
  };
  getProjects();
  function getProjects(){
    taskFactory.getProjects(function(data){
      self.projects = data;
    });
  }

  function createError(error){
    self.errorFlag = true;
    self.error = error;
  };

  // need factory methods
  self.createTask = function(){
    // console.log(self.project_name.project_id);
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
      projects_project_id: self.project_name.project_id,
      start_date: self.newTaskStart,
      end_date: self.newTaskEnd,
      estimated_time: ""
    };
    self.errorFlag = false;
    self.error = "";
    taskFactory.addTask(newTask, function(returnedData){
      console.log(returnedData);
    });

  };

});
