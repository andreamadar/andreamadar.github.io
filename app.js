$(document).ready(function() {

	$('ul > div').hide();


	$('li').click(function () {
		
		$(this).addClass('active');
	
		$('li.active').next('div').toggle();

		$(this).removeClass('active');

	});

	
	

});