/* --------------------------------------------------------------------------------------------------------------------
<copyright file="server.js" company="Bytes2Bots">
   (c) Copyright 2017
 </copyright>
 <summary>
 
 </summary>
 --------------------------------------------------------------------------------------------------------------------*/
(function (angular) {
    function HomeCtrl($scope, $http, $auth, $window, toastr, Account) {
        angular.module('infinite-scroll').value('THROTTLE_MILLISECONDS', 250)
        var vm = this;
        init();
        vm.profiles = [];
        vm.isAllowLikes = false;

        function HandleSaveSuccess(result) {
            //ResetForm();
            //debugger;

            if (result.data.length == 0) {
                vm.noMorePossibleResults = true;
                return;
            }
            if(typeof $window.localStorage.currentUser != 'undefined')
                vm.isAllowLikes = true;

            for (i = 0; i < result.data.length; i++) {
                var currentUser = result.data[i];
                currentUser.viewsCount = (currentUser.views != 'undefined') ? currentUser.views.length : 0;
                currentUser.likesCount = (currentUser.likes != 'undefined') ? currentUser.likes.length : 0;
                currentUser.isLiked = false;

                if (currentUser.likes != 'undefined' && typeof $window.localStorage.currentUser != 'undefined') {
                    var profile = JSON.parse($window.localStorage.currentUser);

                    var index = currentUser.likes.indexOf(profile.email);
                    if (index != -1)
                        currentUser.isLiked = true;
                }

                vm.profiles.push(currentUser);
            }

            vm.noMorePossibleResults = false;

        }
        function HandleSaveFailure(result) {
            toastr.error(result.message, result.status);
            //need to remove alert or implent logging
            console.log("error" + result);
        }

        vm.currentPage = 0;
        vm.noMorePossibleResults = false;
        vm.getAllProfiles = function () {
            vm.noMorePossibleResults = true;
            Account.getAllProfiles(vm.currentPage).then(HandleSaveSuccess, HandleSaveFailure);
            vm.currentPage += 1;
            vm.randomImage = Account.getRandomNumber();

        };

        vm.updateLike = function (user) {
            if (typeof $window.localStorage.currentUser != 'undefined') {
                var currentUser = JSON.parse($window.localStorage.currentUser);
                if (user.isLiked) {
                    user.likesCount = user.likesCount - 1;
                    user.isLiked = false;
                    unLike(user.email, currentUser.email);
                } else {
                    user.likesCount = user.likesCount + 1;
                    user.isLiked = true;
                    like(user.email, currentUser.email);
                }
            }
        }

        function like(username, email) {
            Account.like(username, { email: email }).then(function (result) {
                var test = result;
            }, function (result) {
                var test = result;
            });
        }

        function unLike(username, email) {
            Account.unLike(username, { email: email }).then(function (result) {
                var test = result;
            }, function (result) {
                var test = result;
            });
        }

        vm.view = function (username) {
            var currentUser = JSON.parse($window.localStorage.currentUser);
            Account.view(username, { email: currentUser.email }).then(function (result) {
                var test = result;
            }, function (result) {
                var test = result;
            });
        }

        function openThankyouPopup() {
            $('#thankyou-modal').modal('open');

        }


        function ResetForm() {
            vm.profiles = [];
        }

        function IsProfileUpdated()
        {  
                     
            if((typeof localStorage["currentUser"] !== "undefined")){
                var profile=JSON.parse($window.localStorage.currentUser);
                
                if(typeof profile.designation === "undefined")
                    isProfileUpdated=false;
                else if((typeof profile.dribble==="undefined" && typeof profile.behance==="undefined"))
                    isProfileUpdated=false;
                else
                    isProfileUpdated = true;
            }
            else
                isProfileUpdated = true;
            return isProfileUpdated;
        }

        function init() {
            vm.profiles = [];
            if (!IsProfileUpdated()) {
                openThankyouPopup();
            }
            //vm.rotateCard = RotateCard;
        }

        // Call The Init Function To Initialize The Data Structure
        init();
        vm.getAllProfiles();

    }

    HomeCtrl.$inject = ["$scope", "$http", "$auth", "$window", "toastr", "Account"];
    angular.module('MyApp').controller("HomeCtrl", HomeCtrl);

})(angular);
