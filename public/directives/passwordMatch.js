/* --------------------------------------------------------------------------------------------------------------------
<copyright file="ifLoading.js" company="Bytes2Bots">
   (c) Copyright 2017
 </copyright>
 <summary>
 
 </summary>
 --------------------------------------------------------------------------------------------------------------------*/
angular.module('MyApp')
  .directive('passwordMatch', function() {
    return {
      require: 'ngModel',
      scope: {
        otherModelValue: '=passwordMatch'
      },
      link: function(scope, element, attributes, ngModel) {
        ngModel.$validators.compareTo = function(modelValue) {
          return modelValue === scope.otherModelValue;
        };
        scope.$watch('otherModelValue', function() {
          ngModel.$validate();
        });
      }
    };
  });

