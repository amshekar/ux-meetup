angular.module('MyApp', ['ngResource', 'ngMessages', 'ngAnimate', 'toastr', 'ui.router', 'satellizer','color.picker.core','angucomplete-alt'])
    .config(function ($stateProvider, $urlRouterProvider, $authProvider, $locationProvider) {

        /**
         * Helper auth functions
         */
        var skipIfLoggedIn = ['$q', '$auth', function ($q, $auth) {
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                deferred.reject();
            } else {
                deferred.resolve();
            }
            return deferred.promise;
        }];

        var loginRequired = ['$q', '$location', '$auth', function ($q, $location, $auth) {
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                deferred.resolve();
            } else {
                $location.path('/login');
            }
            return deferred.promise;
        }];

        /**
         * App routes
         */
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl',
                templateUrl: 'client/partials/home.html',
                controllerAs: 'vm'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/client/partials/login.html',
                controller: 'LoginCtrl',
                resolve: {
                    skipIfLoggedIn: skipIfLoggedIn
                }
            })
            .state('signup', {
                url: '/signup',
                templateUrl: '/client/partials/signup.html',
                controller: 'SignupCtrl',
                resolve: {
                    skipIfLoggedIn: skipIfLoggedIn
                }
            })
            .state('logout', {
                url: '/logout',
                template: null,
                controller: 'LogoutCtrl'
            })
            .state('font',{
                url: '/font',
                templateUrl: '/client/partials/font.html',
                controller: 'FontCtrl'
            })
            .state('color',{
                url: '/color',
                templateUrl: '/client/partials/color.html',
                controller: 'ColorCtrl'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: '/client/partials/profile.html',
                controller: 'ProfileCtrl',
                resolve: {
                    loginRequired: loginRequired
                }
            });
        $urlRouterProvider.otherwise('/');
        // use the HTML5 History API
        //$locationProvider.html5Mode(true);

        /**
         *  Satellizer config
         */
        $authProvider.facebook({
            /*clientId: '603122136500203'*/
            clientId: '278082065966761',
            url: 'auth/facebook'

        });

        $authProvider.google({
            clientId: 'YOUR_GOOGLE_CLIENT_ID'
        });

        $authProvider.github({
            clientId: 'YOUR_GITHUB_CLIENT_ID'
        });

        $authProvider.linkedin({
            clientId: 'YOUR_LINKEDIN_CLIENT_ID'
        });

        $authProvider.instagram({
            clientId: 'YOUR_INSTAGRAM_CLIENT_ID'
        });

        $authProvider.yahoo({
            clientId: 'YOUR_YAHOO_CLIENT_ID'
        });

        $authProvider.live({
            clientId: 'YOUR_MICROSOFT_CLIENT_ID'
        });

        $authProvider.twitch({
            clientId: 'YOUR_TWITCH_CLIENT_ID'
        });

        $authProvider.bitbucket({
            clientId: 'YOUR_BITBUCKET_CLIENT_ID'
        });

        $authProvider.spotify({
            clientId: 'YOUR_SPOTIFY_CLIENT_ID'
        });

        $authProvider.twitter({
            //url: '/auth/twitter'
            url: 'http://localhost:3000/auth/twitter'
        });
         $authProvider.dribble({
             //url: '/auth/dribble/api/v2/connections',
             clientId:'cafe9492c5296869dff75f1a89cc452c1dd085712b9a47fb303d6f9305be35c2',
             url: 'http://localhost:3000/auth/dribble/callback',
             redirectUri:'http://localhost:3000'// window.location.origin || window.location.protocol + '//' + window.location.host,
            //authorizationEndpoint: 'https://dribbble.com/oauth/authorize'
        });

        $authProvider.oauth2({
            name: 'foursquare',
            url: '/auth/foursquare',
            clientId: 'MTCEJ3NGW2PNNB31WOSBFDSAD4MTHYVAZ1UKIULXZ2CVFC2K',
            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
            authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate'
        });
    });
