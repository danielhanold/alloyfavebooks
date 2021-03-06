// Access "books" collection locally.
var myBooks = Alloy.Collections.books;
myBooks.fetch();

// Display the contens of the collection.
Ti.API.info(myBooks.toJSON());


function addBook(e) {
  var addBookController = Alloy.createController('addbook');
  var addBookView = addBookController.getView();

  // On iOS, open the book view in the navigation window.
  if (OS_IOS) {
    $.navGroupWin.openWindow(addBookView);
  }

  // On Android, simply open the window.
  if (OS_ANDROID) {
    addBookView.open();
  }
};


function showBook(e) {
  var selectedBook = e.source;
  var args = {
    title: selectedBook.title,
    author: selectedBook.author
  };

  // Get the book view from the book controller.
  var bookController = Alloy.createController('bookdetails', args);
  var bookView = bookController.getView();

  // On iOS, open the book view in the navigation window.
  if (OS_IOS) {
    $.navGroupWin.openWindow(bookView);
  }

  // On Android, simply open the window.
  if (OS_ANDROID) {
    bookView.open();
  }

  Ti.API.error(JSON.stringify(e.source));
};



// Create platform-specific window handling.
// Android uses a simple window as the top-level view in index.xml,
// iOS uses a Navigation window.
if (OS_IOS) {
  $.navGroupWin.open();
}

if (OS_ANDROID) {
  $.index.open();
}
