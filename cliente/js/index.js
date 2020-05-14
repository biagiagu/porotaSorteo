
// Al finalizarse de cargar el DOM:
$(function() {   //esto es lo mismo que $(document).ready(function(){})
	console.log('Pase por el index!');
	
	// Se obtienen del backend y cargan en el DOM la lista de personas registradas si el usuario esta logeado
	var sorteosController = new SorteosController();
	
	var usuarioLogueado = true;
  
	if (usuarioLogueado){
        sorteosController.obtenerUsuarios();
    }else{
        
    }
	 
});
