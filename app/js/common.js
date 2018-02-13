$(function() {

	// Custom JS

	$('.mix_wrap').mixItUp();

	$("a[href*='#']").mPageScroll2id();

	$('.work_menu li').on('click', function(){
		$('.work_menu li').removeClass('active');
		$(this).addClass('active');
	});

	$('.menu_wrap li a').on('click', function(){
		$('.menu_wrap li a').removeClass('active_menu');
		$(this).addClass('active_menu');
	});

	$('.menu_trigger, .menu_wrap li').on('click', function(e){
		if( $('.menu_cont').css('opacity') === '0'){
			$('.menu_cont').animate({
				opacity: "1"
			}, 1000);
			$('.menu_cont').css('display','block');
		}else{
			$('.menu_cont').animate({
				opacity: "0",
			}, 1000);
			$('.menu_cont').css('display','none');
		}
		e.preventDefault();
	});


	//validation//
	$(function () { $('input, select, textarea').not('[type=submit]').jqBootstrapValidation(); } );

	//up_menu change background//
	$(window).scroll('on', function(event){
			if(window.pageYOffset > 50 ){
				$('.head_row').css("background-color", "rgba(0, 0, 0, 0.9)");
			}else{
				$('.head_row').css("background-color", "rgba(0, 0, 0, 0.6)");
			}
		})
	//animation//
	$(".header_text h1").animated("fadeInUp","fadeOutDown");
	$(".header_text h3").animated("fadeInUp","fadeOutDown");
	$(".advants h2").animated("fadeInUp","fadeOutDown");
	$(".about h2").animated("fadeInUp","fadeOutDown");
	$(".work h2").animated("fadeInUp","fadeOutDown");
	$(".testimonials h2").animated("fadeInUp","fadeOutDown");
	$(".team h2").animated("fadeInUp","fadeOutDown");
	$(".in_touch h2").animated("fadeInUp","fadeOutDown");
	$(".advants_wrap").animated("fadeIn","fadeOut"); 
	$(".tab").animated("fadeIn","fadeOut");  
	$(".work_menu").animated("slideInLeft","slideOutLeft"); 
	$(".carousel_wrap").animated("bounceInLeft","bounceOutLeft"); 
	$("iframe").animated("bounceInLeft","bounceOutLeft"); 
	$(".form_wrap").animated("bounceInRight","bounceOutRight"); 

});

//pre-loader//
$(window).on('load', function() { 
	$('.loader_inner').fadeOut(); 
	$('.loader').delay(400).fadeOut('slow'); 
});	
		
	
