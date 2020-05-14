// Al finalizarse de cargar el DOM:
$(function () {
	var sorteosController = new SorteosController();
	let dataValidation = false;
	let formulario = $("#formularioAltaUsuarios");

	// Se obtienen y cargan los géneros, directores/as y actores/actrices en los elementos select
	// sorteosController.cargarGeneros();
	// sorteosController.cargarDirectores();
	// sorteosController.cargarActores();

	let checkPassword, checkNombre, checkApellido, checkMail;

	//Verificamos que el password sea el correcto
	let password = $("input#password");
	let confirmarPassword =$("input#confirmarPassword");
	password.focusout(() => {
		checkPassword = verificarPassword(password.val());
	});
	confirmarPassword.change(()=>{
		checkPassword = verificarPassword(password.val(), confirmarPassword.val());
	});
	
	let nombre = $('input#nombre');
	nombre.focusout(()=>{
		if(nombre.val().length==0){
			$("div.inputNombre small").css("color", "red");
			$("div.inputNombre small").text("El nombre no puede estar en blanco");
			checkNombre=false;
		}else{
			$("div.inputNombre small").css("color", "grey");
			$("div.inputNombre small").text("Nombre ok");
			checkNombre=true;
		}
	});
	let apellido = $('input#apellido');
	apellido.focusout(()=>{
		if(apellido.val().length==0){
			$("div.inputApellido small").css("color", "red");
			$("div.inputApellido small").text("El apellido no puede estar en blanco");
			checkApellido=false;
		}else{
			$("div.inputApellido small").css("color", "grey");
			$("div.inputApellido small").text("apellido ok");
			checkApellido=true;
		}
	});
	let mail = $('input#mail');
	mail.focusout(()=>{
		if(mail.val().length==0){
			$("div.inputMail small").css("color", "red");
			$("div.inputMail small").text("El mail no puede estar en blanco");
			checkMail=false;
		}else{
			$("div.inputMail small").css("color", "grey");
			$("div.inputMail small").text("e-mail ok");
			checkMail=true;
		}
	});
	
	
	formulario.submit((event) => {
		
		event.preventDefault(); // avoid to execute the actual submit of the form.
		
		console.log("hice click en Guardar Datos");
		
		if(checkNombre && checkApellido && checkPassword && checkMail){
			alert("Datos ok");
			//dataValidation=true;
		}else{
			alert("por favor revise los datos ingresados");
			dataValidation=false;
		}

		//Si los datos son correctos enviamos los datos al Server
		if(dataValidation){
			$.ajax({
				type: "POST",
				url: server + "/crearUsuario",
				data: formulario.serialize(), // form's elements.
				success: function (response) {
					alert(response); // show response from the php script.
				},
			});
		}else {
			alert("Datos invalidos.!")
		}
	});

	// Si el usuario cancela, se redirige a index.html
	$("input.cancelar").click(function () {
		window.location.replace("index.html");
	});
	
});
