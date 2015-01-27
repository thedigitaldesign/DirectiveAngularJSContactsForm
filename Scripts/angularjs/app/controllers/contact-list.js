(function () {
    var app = angular.module('app.contact-list');

    app.controller('ContactController', function () {
        var contacts = this;

        contacts.list = [
            {
                created: '11/12/2014',
                name: 'Doris Box',
                email: 'doris.box@dayrep.com'
            },
            {
                created: '11/12/2014',
                name: 'Kevin Emory',
                email: 'kevin.emory@teleworm.us'
            },
            {
                created: '11/18/2014',
                name: 'Cyril Gill',
                email: 'cyril.gill@teleworm.us'
            },
            {
                created: '12/12/2014',
                name: 'Alisa Bodie',
                email: 'alisa.bodie@dayrep.com'
            },
            {
                created: '01/02/2015',
                name: 'Suzanne Ulrich',
                email: 'suzanne.ulrich@jourrapide.com'
            },
            {
                created: '01/12/2015',
                name: 'Stuart Gaither',
                email: 'stuart.gaither@jourrapide.com'
            }
        ];
    });
})();