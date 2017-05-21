angular.module('MyApp')
  .controller('LoginCtrl', function($scope, $location, $auth, toastr,$state) {
    $scope.login = function() {
      $auth.login($scope.user)
        .then(function() {
          if($scope.hasSettingUpdated()){
            // $state.go('setting');
            $location.path('/setting');
          }else{
            // $state.go('home');
            $location.path('/home');
          }
          
          toastr.success('You have successfully signed in!');
          // $state.go('setting');
        })
        .catch(function(error) {
          toastr.error(error.data.message, error.status);
        });
    };

    $scope.hasSettingUpdated = function()
    {
       Account.getProfile()
        .then(function(response) {
          $scope.user = response.data;
          
        })
      //TODO Check Setting updated or not need to movie this into service and has to use in both signup and login scenario.
      return true;
    };

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function() {
          toastr.success('You have successfully signed in with ' + provider + '!');
          $location.path('/');
        })
        .catch(function(error) {
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
