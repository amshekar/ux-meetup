angular.module('MyApp')
  .controller('ColorCtrl', function($scope, $auth, toastr, Account) {

       $scope.font1Selected = true;
            $scope.font2Selected = false;
            $scope.fonts = [{'name':'test'},{'name':'test1'},{'name':'test2'}];
            $scope.selectedFont = {};


            $scope.font1Color = '';
            $scope.font1Color = '';
            $scope.font1Style = {
                        'background-color':'white',
                        'box-shadow': '0 0 1px 2px #fff, 0 0 0 1px #101010'
                    }
            $scope.font2Style = {
                        'background-color':'white',
                        'box-shadow': '0 0 1px 2px #fff, 0 0 0 1px #101010'
                    }

            $scope.font1Clicked =  false;
            $scope.font2Clicked = false;

            $scope.font1Select = function(){
                $scope.font1Clicked = true;
            }

             $scope.font2Select = function(){
                $scope.font2Clicked = true;
            } 

            var $ctrl = this;

            $ctrl.color = {};
            $scope.onSelect = function(color) {
                // do smth with the color
                if($scope.font1Clicked)
                {
                    $scope.font1Color = color.hex;
                    $scope.font1Style = {  'background-color':       color.hex};
                        //'box-shadow': '0 0 1px 2px #fff, 0 0 0 1px #101010'
                    $scope.font1Clicked = false;
                }
                if($scope.font2Clicked)
                {
                    $scope.font2Color = color.hex;
                    $scope.font2Style = {
                        'background-color':color.hex
                    }
                    $scope.font2Clicked = false;
                }
                $ctrl.color = color;
            }
      $scope.updateProfile = function() {
      Account.updateProfile($scope.user)
        .then(function() {
          toastr.success('Profile has been updated');
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
   };
  });
