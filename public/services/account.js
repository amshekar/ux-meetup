angular.module('MyApp')
    .factory('Account', function ($http) {
        var API_URL = 'http://favfont.azurewebsites.net';
       // var API_URL = 'http://www.designerfav.com';
        
    return {
      getProfile: function() {
          return $http.get(API_URL+'/api/me');
      },
      updateProfile: function(profileData) {
          return $http.put(API_URL +'/api/me', profileData);
      },
      getFont:function(){
          return $http.get(API_URL+ '/api/fonts');
      },
      getAllProfiles: function (pageSize) {
          return $http.get(API_URL + '/api/users?pagesize='+pageSize);
      },
    };
  });
