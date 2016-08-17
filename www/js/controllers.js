angular.module('starter.controllers', [])

.controller('tabctrl', function($scope, $rootScope) {

    $rootScope.logged = false;


})

.controller('dealsctrl', function($scope, $rootScope) {
$scope.distance=4;
$scope.time=60;

})

.controller('trsctrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('trdetailctrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

// .controller('accountctrl', function($scope) {
//     $scope.settings = {
//         enableFriends: true
//     };
// })
;

