angular.module('MyApp')
    .controller('ProfileCtrl', function ($scope, $auth, toastr, Account, $state) {
    $scope.getProfile = function () {
      Account.getProfile()
        .then(function (response) {
          $scope.user = response.data;
        })
        .catch(function (response) {
          toastr.error(response.data.message, response.status);
        });
    };

    $scope.picture = '';
    $scope.updatePreview = function () {
      $scope.user.picture = $scope.picture.src;
    };

    $scope.updateProfile = function () {
      Account.updateProfile($scope.user)
        .then(function (response) {
            //toastr.success('Profile has been updated');
            //shekar need to relook
           // delete $window.localStorage.currentUser;
            //$window.localStorage.currentUser = JSON.stringify($scope.user);
           // $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);            
            $state.go('home');
        })
        .catch(function (response) {
          toastr.error(response.data.message, response.status);
        });
    };
    $scope.link = function (provider) {
      $auth.link(provider)
        .then(function () {
          //toastr.success('You have successfully linked a ' + provider + ' account');
          $scope.getProfile();
        })
        .catch(function (response) {
          toastr.error(response.data.message, response.status);
        });
    };
    $scope.unlink = function (provider) {
      $auth.unlink(provider)
        .then(function () {
          //toastr.info('You have unlinked a ' + provider + ' account');
          $scope.getProfile();
        })
        .catch(function (response) {
          toastr.error(response.data ? response.data.message : 'Could not unlink ' + provider + ' account', response.status);
        });
    };

    $scope.getProfile();
  });
