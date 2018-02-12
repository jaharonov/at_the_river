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
        // console.log('Clicked!')
        // $mdDialog.show(
        //     $mdDialog.alert()
        //     .parent(angular.element(document.querySelector('#popupContainer')))
        //     .title('Hi!!!')
        //     .textContent('You can say other things')
        //     .ariaLabel('Alert Dialog Demo')
        //     .ok('Got it!')
        //     .targetEvent(event)
        // )
    }
    vm.showToast();
});