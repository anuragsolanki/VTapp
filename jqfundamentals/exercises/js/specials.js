$(function(){
	var $newDiv = $('<div></div>').appendTo('#specials');

	$('#specials select[name]=day')
	.bind('change', function(){
		$.ajax({
			url: "data/specials.json",
			type: "GET",
			dataType: "json",
			cache: true,
			success: function(json){
				console.log('success');
				// alert(json);
				$newDiv.text(json);
			}
		});
	});

	$('div#specials input[type]=submit').parent().remove();
});