angular.module('MyApp')
    .factory('Account', function ($http) {
        var API_URL = 'http://localhost:3000';
    return {
      getProfile: function() {
          return $http.get(API_URL+'/api/me');
      },
      updateProfile: function(profileData) {
          return $http.put(API_URL +'/api/me', profileData);
      },
      getAllProfiles: function () {
          return $http.get(API_URL+'/api/users')
      }

    };
  });