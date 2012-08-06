//  4.2 Add tabbed navigation. 

$(document).ready(function() {
	var modules = $('div.module');
	var list = $('<ul></ul>').insertBefore(modules.eq(0));
	
	modules.each(function() {
		var mod = $(this);
		var h2_value = mod.find('h2').text();
		var tab = $('<li>' + h2_value + '</li>').appendTo(list);
		tab.bind('click', function(){
			tab.addClass('current').siblings('').removeClass('current');
			mod.show().siblings('.module').hide();
		});
	});
	
	list.find('li:first').addClass('current');
	modules.eq(0).show();
});