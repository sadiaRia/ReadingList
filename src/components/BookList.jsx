import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from '../components/BookDetails';

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map(book =>
          <BookDetails book={book} key={book.id} />
        )}
      </ul>
    </div>
  ) : (
      <div className="empty">
        No Books to read.Hello boring time ..... :(
      </div>
    );
}

export default BookList;
