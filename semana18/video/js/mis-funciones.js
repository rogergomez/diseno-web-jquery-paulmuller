$(document).ready(function(){

	/*inicio hover*/
	$('#mi-foto').hover(function(){
		$(this).attr("src","imagenes/foto-color.jpg");
	}, function(){
		$(this).attr("src","imagenes/foto-blanco-y-negro.jpg");
	});
	//fin hover

	//inicio fondo aleatorio
	var imagenes = [
		"imagenes/fondo1.jpg",
		"imagenes/fondo2.jpg",
		"imagenes/fondo3.jpg"
	];

	var cantidad = imagenes.length;
	var aleatorio = Math.floor(cantidad*Math.random());

	$('body').css("background","url("+imagenes[aleatorio]+")");
	//fin fondo aleatorio

});