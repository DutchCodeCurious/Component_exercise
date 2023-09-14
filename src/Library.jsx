import { collection } from "./collection";
import { useState } from "react";
import { Books } from "./Books";
import { Category } from "./Category";
import { Book } from "./Book";

export default () => {
  const [books, setBooks] = useState(collection.books);

  const borrowBook = (id) => {
    const newBooks = books.map((book) => {
      if (book.id === id) {
        book.available = false;
      }
      return book;
    });
    setBooks(newBooks);
  };

  const returnBook = (id) => {
    const newBooks = books.map((book) => {
      if (book.id === id) {
        book.available = true;
      }
      return book;
    });
    setBooks(newBooks);
  };

  const catBooks = books.filter((book) => book.category === "programming");

  return (
    <div className="App">
      <h1>Library</h1>
      <Books amount={books.length}>
        <Category amount={catBooks.length}>
          {catBooks.map((book) => (
            <Book
              key={book.id}
              book={book}
              returnBook={returnBook}
              borrowBook={borrowBook}
            />
          ))}
        </Category>
      </Books>
    </div>
  );
};
