$(document).ready(function($) {
	
	$('.callback_button_wrap').click(function() {
	$('.callback_window_wrap').fadeIn(500);
	$('.callback_button_wrap').fadeOut(300);
	$('.callback_window_wrap_1').fadeIn(500);
	return false;
	});	
	

	$('.callback_window-button_close').click(function() {
	$('.callback_window_wrap').fadeOut(500);
	$('.callback_button_wrap').fadeIn(500);
		return false;
	});		


$('.callback_window_wrap').click(function(e) {
	if (e.target == this){
		$('.callback_window_wrap_1').fadeOut(500);
   	$('.callback_button_wrap').fadeIn(500);
	}
	//return false;
});	



});