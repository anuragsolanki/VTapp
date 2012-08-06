// 4.1 Create an input hint

$(document).ready(function() {
	var form_hint = $('form#search label[for]=q').text();
	var form_input = $('form#search input.input_text');
	form_input.val(form_hint);				 												// Set the value of the search input to the text of the label element
	form_input.addClass('hint');															// Add a class of "hint" to the search input
	$('form#search label').remove();													// Remove the label element
	form_input
		.bind('focus', function(){
			$(form_input).val("").removeClass('hint');
		})																												// Bind a focus event to the search input that removes the hint text and the "hint" class
		.bind('blur', function(){
			if($(form_input).val().trim() == "") {
				$(form_input).val(form_hint).addClass('hint');
			}
		});
});