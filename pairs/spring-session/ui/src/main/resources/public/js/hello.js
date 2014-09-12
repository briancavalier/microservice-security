var angular = require('angular');

angular.module('hello',[])
	.controller('Hello', function ($scope, $http) {

		$http.get('http://localhost:8080/token').then(function(token) {
			
			var headers = {
				'X-Token' : token.data
			};

			return $http({
				method : 'GET',
				url : 'http://localhost:9000',
				headers : headers
			});

		}).then(function(result) {
			$scope.greeting = result.data;
		}).catch(function(e) { // TODO: Remove
			console.error(e);
		});

	});

angular.bootstrap(document, ['hello']);
