

$(document).ready(function(){

// FUNCION MENU HAMBURGESA

$(".hamburger").click(function() {
  $(this).toggleClass("clicked");
  $('.menu').toggle();
});

// ICONO SUBIR - SCROLL

	$('#up').click(function(){
		$('body,html').animate({
			scrollTop: '0px'
		}, 1000)
	})

	$(window).scroll(function(){

		if ($(this).scrollTop() > 0){
			$('#up').slideDown(100);
		}else {
			$('#up').slideUp(100);
		}
	});

// FUNCION ANCLA MENU

$(function(){

     $('#home ul li a').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 3000);

                 return false;
            }
       }

   	});
});

    // FUNCIONA PARA FILTRAR PORTAFOLIO 

$("#portafolio-filtro li a").click(function() {

 $("#portafolio-filtro li a.active").removeClass('active');

 $(this).addClass('active');

 var filterValue = 'cat-' + $(this).text().toLowerCase().replace(' ', '-');

 if (filterValue === "cat-todo") {
		$('.portafolio-entrada').removeClass('escondidas');
	} else {
		
		$(".portafolio-entrada").each(function() {
			if (!$(this).hasClass(filterValue)) {
				$(this).addClass('escondidas');
			} else {
				$(this).removeClass('escondidas');
			}
		});
	}

	return false;
	
});

}); 





