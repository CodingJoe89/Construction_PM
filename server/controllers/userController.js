

function userController(){

    /*
     -------------------Retrieving one User's Data-------------------------
    * Errors:
    * Result not found , Password not found
     */

    this.getUser = function(req,res){

        process.connection.query('SELECT * FROM users WHERE email = ?',req.body.email, function(err, result){
           var errors = {
               id : "",
               message :""
           }
           var stuff;
            if (err) {
                console.log('select * from users error  '+ err);
            } else {
                if(result.length == 0){
                    console.log('get user : no result found');
                  errors.id = 1;
                  errors.message = 'get user : no result found';
                    stuff = [errors];
                   // res.json(errors);

                }
                else if(result[0].password !== req.body.password){
                    console.log('password not a match');
                    errors.id = 2;
                    errors.message = 'password not a match';
                    stuff = [errors];
                }
                else {
                    stuff = result
                }
                console.log(result);

                res.json(stuff);
                console.log('select success');
                }

        });
    }
    /*
    /*
     -------------------Retrieving User Data-------------------------
     */
  this.index = function(req,res){
    process.connection.query('SELECT * FROM users ', function(err, result){
      if (err) {
         console.log('select * from users error  '+ err);
       } else {
         console.log('select success');
       }
    });
  }
    /*
      ---------------Creating User data-------------------------------
     */
  this.create = function(req, res){

      //INSERT STATEMENTS
      var INSERT_INTO_USERS = 'insert into users set ? ';

     //INSERTING VALUES
      try{
          insertIntoDB(INSERT_INTO_USERS, req.body,function(resultSet,errors){
              if(errors != null) {
                  if (errors.Error != null)
                      console.log('INSERT INTO USERS SUCCESSFUL');
              }
         });
      }catch(err){
          console.log('ERROR while inserting into USERS Table'+err)
      }

  }
    /*
    -----------------Assign A Company TO User --------------------------
     */
    this.assignUserToCompany = function(req, res){

        /*var USER_ID_SELECT = 'select user_id AS uniqueID from users  where email = '+req.body.email ;
         var COMPANY_ID_SELECT = 'select company_id AS uniqueID from companies  where companies_name = '+req.body.companyName ;
        var userId,companyId;
        try{
         getIDFromDB(USER_ID_SELECT,function(resultSet){
         userId = resultSet;
         });
         }catch(err){

         }
         try{
         getIDFromDB(COMPANY_ID_SELECT,function(resultSet){
         companyId = resultSet;
         });
         }catch(err){

         }*/
        //STMT
        var INSERT_INTO_USERS_HAS_COMPANIES = 'insert into users_has_companies set ? ';

        //INSERTING VALUES
        try{
            insertIntoDB(INSERT_INTO_USERS_HAS_COMPANIES,{users_user_id: req.body.userId,companies_company_id:req.body.companyId},function(resultSet,errors){
                if(errors != null) {
                    if (errors.Error != null)
                        console.log('INSERT INTO USERS SUCCESSFUL');
                }
            });
        }catch(err){
            console.log('ERROR while inserting into USERS Table'+err)
        }

    }
    /*
    -----------------------Assign a task to user------------------------------
     */
    this.assignUserToTask  = function(req, res){
        //STMT
        var INSERT_INTO_USERS_HAS_TASKS = 'insert into users_has_companies set ? ';

        //INSERTING VALUES
        console.log(req.body.userId);
        try{
            insertIntoDB(INSERT_INTO_USERS_HAS_TASKS,{users_user_id: req.body.userId,tasks_task_id:req.body.taskId},function(resultSet,errors){
                if(errors != null) {
                    if (errors.Error != null)
                        console.log('INSERT INTO USERS SUCCESSFUL');
                }
            });
        }catch(err){
            console.log('ERROR while inserting into USERS Table'+err)
        }
    }
    this.destroy = function(req, res){

    }
    /*
     * Helper function to get ID from tables
     * @ param sqlQuery : query statement to find id from the table.Assumption that the query will return only one row.
     * callback returns the one value of the result set returned from query
     * @throws err : if query unsuccessful
     */
    function getIDFromDB(sqlQuery,callback){
        process.connection.query(sqlQuery, function(err, result){
            if (err) {
                console.log('ERROR performing operation ' +sqlQuery);

            }
           callback(result[0].uniqueID,err);
        });
    }
   /*
    *Helper function to insert values intodb .
    * @param sqlQuery: example: INSERT INTO tablename SET ?
    * @param values : json object, key value pair.
    * @param callBack : returns the result from querying db.
    * @throws err : if query fails.
    */
  function insertIntoDB(sqlQuery,values,callback){
      process.connection.query(sqlQuery, values, function(err, result) {
          if (err) {
              console.log('inside insertInto DB : ERROR ' + err);

          }
       callback(result,err);

      });

  }


}

var user = new userController();

module.exports = user
