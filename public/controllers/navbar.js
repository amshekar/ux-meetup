/* --------------------------------------------------------------------------------------------------------------------
<copyright file="navbar.js" company="Bytes2Bots">
   (c) Copyright 2017
 </copyright>
 <summary>
 
 </summary>
 --------------------------------------------------------------------------------------------------------------------*/
(function (module) {

    function NavbarCtrl($scope, $auth) {
        $scope.isAuthenticated = function () {
            return $auth.isAuthenticated();
        };
    }
    NavbarCtrl.$inject = ["$scope", "$auth"];
    module.controller('NavbarCtrl', NavbarCtrl);
})(angular.module('MyApp'));

//angular.module('MyApp')
//  .controller('NavbarCtrl', function($scope, $auth) {
//    $scope.isAuthenticated = function() {
//      return $auth.isAuthenticated();
//    };
//  });
