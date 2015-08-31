(function () {
    var app = angular.module("vaivem", []);

    app.controller("mainCtrl", ['$scope', '$http', function ($scope, $http) {

        this.selectedPage = 'splash';
        
        this.selectPage = function (newPage){

            this.selectedPage = newPage;
        };

        this.isSelectedPage = function(selectPage){
            return this.selectedPage === selectPage;
        };

    } ]);
    
})();