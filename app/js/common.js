$(function() {

	// Custom JS

	$(".mix_wrap").mixItUp();

	$('.work_menu li').on('click', function(){
		$('.work_menu li').removeClass('active');
		$(this).addClass('active');
	});


});
