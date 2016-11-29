/*(function ($) {
  $(document).ready(function(){
    if(window.innerWidth < 480){
	// hide .navbar first
	$(".navbar").hide();
	//fade in .navbar
	$(function () {
		$(window).scroll(function () {
            //set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 300) {
				$('.navbar').fadeIn();
				//$('.navbar').fadeOut();
			} else {
				//$('.navbar').fadeIn();
				$('.navbar').fadeOut();
			}
		});

	}
	});

});
  }(jQuery);
*/
