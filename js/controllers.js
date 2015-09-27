app.controller('ModalController', function($scope, ModalService) {

    $scope.show = function() {
        ModalService.showModal({
            templateUrl: './partials/modal.html',
            controller: "ModalController"
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                $scope.message = "You said " + result;
            });
        });
    };

});




app.controller('displayPicsController', function($scope){
  $scope.message ='hello';

});
