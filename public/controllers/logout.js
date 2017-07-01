/* --------------------------------------------------------------------------------------------------------------------
<copyright file="logout.js" company="Bytes2Bots">
   (c) Copyright 2017
 </copyright>
 <summary>
 
 </summary>
 --------------------------------------------------------------------------------------------------------------------*/
(function (module) {
    function LogoutCtrl($location, $auth, toastr, $state, $window) {
        if (!$auth.isAuthenticated()) { return; }
        $auth.logout()
            .then(function () {
                //toastr.info('You have been logged out');
                delete $window.localStorage.currentUser;
                $state.go('home');
                //$location.path('/');
            });
    }

    LogoutCtrl.$inject = ["$location", "$auth", "toastr", "$state", "$window"];
    module.controller('LogoutCtrl', LogoutCtrl);
})(angular.module('MyApp'));

//angular.module('MyApp')
//    .controller('LogoutCtrl', function ($location, $auth, toastr, $state, $window) {
//    if (!$auth.isAuthenticated()) { return; }
//    $auth.logout()
//      .then(function() {
//          //toastr.info('You have been logged out');
//          delete $window.localStorage.currentUser;
//          $state.go('home');
//        //$location.path('/');
//      });
//    });