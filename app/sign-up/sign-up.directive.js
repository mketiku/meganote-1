{
    angular.module('meganote.signUp')
        .directive('signUp', [
            'UsersService',
            (UsersService) => {
            class SignUpController {
                constructor() {
                this.user ={};
                }
                submit() {
                UserService.create(this.user);
                }
            }

        return {
            scope: {},
            controller: SignUpController,
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: '/sign-up/sign-up.html',
        };
        }]);
}