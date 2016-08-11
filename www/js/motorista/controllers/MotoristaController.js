app.controller('MotoristaController',function($scope, $ionicModal,$ionicPopup,$state,contatoService){
	$scope.motoristas = {};

	$scope.motorista = {};

		$scope.data = {
	    	showDelete: false
	  	};

	$scope.addMotorista = function(m){
		contatoService.addMotorista(m).success(function(data){
			$ionicPopup.alert({
				title: 'Aviso',
				template: 'Motorista Inserido com sucesso!'
			});
			$state.go('tab.listMotoristas');
			$scope.motorista = {};
		});
	}

	$scope.deleteMotorista = function(id){
		console.log(id);
	}

	$scope.editMotorista = function(motorista){
		contatoService.editMotorista(motorista).success(function(data){
      $ionicPopup.alert({
        title: 'Aviso',
        template: 'Motorista Atualizado com sucesso!'
      });
      $state.go('tab.listMotoristas');
      $scope.motorista = {};
      $scope.modal.hide();
    })

	}


	$scope.listMotoristas = function(){
		contatoService.listaMotoristas().success(function(data){
			$scope.motoristas = data;
		}).finally(function(){
			$scope.$broadcast('scroll.refreshComplete');
		});
	}

	$scope.openModal = function(motorista) {
		$scope.motorista = motorista;
	    $scope.modal.show();
	  };

	$ionicModal.fromTemplateUrl('templates/motorista/modal-EditMotorista.html',{
		scope: $scope
	}).then(function(modal){
		$scope.modal = modal;
	})



});
