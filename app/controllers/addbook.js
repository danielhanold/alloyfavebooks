var args = arguments[0] || {};

// Access the existing books collection.
var myBooks = Alloy.Collections.books;

// When window opens, focus the title field.
$.addbook.addEventListener('open', function(e) {
  $.titleInput.focus();
  Ti.API.error('window got opened. focus text field');
});

function addBook(e) {
  Ti.API.error(e);
};