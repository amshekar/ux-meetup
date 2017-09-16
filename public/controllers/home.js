/* --------------------------------------------------------------------------------------------------------------------
<copyright file="server.js" company="Bytes2Bots">
   (c) Copyright 2017
 </copyright>
 <summary>
 
 </summary>
 --------------------------------------------------------------------------------------------------------------------*/
(function (angular) {
    function HomeCtrl($scope, $http, $auth,$window, toastr, Account) {
        angular.module('infinite-scroll').value('THROTTLE_MILLISECONDS', 250)
        var vm = this;
        init();  
        vm.profiles =[];

        function HandleSaveSuccess(result) {
            //ResetForm();
            //debugger;

            if(result.data.length == 0 )
            {
                vm.noMorePossibleResults = true;
                return;
            }
            for(i=0;i<result.data.length;i++)
            {
                vm.profiles.push(result.data[i]);
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
                
                if(typeof profile.designation === "undefined" || typeof profile.dribble==="undefined")
                    isProfileUpdated=false;
                else
                    isProfileUpdated=true;
            }
            else
                isProfileUpdated=true;  
            return isProfileUpdated;
        }

        function init() {
            vm.profiles = [];   
            if(!IsProfileUpdated())
                {
                    openThankyouPopup();
                }         
            //vm.rotateCard = RotateCard;
        }

        // Call The Init Function To Initialize The Data Structure
        init();
        vm.getAllProfiles();

    }

    HomeCtrl.$inject = ["$scope", "$http", "$auth","$window", "toastr", "Account"];
    angular.module('MyApp').controller("HomeCtrl", HomeCtrl);

})(angular);
