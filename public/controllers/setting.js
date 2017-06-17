angular.module('MyApp')
  .controller('SettingCtrl', function($scope, $auth, toastr, Account, $state,$filter) {
    $scope.getFont = function() {
      Account.getFont()
        .then(function(response) {
          $scope.Fonts = response.data;
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };
    $scope.cl1 = '';
    $scope.cl2 = '';

    $scope.setColor = function (){
      var color1Value = window.document.getElementById('search-color');
      var color2Value = window.document.getElementById('search-color1');
      $scope.cl1 = color1Value.value;
      $scope.cl2 = color2Value.value;
    };

     $scope.filterSelected = true;
            
      $scope.querySearch = function (query) {
          var results = query ?
          $scope.Fonts.filter(createFilterFor(query)) : [];
          return results;
      }

       function createFilterFor(query) {
          var lowercaseQuery = angular.lowercase(query);
          return function filterFn(contact) {
            return (contact.indexOf(lowercaseQuery) != -1);;
          };
      }

    $scope.updateProfile = function() {
     
      $scope.user = {'font':$scope.selectedItem.fonts, 'color':[$scope.cl1,$scope.cl2]};
      Account.updateProfile($scope.user)
        .then(function() {
          //toastr.success('Profile has been updated');
          $state.go('home');
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
   };

   $scope.init = function()
   {
     
   }

  $scope.getFont();
  $scope.selectedItem = {};
  $scope.selectedItem.fonts = [];

  });
