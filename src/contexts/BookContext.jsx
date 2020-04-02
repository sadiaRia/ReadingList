import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'Harry Potter', author: 'J. K. Rowling', id: 1 },
    { title: 'Rasha', author: 'Zafar Iqbal', id: 2 },
    { title: 'Ami Topu', author: 'Zafar Iqbal', id: 3 },
    { title: 'Lord of the Rings', author: 'J. R. R. Tolkien', id: 4 },
    { title: 'Ekaras', author: 'Zafar Iqbal', id: 5 },
    { title: 'Moyurakhi', author: 'Humayun Ahmed', id: 6 }
  ])
  const addBook = (title, author) => {
    setBooks([...books, { title: title, author: author, id: uuid() }])
  }
  const findBook = (id) => {
    return books.filter(book => book.id !== id);
  }

  const removeBook = (id) => {
    setBooks(findBook(id));
  }
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;