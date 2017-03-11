
function ProjectController(){
    // this.index= function(req,res){
    //     if (err){
    //
    //     }
    //     else{
    //
    //     }
    //
    // }
    this.create = function(req,res){
      console.log(req.body);
      process.connection.query('INSERT INTO `projects` (`project_name`, `project_description`, `project_location`) VALUES (?,?,?)', [req.body.name, req.body.description, req.body.location], function(error, results, fields){
        if(error) res.json(error);
        else{
          var response = {
            status: "success",
            data:{
              projectName: req.body.name,
              projectDescroption: req.body.description,
              projectLocation: req.body.location
            }
          };
          res.json(response);
        }
      });
    };
    // this.destroy=function(req,res){
    //      if (err){
    //
    //     }
    //     else{
    //
    //     }
    //
    //
    // }
}

module.exports= new ProjectController();
