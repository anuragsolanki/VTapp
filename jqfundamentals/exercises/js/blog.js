$('#blog h3').bind('click', function(event){
	event.preventDefault();
	var post = $(this);
	post.siblings().slideToggle();
	
	post.parent().siblings().find('p.excerpt').slideUp();
});