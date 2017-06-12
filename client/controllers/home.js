(function (angular) {
    function HomeCtrl($scope, $http, $auth, toastr, Account) {
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
            //return result.data;
        }
        function HandleSaveFailure(result) {
            toastr.error(result.message, result.status);
            //need to remove alert or implent logging
            //window.alert("error" + result);
        }

        vm.currentPage = 0;
        vm.noMorePossibleResults = false;
        vm.getAllProfiles = function () {
            vm.noMorePossibleResults = true;
            Account.getAllProfiles(vm.currentPage).then(HandleSaveSuccess, HandleSaveFailure);   
            vm.currentPage += 1;       
        };
        


        function ResetForm() {
            vm.profiles = [];            
        }

        function init() {
            vm.profiles = [];
            //vm.rotateCard = RotateCard;
        }

        // Call The Init Function To Initialize The Data Structure
        init();
        vm.getAllProfiles();

    }

    HomeCtrl.$inject = ["$scope", "$http", "$auth", "toastr", "Account"];
    angular.module('MyApp').controller("HomeCtrl", HomeCtrl);

})(angular);

////angular.module('MyApp')
////  .controller('HomeCtrl', function($scope, $http) {
////    $http.jsonp('https://api.github.com/repos/sahat/satellizer?callback=JSON_CALLBACK')
////      .success(function(data) {
////        if (data) {
////          if (data.data.stargazers_count) {
////            $scope.stars = data.data.stargazers_count;
////          }
////          if (data.data.forks) {
////            $scope.forks = data.data.forks;
////          }
////          if (data.data.open_issues) {
////            $scope.issues = data.data.open_issues;
////          }
////        }
////      });
////  });
