(function (angular) {
    function HomeCtrl($scope, $http) {

        var vm = this;
        init();
        rotateCard();
        
        vm.profiles = [];
        
        function test()
        {
            alert("test");
        }
        function HandleSaveSuccess(result) {
            // ResetForm();
            vm.profiles = result.data;
            //return result.data;



        }
        function HandleSaveFailure(result) {
            //need to remove alert or implent logging
            window.alert("error" + result);
        }


       
        function init() {

            //vm.rotateCard = RotateCard;

        }

        //$http.jsonp('https://api.github.com/repos/sahat/satellizer?callback=JSON_CALLBACK')
        //    .success(function (data) {
        //        if (data) {
        //            if (data.data.stargazers_count) {
        //                $scope.stars = data.data.stargazers_count;
        //            }
        //            if (data.data.forks) {
        //                $scope.forks = data.data.forks;
        //            }
        //            if (data.data.open_issues) {
        //                $scope.issues = data.data.open_issues;
        //            }
        //        }
        //    });

        // Call The Init Function To Initialize The Data Structure
        init();

    }

    HomeCtrl.$inject = ["$scope", "$http"];
    angular.module('MyApp').controller("HomeCtrl", HomeCtrl);
    
})(angular);

//angular.module('MyApp')
//  .controller('HomeCtrl', function($scope, $http) {
//    $http.jsonp('https://api.github.com/repos/sahat/satellizer?callback=JSON_CALLBACK')
//      .success(function(data) {
//        if (data) {
//          if (data.data.stargazers_count) {
//            $scope.stars = data.data.stargazers_count;
//          }
//          if (data.data.forks) {
//            $scope.forks = data.data.forks;
//          }
//          if (data.data.open_issues) {
//            $scope.issues = data.data.open_issues;
//          }
//        }
//      });
//  });
