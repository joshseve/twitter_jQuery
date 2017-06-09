// IIFE - Immediately Invoked Function Expression
(function () {
	var contador = 0;

	var cargarPagina = function () {
		$("#tweet").submit(agregarToDo);
		$("#message").keyup(validarContenido);
    	$("#message").keyup(caracteres);
	};

	var agregarToDo = function (e) {
		e.preventDefault();
		// Obtenemos datos
		var $contenedor = $("#posts");
		var $mensajeContenedor = $("#message");
		var $botonAgregar = $("#add-button");
		var mensaje = $mensajeContenedor.val();

		// Creamos elementos
		var $postContenedor = $("<article />", { "class": "well" });
		var $postCheck = $("<input type='checkbox' />");
		var $postTexto = $("<p />");

		var identificador = "marcador-" + contador;

		// Personalizamos elementos
		$postCheck.id = identificador;
		$postTexto.attr("for", identificador);
		$postTexto.text(mensaje);

		$postCheck.click(eliminarToDo);

		// Agregarlos al DOM
		$postContenedor.append($postCheck);
		$postContenedor.append($postTexto);

		// Agregarlo a un elemento existente para visualizarlo
		$contenedor.prepend($postContenedor);

		// Borrar contenido de textarea
		$mensajeContenedor.val("");
		$botonAgregar.attr("disabled", true);

		contador++;
	};

	var eliminarToDo = function () {
		$(this).parent().remove();
	};

	var validarContenido = function () {
		var $addButton = $("#add-button");
		if($(this).val().trim().length > 0) {
			$addButton.removeAttr("disabled");
		} else {
			$addButton.attr("disabled", true);
		}
	};

	  var caracteres = function () {
	      var longitudMaxima = 140;
	      var $numero = $("#numero");
	      var $mensajeContenedor = $("#message");
	      var caracteres = $mensajeContenedor.val().length;
	      var $addButton = $("#add-button");
	      var final = longitudMaxima - caracteres;

	      $numero.text(final);

	      switch (final) {
	      	case 0:
	      		$addButton.attr("disabled", true);
	      		break;
					case 20:
						$numero.css("color","#65e814");
						break;
					case 10:
						$numero.css("color","#ff0000");
						break;
	      }
	  };

	$(document).ready(cargarPagina);
})();
