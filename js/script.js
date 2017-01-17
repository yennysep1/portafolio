
$(document).ready(function(){

	// To activate collapse toggle
	$(".button-collapse").sideNav();

	//To active the tooltips
	 $('.tooltipped').tooltip({delay: 50});

});

	// to active filter projects
	$(document).on(click, function(){
	  $('#box').mixItUp();
	});

	//ancla nav

	$(function(){

     $('header ul li a').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 5000);

                 return false;
            }
       }

   	});
});

// up scroll

$(document).ready(function(){

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
});