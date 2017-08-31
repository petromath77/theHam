$(function() {

	// Custom JS

	$('.mix_wrap').mixItUp();

	$("a[href*='#']").mPageScroll2id();

	$('.work_menu li').on('click', function(){
		$('.work_menu li').removeClass('active');
		$(this).addClass('active');
	});

	$('.menu_trigger, .menu_wrap li').on('click', function(){
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
	});

	$(function () { $('input, select, textarea').not('[type=submit]').jqBootstrapValidation(); } );

	$(window).scroll('on', function(event){
			if(window.pageYOffset > 50 ){
				$('.head_row').css("background-color", "rgba(0, 0, 0, 0.9)");
			}else{
				$('.head_row').css("background-color", "rgba(0, 0, 0, 0.6)");
			}
		})

});
$(window).on('load', function() { 
	$('.loader_inner').fadeOut(); 
	$('.loader').delay(400).fadeOut('slow'); 
});	
		
	
