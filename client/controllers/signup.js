angular.module('MyApp')
    .controller('SignupCtrl', function ($scope, $location, $auth, toastr) {
        $scope.signup = function () {
            $auth.signup($scope.user)
                .then(function (response) {
                    $auth.setToken(response);
                    if ($scope.hasSettingUpdated()) {
                        // $state.go('setting');
                        $location.path('/setting');
                    } else {
                        // $state.go('home');
                        $location.path('/home');
                    }


                    toastr.info('You have successfully created a new account and have been signed-in');
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