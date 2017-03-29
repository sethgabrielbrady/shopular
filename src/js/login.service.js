(function() {
  'use strict';

  angular.module('shopular').factory('LoginService', LoginService);

  function LoginService() {


  let loginData = JSON.parse(localStorage.getItem('loginData')) || [];

    //this will be my login
      function login(info){
        let loginTime = Date.now();

        loginData.push({
          loginName: info.loginName,
          loginPass: info.loginPass,
          logintime: loginTime
        });
        localStorage.setItem('loginData', angular.toJson(login));
        }

        function getLogin(){
          return loginData;
        }



    return {
      login: login,
      getLogin: getLogin
    };



  }
}());
