$(document).ready(function(){
	$('#vision').hide();
	$('#valores').hide();
	
	$('#btnVision').click(function(){
		$('#mision').hide();
		$('#valores').hide();
		$('#vision').show();
	});
	
	$('#btnMision').click(function(){
		$('#mision').show();
		$('#valores').hide();
		$('#vision').hide();
	});
	
	$('#btnValores').click(function(){
		$('#mision').hide();
		$('#valores').show();
		$('#vision').hide();
	});
});

$(document).ready(function(){
	$('.parallax-window').parallax({imageSrc: 'imagenes/fondo-simple.jpg'});
});

$(document).ready(function() {
  $('.flexslider').flexslider({
    animation: "slide",
	animationLoop: false,
    itemWidth: 260,
    itemMargin: 20
  });
});
