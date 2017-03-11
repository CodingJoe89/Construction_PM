angular.module('app')
    .factory('LoginRegistrationFactory', LoginRegistrationFactory)

function LoginRegistrationFactory($http){
    var factory = {};
    factory.getUser = function(userCredentials,callback){
        $http.post('/users',userCredentials)
             .then(function(backendData){
             callback(backendData.data[0]);
                console.log(backendData);

            })
    }

    factory.addUser = function (userInfo) {
        $http.post('/user', userInfo)
             .then(function(backendData){
                    console.log(backendData);
                })

    }

    /*factory.destroyUser = function(userid){

    }

*/
    return factory;
}
