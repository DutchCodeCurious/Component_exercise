export const Book = ({ book, returnBook, borrowBook }) => {
  console.log("Book");
  return (
    <>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      {book.available ? (
        <button onClick={() => borrowBook(book.id)}>Borrow</button>
      ) : (
        <button onClick={() => returnBook(book.id)}>Return</button>
      )}
    </>
  );
};
