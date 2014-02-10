var args = arguments[0] || {};

// Access the existing books collection.
var myBooks = Alloy.Collections.books;

// When window opens, focus the title field.
$.addbook.addEventListener('open', function(e) {
  $.titleInput.focus();
  Ti.API.error('window got opened. focus text field');
});

// Add the book to the collection and close the window.
function addBook(e) {
  var title = $.titleInput.value || 'No Title';
  var author = $.authorInput.value || 'No Author';

  // Create a "book" model.
  var book = Alloy.createModel('books', {
    title : title,
    author: author
  });

  // Add book model to the collection.
  myBooks.add(book);

  // Persiste the book in the database.
  book.save();

  $.addbook.close();
};