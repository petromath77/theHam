$(function() {

	// Custom JS

	$('.mix_wrap').mixItUp();

	$("a[href*='#']").mPageScroll2id();

	$('.work_menu li').on('click', function(){
		$('.work_menu li').removeClass('active');
		$(this).addClass('active');
	});

	$('.menu_trigger, .menu_wrap li').on('click', function(){
		$('.menu_cont').fadeToggle();
	});


	$(window).scroll('on', function(event){
			if(window.pageYOffset > 50 ){
				$('.head_row').css("background-color", "rgba(0, 0, 0, 0.9)");
			}else{
				$('.head_row').css("background-color", "rgba(0, 0, 0, 0.6)");
			}
		})

});
	
		
	
