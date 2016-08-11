app.controller('AddContatoController', function($scope,$ionicPopup){
  $scope.motoristas = {};
  $scope.addContato = function(contato){
    $scope.lists.push(contato)
    $ionicPopup.alert({
        title: 'Inserido com Sucesso'
      });
  };

})

.controller('ContatosController',function($scope,contatoService){
  $scope.data = {
    showDelete: false
  };


contatoService.listaMotoristas().success(function(data){
  $scope.motoristas = data;
});

});



