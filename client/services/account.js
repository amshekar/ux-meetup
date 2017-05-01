angular.module('MyApp')
    .factory('Account', function ($http) {
        var API_URL = 'http://localhost:3000';
    return {
      getProfile: function() {
          return $http.get(API_URL+'/api/me');
      },
      updateProfile: function(profileData) {
          return $http.put('http://localhost:3000' +'/api/me', profileData);
      },
      getFont:function(){
        return $http.get('http://localhost:3000'+ '/api/fonts');
      },
      getAllProfiles: function () {
          return $http.get(API_URL + '/api/users')
      }
    };
  });