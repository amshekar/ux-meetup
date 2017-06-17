(function () {
    'use strict';

    angular
        .module('MyApp')
        .directive('rotateCard', rotateCard);

    rotateCard.$inject = ['$window'];

    function rotateCard($window) {
        // Usage:
        //     <rotateCard></rotateCard>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
            var $card = $(btn).closest('.card-container');
            console.log($card);
            if ($card.hasClass('hover')) {
                $card.removeClass('hover');
            } else {
                $card.addClass('hover');
            }
        }
    }

})();