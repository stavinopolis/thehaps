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

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html',
        controller: 'tabctrl'
    })

    // Each tab has its own nav history stack:

    .state('tab.deals', {
        url: '/deals',
        views: {
            'tab-deals': {
                templateUrl: 'templates/tab-deals.html',
                controller: 'dealsctrl'
            }
        }
    })

    .state('tab.trs', {
            url: '/trs',
            views: {
                'tab-trs': {
                    templateUrl: 'templates/tab-trs.html',
                    controller: 'trsctrl'
                }
            }
        })
        .state('tab.tr-detail', {
            url: '/trs/:trId',
            views: {
                'tab-trs': {
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
