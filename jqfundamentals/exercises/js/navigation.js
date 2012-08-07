$('#nav li').bind({
  mouseenter: function() {
		var topList = $(this);
		topList.addClass('hover').siblings().removeClass('hover');
		topList.find('ul').show();
  },
  mouseleave: function() {
		var topList = $(this);
		topList.parent().children().removeClass('hover');
		topList.find('ul').hide();
  }
});