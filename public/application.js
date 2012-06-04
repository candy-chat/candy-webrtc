function showArrow(button) {
	
}

$(document).ready(function() {
	$('#demobutton').click(function() {
		var showcase = $('#showcase');
		if(showcase.hasClass('demomode')) {
			showcase.html('');
			showcase.removeClass('demomode');
			$(this).text('Try the Demo').removeClass('demomode');
			$('#demoarrow').stop(true, true).fadeOut();
			$('body article').stop().animate({'width': 960});
		} else {
			$('body article').stop().animate({'width': $('body').width() - 30});
			$('html,body').stop().animate({'scrollTop': Math.floor(showcase.offset().top) + 1});
			showcase.html('<iframe src="http://webrtc-meibel.rhcloud.com" scrolling="no" frameborder="0"></iframe>');
			showcase.addClass('demomode');
			console.log($('#showcase iframe'));
			$('#showcase iframe').css({'width': $('body').width() - 32 + 'px', 'height': showcase.height() - 2 + 'px'});
			$(this).text('ONLINE').addClass('demomode');
			$('#demoarrow').stop(true, true).fadeIn();
		}
	});	
});
