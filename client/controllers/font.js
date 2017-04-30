angular.module('MyApp')
  .controller('FontCtrl', function($scope, $auth, toastr, Account) {
    $scope.getFont = function() {
      Account.getFont()
        .then(function(response) {
          $scope.Fonts = response.data;
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };
    $scope.updateProfile = function() {
      Account.updateProfile($scope.user)
        .then(function() {
          toastr.success('Profile has been updated');
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
   };
  $scope.getFont();
  });
