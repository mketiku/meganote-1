{
    // create a array for users
    class UsersService{
        create(user){
            console.log('Created');
            console.log(user)
        }
    }
    angular.module('meganote.users')
    .service('UsersService',)
}