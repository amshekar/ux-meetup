(function (angular) {
    function HomeCtrl($scope, $http, $auth, toastr, Account) {
        var vm = this;
        init();  

        function HandleSaveSuccess(result) {
            ResetForm();
            vm.profiles = result.data;
            //return result.data;
        }
        function HandleSaveFailure(result) {
            toastr.error(result.message, result.status);
            //need to remove alert or implent logging
            window.alert("error" + result);
        }
        vm.getAllProfiles = function () {
            Account.getAllProfiles().then(HandleSaveSuccess, HandleSaveFailure);          

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
