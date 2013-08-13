$(document).ready(function() {
	$('#blog').find('h3')
	.each(function() {
		var $this = $(this);
		var $newDiv = $('<div id=\'a\'></div>').insertAfter($this);
		$this.data('newDiv', $newDiv);
	})
	.click(function(e) {
		e.preventDefault();

		var $this = $(this);
		var link = $this.find('a').attr('href');
		var tempArray = link.split('#');
		var divId = '#' + tempArray[1];
		console.log(divId);

		var newDiv = $this.data('newDiv');
		// console.log($newDiv);
		// newDiv.load('/data/blog.html ' + divId, function(html) {
		//   console.log('Content updated!');
		// 	alert(html);
		// });
		newDiv.load("ajax.html", function(response, status, xhr) {
			alert(response);
		// if (status == "error") {
		    var msg = "Sorry but there was an error: ";
		    alert(msg + xhr.status + " " + xhr.statusText);
		  // }
		});
				
	});
});