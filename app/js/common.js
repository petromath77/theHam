$(function() {

	// Custom JS

	$('.mix_wrap').mixItUp();

	$('.work_menu li').on('click', function(){
		$('.work_menu li').removeClass('active');
		$(this).addClass('active');
	});

	//$('.menu_trigger').on('click', function(){
		//$('.menu_wrap').slideToggle(1000);
	//});





	$(window).scroll('on', function(event){
			if(window.pageYOffset > 50 ){
				$('.head_row').css("background-color", "rgba(0, 0, 0, 0.9)");
			}else{
				$('.head_row').css("background-color", "rgba(0, 0, 0, 0.6)");
			}
		})

});
	
		
	
