import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext'
const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const setFiledOnChange = (e) => {
    e.target.name == 'title' ? setTitle(e.target.value) : setAuthor(e.target.value)
    //setSomething({[e.target.name]:e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
  }
  return (
    <form>
      <input type='text' name="title" onChange={setFiledOnChange} placeholder="Enter title" value={title} required />
      <input type='text' name="author" onChange={setFiledOnChange} placeholder="Enter Author Name" value={author} required />
      <button className="submitForm" onClick={handleSubmit}>Add Book</button>
    </form>
  );
}

export default BookForm;