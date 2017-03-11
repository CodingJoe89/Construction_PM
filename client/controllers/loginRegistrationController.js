angular.module("app").controller("LoginRegistrationController", function($location,LoginRegistrationFactory){
  var self = this;
  self.specialtyOptions = ["Structural", "Mechanical", "Electrical", "Security", "Finishings"];
  self.newCompany = {specialty: []};
  self.loginErrorFlag;
  self.registrationErrorFlag;
  self.companyRegistrationErrorFlag;
  self.error;

  //helper function to reset all error flags
  function resetFlags(){
    self.loginErrorFlag = false;
    self.registrationErrorFlag =  false;
    self.companyRegistrationErrorFlag = false;
  }
  resetFlags();

  // need factory methods
  self.login = function(){
    resetFlags();
    if(self.loginName && self.loginPassword){
      var loginCredentials = {
        name: self.loginName,
        password: self.loginPassword};
        console.log(loginCredentials);
      }
      else{
        self.error = "Login Error";
        self.loginErrorFlag = true;
      }
    };

    //need factory methods
  self.register = function(){
    resetFlags();
    if(self.registrationName && self.registrationPassword &&  self.registrationPassword == self.registrationPasswordConfirm){

       var newUser = {
        first_name: self.registrationName,
        last_name:"dummy data",
        profile:"",
        username:"dummy data",
        email: self.registrationEmail,
        password: self.registrationPassword};

        console.log(newUser);
        //use factory methods to post the newUser to the backend
        LoginRegistrationFactory.addUser(newUser);

      }
      else{
        self.registrationErrorFlag = true;
        self.error = "Registration Error!";
        console.log("Registration Error");
      }
    };

  // need factory methods
  self.addSpecialty = function(specialty){
    if(self.newCompany.specialty.indexOf(specialty) == -1){
      self.newCompany.specialty.push(specialty);
    }
    else{
      self.newCompany.specialty.splice(self.newCompany.specialty.indexOf(specialty), 1);
    }
    console.log(self.newCompany.specialty);
  };

  // need factory methods
  self.registerCompany = function(){
    resetFlags();
    if(self.companyName){
      self.newCompany.name = self.companyName;
      if(typeof(self.specialtyOther) == "string"){
        self.newCompany.specialty.push(self.specialtyOther);
      }
      console.log(self.newCompany);
    }
    else{
      self.companyRegistrationErrorFlag = true;
      self.error = "Company Registration Error";
    }
  };
});
