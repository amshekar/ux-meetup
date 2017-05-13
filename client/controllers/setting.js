angular.module('MyApp')
  .controller('SettingCtrl', function($scope, $auth, toastr, Account, $state) {
    $scope.getFont = function() {
      Account.getFont()
        .then(function(response) {
          $scope.Fonts = response.data;
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };
    $scope.updateProfile = function() {
      var color1Value = window.document.getElementById('search-color');
      var color2Value = window.document.getElementById('search-color1');
      $scope.user = {'font':$scope.selectedItem.fonts, 'color':[color1Value.value,color2Value.value]};
      Account.updateProfile($scope.user)
        .then(function() {
          toastr.success('Profile has been updated');
          $state.go('home');
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
   };

   $scope.init = function()
   {
      var picker = new KellyHlPicker({
                            place: 'picker',
                            input: ['search-color','search-color1'],
                            size : 450,
                            chunks : 20,
                            chunkPadding: -1
                        });
   }

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
      
  $scope.getFont();
  $scope.selectedItem = {};
  $scope.selectedItem.fonts = [];

  });
