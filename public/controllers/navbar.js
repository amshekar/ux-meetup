/* --------------------------------------------------------------------------------------------------------------------
<copyright file="navbar.js" company="Bytes2Bots">
   (c) Copyright 2017
 </copyright>
 <summary>
 
 </summary>
 --------------------------------------------------------------------------------------------------------------------*/
(function (module) {

    function NavbarCtrl($scope, $auth, Account) {
        //var vm = this;
        $scope.isAuthenticated = function () {
            return $auth.isAuthenticated();
            
        };
        $scope.randomImage = Account.getRandomNumber(); 
    }
    NavbarCtrl.$inject = ["$scope", "$auth","Account"];
    module.controller('NavbarCtrl', NavbarCtrl);
})(angular.module('MyApp'));

//angular.module('MyApp')
//  .controller('NavbarCtrl', function($scope, $auth) {
//    $scope.isAuthenticated = function() {
//      return $auth.isAuthenticated();
//    };
//  });
