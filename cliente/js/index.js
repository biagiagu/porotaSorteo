// Al finalizarse de cargar el DOM:
$(function() {   //esto es lo mismo que $(document).ready(function(){})
	console.log('Pase por el index!');
	// Se obtienen del backend y cargan en el DOM las competencias existentes
	var sorteosController = new SorteosController();
    
    if (usuarioLogueado){
        sorteosController.obtenerUsuarios();
    }else{
        
    }
	 
});
