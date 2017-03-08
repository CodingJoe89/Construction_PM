angular.module("app").controller("ProjectController", function($location){
  var self = this;
  self.errorFlag = false;
  self.error = "";
  // need to hook this up to a factory method to call our back-end
  self.createTask = function(){
    if(!self.newTaskName){
      self.errorFlag = true;
      self.error = "Missing Task Name";
      return;
    }
    if(!self.newTaskEmployee){
      self.errorFlag = true;
      self.error = "Missing Employee";
      return;
    }
    if(!self.newTaskStartDate){
      self.errorFlag = true;
      self.error = "Missing Start Date";
      return;
    }
    if(!self.newTaskEndDate){
      self.errorFlag = true;
      self.error = "Missing End Date";
      return;
    }
    if(self.newTaskStartDate > self.newTaskEndDate){
      self.errorFlag = true;
      self.error = "Start Date must precede End Date";
      return;
    }
    self.errorFlag = false;
    self.error = "";
    var newTask = {
      name: self.newTaskName,
      employee: self.newTaskEmployee,
      startDate: self.newTaskStartDate,
      endDate: self.newTaskEndDate
    };
    console.log(newTask);
  };

  // Populate all required information from the back end via the factory
  function populateInfo(){
    // Get all companies in project
    // Get all tasks in project
  };
});
