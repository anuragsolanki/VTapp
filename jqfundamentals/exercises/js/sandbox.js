/* ==================================================================================== */
// 2.1 Selecting
/* ==================================================================================== */

// 1 Select all of the div elements that have a class of "module".
console.log($('div.module'));

// 2 Come up with three selectors that you could use to get the third item in the #myList unordered list.
console.log($('ul#myList li:nth-child(3)'));
// This is my preferred approach as it won't have to loop through all children of ul#myList

// Other selectors
console.log($('ul#myList li:eq(2)'));
console.log($('ul#myList').children()[2]);

// 3 Select the label for the search input using an attribute selector.
console.log($('form#search label[for]=q'));

// 4 Figure out how many elements on the page are hidden
console.log($(':hidden').length);

// 5 Figure out how many image elements on the page have an alt attribute.
console.log($('img[alt]').length);

// 6 Select all of the odd table rows in the table body.
console.log($('table#fruits tbody tr:even'));


/* ==================================================================================== */
// 2.2 Traversing
/* ==================================================================================== */

// 1 Select all of the image elements on the page; log each image's alt attribute.
$('img').each(function(index) {
	console.log($(this).attr('alt'));
})

// 2 Select the search input text box, then traverse up to the form and add a class to the form.
$('form#search .input_text').closest('form').addClass('red');

// 3 Select the list item inside #myList that has a class of "current" and remove that class from it; add a class of "current" to the next list item.
$('ul#myList li.current').removeClass('current').next().addClass('current');

// 4 Select the select element inside #specials; traverse your way to the submit button.
$('#specials select').parent().parent().find('input[type]=submit');

// 5 Select the first list item in the #slideshow element; add the class "current" to it, and then add a class of "disabled" to its sibling elements.
$('#slideshow li').first().addClass('current').siblings().addClass('disabled');


/* ==================================================================================== */
// 2.3 Manipulating
/* ==================================================================================== */

// 1  Add five new list items to the end of the unordered list #myList.
for(var i=0; i<5; i++) {
	$('#myList').append('<li>List Item ' + (i + 8) + '</li>');
}
	
// 2  Remove the odd list items
$('#myList li:even').remove();

// 3 	 Add another h2 and another paragraph to the last div.module
$('div.module:last').append('<h2>Heading</h2>').append('<p>Paragraph</p>');

// 4  Add another option to the select element; give the option the value "Wednesday"
$('div#specials select').append("<option value='wednesday'>Wednesday</option>");

// 5  Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
$('<div></div>').addClass('module').append($('img').first().clone()).appendTo($('div.module').last().parent());