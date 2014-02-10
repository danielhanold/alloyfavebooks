// Access "books" collection locally.
var myBooks = Alloy.Collections.books;

// Create a "book" model.
var book = Alloy.createModel('books', {
  title : 'Great Expectations',
  author: 'Charles Dickens'
});

// Add book model to the collection.
myBooks.add(book);

// Persiste the book in the database.
book.save();

// Display the contens of the collection.
Ti.API.info(myBooks.toJSON());


$.index.open();
