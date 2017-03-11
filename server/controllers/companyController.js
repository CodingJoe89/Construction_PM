
function CompanyController(){

  // this.index = function(req,res){
  //
  // }
  this.create = function(req,res){
    // need to figure out how to add a company to our db using our process.connection - the sql db
    var date = new Date();
    process.connection.query('INSERT INTO `companies` (`company_name`, `updated_at`) VALUES (?,?)', [req.body.name, date], function(error, companyResults, fields){
      if(error) res.json(error);
      else{
        var companyId = companyResults.insertId;
        var specialtyQueryLength = '';
        for(var i = 0; i < req.body.specialty.length-1; i++){
          specialtyQueryLength += '?,';
        }
        specialtyQueryLength +='?';
        var specialties = [];
        process.connection.query('SELECT `specialty_id` FROM `specialty` WHERE `specialty_name` IN('+specialtyQueryLength+')', req.body.specialty, function(error, specialtyResults, fields){
          console.log(error);
          console.log(specialtyResults);
          console.log(fields);
          // process.connection.query('INSERT INTO `companies_has_specialty`')
          var newUser = {
            first_name: req.body.name + 'Admin',
            last_name: req.body.name,
            profile: 'Admin user for company: ' + req.body.name,
            updated_at: date
          };
          process.connection.query('INSERT INTO `users` (`first_name`, `last_name`, `profile`, `updated_at`) VALUES (?,?,?,?)', [newUser.first_name, newUser.last_name, newUser.profile, newUser.updated_at], function(error, UserResults, fields){
            if(error) res.json(error)
            else{
              var userId = UserResults.insertId;
              process.connection.query('INSERT INTO `users_has_companies` (`users_user_id`, `companies_company_id`) VALUES (?,?)', [userId, companyId], function(error, results, fields){
                res.json(newUser);
              });
            }
          });
        });
      }
    });
  };
  // this.destroy = function(req,res){
  //
  // }

  // function openConnection(){
  //
  // }
  // function closeConnection(){
  //
  // }
}

module.exports = new CompanyController();
