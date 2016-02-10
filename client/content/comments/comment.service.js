(function() {
	'use strict'
	angular
	.module('myApp')
	.factory('CommentFactory', CommentFactoryFunction)

	CommentFactoryFunction.$inject = ['$http', '$routeParams', '$q', 'AuthFactory'];

	function CommentFactoryFunction  ($http, $routeParams, $q, AuthFactory) {
		var postId = $routeParams.post_id

		var factory = {}
		var comments;

		return ({
			getComments: getComments,
			addComment: addComment
		})


		function getComments(id) {
			var deferred = $q.defer();

			$http.get('/getComments/' + id).success(function(data) {
				comments = data
				console.log(data)
				deferred.resolve(comments)
			})
			.error(function(data) {
				deferred.reject();
			})
			return deferred.promise
		}
		function addComment(id, info, callback) {
			$http.post('/addComment/' + id,  {text: info.text, username: info.username }).success(function(output) {
				comments = output;
				callback(comments);
			})
		};
	}
})();