// module
var umService = angular.module( 'UserManage', []);

function umRouteConfig ( $routeProvider ) {
	console.log( $routeProvider )
	$routeProvider
	.when( '/', {
		controller: ListController,
		templateUrl: 'list.html'
	})
	.otherwise({
      redirectTo: '/'
    });
}

umService.config( umRouteConfig );

function ListController ( $scope ) {
	$scope.message = 'message';
}
