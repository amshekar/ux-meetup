/* --------------------------------------------------------------------------------------------------------------------
<copyright file="signup.js" company="Bytes2Bots">
   (c) Copyright 2017
 </copyright>
 <summary>
 
 </summary>
 --------------------------------------------------------------------------------------------------------------------*/
(function (module) {
    function Account($http) {
        //var API_URL = 'http://favfont.azurewebsites.net';
        // var API_URL = 'http://www.designerfav.com';
        var API_URL = 'https://designerfav.herokuapp.com';
        return {
            getProfile: getProfile,
            updateProfile: updateProfile,
            getFont: getFont,
            getAllProfiles: getAllProfiles

        };



        function getProfile() {
            return $http.get(API_URL + '/api/me');
        }
        function updateProfile(profileData) {
            return $http.put(API_URL + '/api/me', profileData);
        }
        function getFont() {
            return $http.get(API_URL + '/api/fonts');
        }
        function getAllProfiles(pageSize) {
            return $http.get(API_URL + '/api/users?pagesize=' + pageSize);
        }

    }

    Account.$inject = ["$http"];
    module.factory('Account', Account);
})(angular.module('MyApp'));

//angular.module('MyApp')
//    .factory('Account', function ($http) {
//        var API_URL = 'http://favfont.azurewebsites.net';
//       // var API_URL = 'http://www.designerfav.com';

//    return {
//      getProfile: function() {
//          return $http.get(API_URL+'/api/me');
//      },
//      updateProfile: function(profileData) {
//          return $http.put(API_URL +'/api/me', profileData);
//      },
//      getFont:function(){
//          return $http.get(API_URL+ '/api/fonts');
//      },
//      getAllProfiles: function (pageSize) {
//          return $http.get(API_URL + '/api/users?pagesize='+pageSize);
//      },
//    };
//  });
