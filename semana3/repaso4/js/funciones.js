$(document).ready(function(){
	
	$('#logo').click(function(){
		$(this).animate({height: '70px'});
		//$(this).css({height: '70px'});
	});
	
	/*
	$('#link-titulo').click(function(){
		$('h3').hide();
	});
	*/
	/*
	$('#boton1').click(function(){
		$('.unParrafo').toggle();
	});
	*/
	/*
	$('#boton-2').click(function(){
		$('#parrafo1').html('Texto cambiado');
	});
	*/
	/*
	$('#boton3').click(function(){
		$('.div-uno').css('background','red');
	});
	*/
	/*
	$('#boton4').click(function(){
		$('.div-uno').removeClass('div-uno');
	});
	*/
	$('#cambiarClase').click(function(){
		$('.div-dos').addClass('div-cuatro');
	});
	$('#listar').dblclick(function(){
		$('ol').toggle();
	});
	$('#boton5').click(function(){
		$('.div-tres').toggleClass('div-cuatro');
	});
	$('#boton6').mouseleave(function(){ //mouseover, mouseleave
		$('.div-tres').toggleClass('div-cuatro');
	});
	$('.div-cuatro').mouseover(function(){
		$(this).css('background','url(img/foto-color.jpg)');
	});
	$('#boton7').click(function(){
		var nombre = $('#mi-caja').val();
		alert(nombre);
	});
	$('#mi-caja').keyup(function(){
		var nombre = $('#mi-caja').val();
		$('#nuevoTexto').text(nombre);
	});
});