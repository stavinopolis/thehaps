// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'ngMaterial', 'starter.controllers', 'starter.services', 'ui.router'])

.run(function() {


    document.addEventListener("deviceready", function () {
  // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
}, false);


})

.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {

    $mdThemingProvider.theme('default')
    .primaryColor('amber')
    .accentPalette('red')
    .warnPalette('red')
    $stateProvider
        .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html',
        controller: 'tabctrl'
    })
    .state('tab.deals', {
        url: '/deals',
        views: {
            'tab-deals': {
                templateUrl: 'templates/tab-deals.html',
                controller: 'dealsctrl'
            }
        }
    })
    .state('tab.tastingrooms', {
            url: '/tastingrooms',
            views: {
                'tab-tastingrooms': {
                    templateUrl: 'templates/tab-tastingrooms.html',
                    controller: 'tastingroomsctrl'
                }
            }
        })
        .state('tab.tr-detail', {
            url: '/tastingrooms/:trId',
            views: {
                'tab-tastingrooms': {
                    templateUrl: 'templates/tr-detail.html',
                    controller: 'trdetailctrl'
                }
            }
        })

    // .state('tab.account', {
    //     url: '/account',
    //     views: {
    //         'tab-account': {
    //             templateUrl: 'templates/tab-account.html',
    //             controller: 'accountctrl'
    //         }
    //     }
    // })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/deals');

});
