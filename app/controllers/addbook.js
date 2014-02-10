var args = arguments[0] || {};

// Access the existing books collection.
var myBooks = Alloy.Collections.books;

function addBook(e) {
  Ti.API.error(e);
};