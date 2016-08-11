app.service('contatoService',function ContatoService($http){


 this.listaMotoristas = function(){
  return $http.get('http://alexpereira.website:3000/api/motoristas');
 }

 this.addMotorista = function(motorista){
 	return $http.post('http://alexpereira.website:3000/api/motoristas',motorista);
 }

  this.editMotorista = function(motorista){
    return $http.put('http://alexpereira.website:3000/api/motorista/'+motorista._id,motorista);
  }
});
