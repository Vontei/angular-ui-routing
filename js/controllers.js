
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

app.controller('ModalController', function($scope, close) {

 $scope.close = function(result) {
 	close(result, 500); 
 };

});
