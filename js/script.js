var $navTop = 441;
var pegarStyky = function(){
	var $scrollTop = $(window).scrollTop();
	
	if($scrollTop >= $navTop)
	{
		$(".menu").addClass('stiky');
		$(".Logo").addClass('Logo2').removeClass('Logo');
		
		
	}
	else{
		$(".menu").removeClass('stiky');
		$(".Logo2").addClass('Logo').removeClass('Logo2');
		
	}

}
$(window).on('scroll',pegarStyky);