'use strict';

app.directive('contenteditable', function (Auth) {
	return {
		restrict: 'A',
		require: '?ngModel',
		link: function (scope, element, attrs, ngModel) {
			console.log('scope', scope.story.author._id);
			console.log('aaaa', Auth.getCurrentUser())
			if (!ngModel) return;
			ngModel.$render = function () {
				element.html(ngModel.$viewValue || '');
			};
			if (Auth.getCurrentUser()._id != scope.story.author._id) element.addClass('disabled');

        else {
          function read() {
              ngModel.$setViewValue(element.html());
          }
          element.bind('blur keyup change', function () {
            scope.$apply(read);
          });
        }
		}
	};
});