(function() {
    'use strict';

    let expect = chai.expect;
    let now = Date.now();
    let obj1 = {
        name: 'Test',
        time: now
    };
    
    describe('login controller', function() {

        let LoginController;
        let mockLoginService = {};

        beforeEach(module('shopular'));

        beforeEach(module(function($provide) {
            $provide.value('LoginService', mockLoginService);
        }));

        beforeEach(inject(function($controller) {

            mockLoginService.userLogin = function userLogin() {
              mockLoginService.userLogin.numTimesCalled++;

                return [obj1];
            };

            mockLoginService.getLogin = function getLogin(obj1) {
                mockLoginService.getLogin.numTimesCalled++;
                return;
            };
            mockLoginService.removeUser = function removeUser(obj1) {
                mockLoginService.removeUser.numTimesCalled++;
                return;
            };

            mockLoginService.userLogin.numTimesCalled = 0;
            mockLoginService.getLogin.numTimesCalled = 0;
            mockLoginService.removeUser.numTimesCalled = 0;
            LoginController = $controller('LoginController');
        }));


        it('should be the correct types', function() {
            expect(LoginController.userLogin).to.be.a('function');
            expect(LoginController.removeUser).to.be.a('function');
        });

        it('should call userLogin when adding a user', function() {
            expect(mockLoginService.userLogin.numTimesCalled).to.equal(0);
            LoginController.userLogin(obj1);
            expect(mockLoginService.userLogin.numTimesCalled).to.equal(1);
        });

        it('should call removeUser when removing a user', function() {
            LoginController.removeUser({});
            expect(mockLoginService.removeUser.numTimesCalled).to.equal(1);
        });



    });

}());
