angular.module('MyApp')
    .controller('SignupCtrl', function ($scope, $location, $auth, $state, toastr, $rootScope, $window, Account) {
        $scope.signup = function () {
            $auth.signup($scope.user)
                .then(function (response) {
                    $auth.setToken(response);
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
                    //toastr.info('You have successfully created a new account and have been signed-in');
                })
                .catch(function (response) {
                    toastr.error(response.data.message);
                });
        };
        $scope.hasSettingUpdated = function () {
            //TODO Check Setting updated or not need to movie this into service and has to use in both signup and login scenario.
            return true;
        };
    });