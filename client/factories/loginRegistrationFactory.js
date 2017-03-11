angular.module('app')
    .factory('LoginRegistrationFactory', LoginRegistrationFactory)

function LoginRegistrationFactory($http){
    var factory = {};
    factory.getUser = function(callback){
        $http.get('/users')
             .then(function(backendData){
                callback(backendData.data);
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
