(function() {
    'use strict';


    angular.module('shopular').controller('LoginController', LoginController);

    LoginController.$inject = ['LoginService'];



    /**
     * Main function that controls the controller
     * @param {Service} LoginService The service that contains the data
     */
    function LoginController(LoginService) {
        let vm = this;

        vm.loginData = LoginService.getLogin();
        // vm.loginData = function getLogin(){
        //   LoginService.getLogin();
        //   };//get user

        vm.newLogin = {};


        /**
         * Points vm.userLogin to a fn that takes an string and passes it to
         * userLogin fn inside LoginService
         * @param  {String} info  Takes a string for the username
         * @return {Voif}
         */
        vm.userLogin = function userLogin(info) { //add user
             LoginService.userLogin(info);
             vm.newLogin = {};
        };

        /**
         * Points vm.removeUser to a fn that takes an object and passes it to
         * removeUser fn inside LoginService
         * @param  {Object} user [User object inside the data array]
         * @return {Void}
         */
        vm.removeUser = function removeUser(user) {
            LoginService.removeUser(user);
        };
    }
}());
