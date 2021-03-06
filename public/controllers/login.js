/* --------------------------------------------------------------------------------------------------------------------
<copyright file="login.js" company="Bytes2Bots">
   (c) Copyright 2017
 </copyright>
 <summary>
 
 </summary>
 --------------------------------------------------------------------------------------------------------------------*/
(function (module) {
    function LoginCtrl($scope, $location, $auth, toastr, $state, $window, $rootScope, Account) {
        $scope.login = function () {
            $auth.login($scope.user)
                .then(function () {
                    Account.getProfile()
                        .then(function (response) {
                            $window.localStorage.currentUser = JSON.stringify(response.data);
                            $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
                            $scope.user = response.data;
                            if ($scope.user.font.length < 2 || $scope.user.color.length < 2) {
                                //$location.path('/setting');
                                $state.go('setting.color');
                            }
                            else
                                $state.go('home');
                            //toastr.success('You have successfully signed in!');
                        })
                })
                .catch(function (error) {
                    toastr.error("We couldn’t find an account matching the email and password you entered. Please check your email and password and try again.");
                });
        };

        $scope.hasSettingUpdated = function () {

        };

        $scope.authenticate = function (provider) {
            $auth.authenticate(provider)
                .then(function (response) {
                    Account.getProfile()
                        .then(function (response) {
                            $window.localStorage.currentUser = JSON.stringify(response.data);
                            $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
                            $scope.user = response.data;
                            if ($scope.user.font.length < 2 || $scope.user.color.length < 2) {
                                //$location.path('/setting');
                                $state.go('setting.color');
                            }
                            else
                                $state.go('home');
                            //toastr.success('You have successfully signed in!');
                        })

                    //toastr.success('You have successfully signed in with ' + provider + '!');

                })
                .catch(function (error) {
                    if (error.message) {
                        // Satellizer promise reject error.
                        toastr.error(error.message);
                    } else if (error.data) {
                        // HTTP response error from server
                        toastr.error(error.data.message);
                       // toastr.error(error.data.message, error.status);
                    } else {
                        toastr.error(error);
                    }
                });
        };
    }

    LoginCtrl.$inject = ["$scope", "$location", "$auth", "toastr", "$state", "$window", "$rootScope", "Account"];
    module.controller('LoginCtrl', LoginCtrl);
})(angular.module('MyApp'));
//angular.module('MyApp')
//    .controller('LoginCtrl', function ($scope, $location, $auth, toastr, $state, $window, $rootScope, Account) {
//        $scope.login = function () {
//            $auth.login($scope.user)
//                .then(function () {
//                    Account.getProfile()
//                        .then(function (response) {
//                            $window.localStorage.currentUser = JSON.stringify(response.data);
//                            $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
//                            $scope.user = response.data;
//                            if ($scope.user.font.length < 2 || $scope.user.color.length < 2) {
//                                //$location.path('/setting');
//                                $state.go('setting.color');
//                            }
//                            else
//                                $state.go('home');
//                            //toastr.success('You have successfully signed in!');
//                        })
//                })
//                .catch(function (error) {
//                    toastr.error(error.data.message, error.status);
//                });
//        };

//        $scope.hasSettingUpdated = function () {

//        };

//        $scope.authenticate = function (provider) {
//            $auth.authenticate(provider)
//                .then(function (response) {
//                    Account.getProfile()
//                        .then(function (response) {
//                            $window.localStorage.currentUser = JSON.stringify(response.data);
//                            $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
//                            $scope.user = response.data;
//                            if ($scope.user.font.length < 2 || $scope.user.color.length < 2) {
//                                //$location.path('/setting');
//                                $state.go('setting.color');
//                            }
//                            else
//                                $state.go('home');
//                            //toastr.success('You have successfully signed in!');
//                        })

//                    //toastr.success('You have successfully signed in with ' + provider + '!');

//                })
//                .catch(function (error) {
//                    if (error.message) {
//                        // Satellizer promise reject error.
//                        toastr.error(error.message);
//                    } else if (error.data) {
//                        // HTTP response error from server
//                        toastr.error(error.data.message, error.status);
//                    } else {
//                        toastr.error(error);
//                    }
//                });
//        };
//    });
