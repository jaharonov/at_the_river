myApp.controller('MaterialController', function($mdDialog, $mdToast) {
    console.log('MaterialController');

    var vm = this;
    
    vm.showToast = function(event) {
        $mdToast.show(
            $mdToast.simple()
            //text for update goes on the line below
                .textContent('Upcoming screenings somewhere on some date!!!')
                .position('top right')
                .hideDelay(10000)
        );
    
    }
    vm.showDialog = function (ev) {
        
        console.log('Clicked showDialog');
        

        $mdDialog.show({
            controller: 'MaterialController as mc',
            templateUrl: 'views/dialog.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true

        })
    }


    vm.hide = function () {
        $mdDialog.hide();
    };

    vm.cancel = function () {
        $mdDialog.cancel();
    };

    vm.answer = function (answer) {
        console.log(answer);
        $mdDialog.hide(answer);
    };
    
    vm.showToast();
});