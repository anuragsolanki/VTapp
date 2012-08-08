$(document).ready(function(){
	var slideshow = $('#slideshow');
	$('body').prepend(slideshow);
	var nav_counter = $('<div></div>').insertAfter(slideshow);
	
	var allList = slideshow.find('li');
	var count = allList.length;
	slideshow.find('li').hide();
	
	var i = 0;
	
	var showElement = function() {
		i = (i >= count) ? 1 : (i+1);
		var oldElement = slideshow.find('li:visible');
		if(oldElement.length) {
			oldElement.fadeOut(250, showNewElement);
		} else {
			showNewElement();
		}
	}
	
	var showNewElement = function() {
		updateNavCounter();
		var newElement = slideshow.find('li:nth-child('+i+')');
		newElement.fadeIn(250);
	}
	
	var updateNavCounter = function() {
		$(nav_counter).text(i + ' of ' + count);
	}
	
	showElement();
	setInterval(showElement, 1500);
	
});
