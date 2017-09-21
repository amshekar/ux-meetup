/* --------------------------------------------------------------------------------------------------------------------
<copyright file="signup.js" company="Bytes2Bots">
   (c) Copyright 2017
 </copyright>
 <summary>
 
 </summary>
 --------------------------------------------------------------------------------------------------------------------*/
(function (module) {
    function Account($http) {
        //var API_URL = 'http://www.designerfav.com';
         var API_URL = 'https://designerfavdev.herokuapp.com';
        return {
            getProfile: getProfile,
            updateProfile: updateProfile,
            getFont: getFont,
            getAllProfiles: getAllProfiles,
            getRandomNumber: getRandomNumber,
            like: like,
            unLike: unLike,
            view: userView
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
        function getRandomNumber() {
            return Math.floor(Math.random() * 12 + 1) + '.jpg';
        }
        function like(username, loggedinuser) {
            return $http.put(API_URL + '/api/like/' + username, loggedinuser);
        }
        function unLike(username, loggedinuser) {
            return $http.put(API_URL + '/api/unlike/' + username, loggedinuser);
        }
        function userView(username, loggedinuser) {
            return $http.put(API_URL + '/api/view/' + username, loggedinuser);
        }

    }

    Account.$inject = ["$http"];
    module.factory('Account', Account);
})(angular.module('MyApp'));
