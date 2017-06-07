angular.module('MyApp')
    .controller('LogoutCtrl', function ($location, $auth, toastr, $window) {
    if (!$auth.isAuthenticated()) { return; }
    $auth.logout()
      .then(function() {
          toastr.info('You have been logged out');
          delete $window.localStorage.currentUser;
        $location.path('/');
      });
  });