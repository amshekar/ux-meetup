angular.module('MyApp')
    .controller('LogoutCtrl', function ($location, $auth, toastr, $state, $window) {
    if (!$auth.isAuthenticated()) { return; }
    $auth.logout()
      .then(function() {
          //toastr.info('You have been logged out');
          delete $window.localStorage.currentUser;
          $state.go('home');
        //$location.path('/');
      });
  });