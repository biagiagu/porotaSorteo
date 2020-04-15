// Al finalizarse de cargar el DOM:
$(function() {
	console.log('Pase por el index!');
	// Se obtienen del backend y cargan en el DOM las competencias existentes
	var sorteosController = new SorteosController();
	 sorteosController.obtenerUsuarios();
	 
});
