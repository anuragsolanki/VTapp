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
		newDiv.load('/exercises/data/blog.html ' + divId, function(html) {
		  console.log('Content updated!');
			// alert(html);
		});
		
	});
});