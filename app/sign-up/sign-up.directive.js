{
    angular.module('meganote.signUp')
        .directive('signUp', [() => {
            'UsersService',
            (UsersService) => {
        class SignUpController {
            constructor(UsersService) {
            this.user ={};
            }
            submit() {
            UserService.create(this.user);
            }
        }
        SignUpController.$inject = ['UsersService'];

        return {
            scope: {},
            controller: SignUpController,
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: '/sign-up/sign-up.html',
        };
        }}]);
}