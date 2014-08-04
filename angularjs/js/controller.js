// 定义一个模块, 并引入依赖的angular模块
var umService = angular.module( 'UserManage', [ 'ngRoute' ] );

function umRouteConfig ( $routeProvider ) {
	// console.log( $routeProvider );
	$routeProvider
	.when( '/', {
		controller: ListController,
		templateUrl: 'list.html'
	})
	.when( '/update/:id', {
		controller: UpdateController,
		templateUrl: 'detail.html'
	})
	.when( '/delete', {
		
	})
	.otherwise({
      redirectTo: '/'
    });
}

umService.config( umRouteConfig );

function ListController ( $scope, $http ) {
	$http.get( 'server/user.json' ).success( function ( data, status, headers, config ) {
		console.log( data );
		$scope.users = data;
	});
}

function UpdateController ( $scope, $http, $routeParams ) {
	var id = $routeParams.id;
	console.log( id );
	$http.get( 'server/user.json' ).success( function ( data, status, headers, config ) {
		//console.log( data );
		 $scope.user = data;
		 console.log($scope.user)
		var len=data.length;
		for(var i=0;i<len;i++){
			console.log(data[i].id);
			if(id==data[i].id){
				$scope.xiuUser=data[i];	
			}			
		}
	});
}
