(function () {
    var app = angular.module('app.directive.contact-fields');

    app.directive('contactFields', function () {
        return {
            restrict: 'A',
            templateUrl: '/Scripts/angularjs/app/views/_contact-fields.html',
            controller: function ($scope) {
                this.info = {};

                var today = new Date(),
                    dd = today.getDate(),
                    mm = today.getMonth() + 1,
                    yyyy = today.getFullYear();

                if (dd < 10) {
                    dd = '0' + dd;
                } if (mm < 10) {
                    mm = '0' + mm;
                }

                today = mm + '/' + dd + '/' + yyyy;

                this.AddContacts = function (contact) {
                    this.info.created = today;
                    contact.list.push(this.info);
                    this.info = {};

                    $scope.NewContact.$setPristine();
                };
            },
            controllerAs: 'fields'
        }
    });
})();