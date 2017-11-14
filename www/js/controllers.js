angular.module('starter.controllers', [])

.controller('tabctrl', function($scope, $rootScope) {

    $rootScope.logged = false;


})

.controller('dealsctrl', function($scope, $rootScope) {
	$scope.title="BOULEVARD"
	$scope.discount="1/2 off wells"
$scope.distance=4;
$scope.time=60;

})

.controller('tastingroomsctrl', function($scope, Chats) {

    $scope.tastingrooms = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('trdetailctrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
});

// .controller('accountctrl', function($scope) {
//     $scope.settings = {
//         enableFriends: true
//     };
// })