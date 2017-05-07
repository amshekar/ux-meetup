angular.module('MyApp')
  .controller('ColorCtrl', function($scope, $auth, toastr, Account) {

        $scope.selectColor1 = function (color)
        {
            $scope.color1 = color;
        }

        $scope.color1 = "#ffffff";

        $scope.selectColor2 = function (color)
        {
            $scope.color2 = color;
        }

        $scope.color2 = "#ffffff";
            
            $scope.style ={};
            $scope.style.colors = ['#f54337','#e91d62','#9c28b1','#673bb7','#3f51b5','#2196f3','#03a9f5','#00bbd4','#009788','#4cb050','#8bc24a','#cddc39','#ffeb3c','#fec107'];
      
      $scope.updateProfile = function() {
      $scope.user = {'color':[$scope.color1,$scope.color2]};
      Account.updateProfile($scope.user)
        .then(function() {
          toastr.success('Profile has been updated');
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
   };
  });
