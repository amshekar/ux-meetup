angular.module('MyApp')
    .controller('LoginCtrl', function ($scope, $location, $auth, toastr, $state, $window, $rootScope, Account) {
    $scope.login = function () {
      $auth.login($scope.user)
        .then(function () {
          Account.getProfile()
              .then(function (response) {
                  $window.localStorage.currentUser = JSON.stringify(response.data);
                  $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
              $scope.user = response.data;
              if ($scope.user.font.length == 0 && $scope.user.color.length == 0) {
                //$location.path('/setting');
                $state.go('setting.color');
              }
              else                
                $state.go('home');
              //toastr.success('You have successfully signed in!');
            })
        })
        .catch(function (error) {
          toastr.error(error.data.message, error.status);
        });
    };

    $scope.hasSettingUpdated = function () {

    };

    $scope.authenticate = function (provider) {
      $auth.authenticate(provider)
          .then(function (response) {
              $window.localStorage.currentUser = JSON.stringify(response.data);
              $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
          toastr.success('You have successfully signed in with ' + provider + '!');
          $location.path('/');
        })
        .catch(function (error) {
          if (error.message) {
            // Satellizer promise reject error.
            toastr.error(error.message);
          } else if (error.data) {
            // HTTP response error from server
            toastr.error(error.data.message, error.status);
          } else {
            toastr.error(error);
          }
        });
    };
  });
