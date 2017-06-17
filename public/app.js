angular.module('MyApp', ['ngResource', 'ngMessages', 'ngAnimate', 'toastr',
    'ui.router', 'satellizer', 'ui.select', 'ngSanitize', 'ui.bootstrap', 
    'ngImageInputWithPreview', 'infinite-scroll', 'ngMaterial','typer'])
    .config(function ($stateProvider, $urlRouterProvider, $authProvider, $locationProvider, $uiViewScrollProvider) {
        $uiViewScrollProvider.useAnchorScroll();

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
                templateUrl: '/partials/home.html',
                controllerAs: 'vm'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/partials/login.html',
                controller: 'LoginCtrl',
                resolve: {
                    skipIfLoggedIn: skipIfLoggedIn
                }
            }).state('setting', {
                url: '/setting',
                templateUrl: '/partials/setting.html',
                controller: 'SettingCtrl',
                abstract: true,
                resolve: {
                loginRequired: loginRequired
            }
            }).state('setting.font', {
                url: '/font',
                templateUrl: '/partials/font.html',
            }).state('setting.color', {
                url: '',
                templateUrl: '/partials/color.html',
            })
            .state('signup', {
                url: '/signup',
                templateUrl: '/partials/signup.html',
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
            .state('profile', {
                url: '/profile',
                templateUrl: '/partials/profile.html',
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
            /*clientId: '1709052202456232'*/
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
            url: '/auth/twitter'
            //url: 'http://localhost:3000/auth/twitter'
        });
        $authProvider.dribble({
            //url: '/auth/dribble/api/v2/connections',
            clientId: 'cafe9492c5296869dff75f1a89cc452c1dd085712b9a47fb303d6f9305be35c2',
            url: 'http://localhost:3000/auth/dribble/callback',
            redirectUri: 'http://localhost:3000'// window.location.origin || window.location.protocol + '//' + window.location.host,
            //authorizationEndpoint: 'https://dribbble.com/oauth/authorize'
        });

        $authProvider.oauth2({
            name: 'foursquare',
            url: '/auth/foursquare',
            clientId: 'MTCEJ3NGW2PNNB31WOSBFDSAD4MTHYVAZ1UKIULXZ2CVFC2K',
            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
            authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate'
        });
    })
    .run(function ($rootScope, $window, $auth, $location, $stateParams, $anchorScroll) {
        $rootScope.$on('$stateChangeSuccess', function (event, toState) {
            if ($stateParams.scrollTo) {
                $location.hash($stateParams.scrollTo);
                $anchorScroll('top');
            }
        });
        if ($auth.isAuthenticated()) {
            $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
        }
       
    });
