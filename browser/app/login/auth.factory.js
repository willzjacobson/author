app.factory('Auth', function($http) {
	var auth = {};

	var currentUser;

	auth.signup = function(signupForm) {
		return $http.post('/api/users/signup', signupForm)
		.then(function(newUser) {
			currentUser = newUser.data;
			return newUser.data;
		})
	}

	auth.login = function(signinForm) {
		return $http.post('/api/users/login', signinForm)
		.then(function(user) {
			currentUser = user.data;
			return user.data
		})
	}

	auth.logout = function() {
		currentUser = undefined;
		return $http.delete('/api/users/logout');
	};

	auth.getCurrentUser = function() {
		return currentUser;
	};

	return auth
})