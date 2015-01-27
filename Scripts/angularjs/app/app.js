(function () {
    angular.module('app.contact-list', []);
    angular.module('app.directive.contact-fields', []);

    angular.module('app', [
        'app.contact-list',
        'app.directive.contact-fields'
    ]);
})();