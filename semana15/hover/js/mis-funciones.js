$(document).ready(function(){
	$('#mi-foto').hover(function(){
		$(this).attr("src","imagenes/foto-color.jpg");
	}, function(){
		$(this).attr("src","imagenes/foto-blanco-y-negro.jpg");
	});
});