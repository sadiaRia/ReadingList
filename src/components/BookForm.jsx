import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext'
const BookForm = (props) => {
  // const { addBook } = useContext(BookContext);

  const { dispatch } = useContext(BookContext);
  // const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');
  const [bookObj,setBookObj] = useState({title:'',author:''});
  const setFiledOnChange = (e) => {
    // e.target.name === 'title' ? setTitle(e.target.value) : setAuthor(e.target.value)
    //setSomething({[e.target.name]:e.target.value})
    setBookObj({ ...bookObj, [e.target.name]: e.target.value });   //save value in object
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = bookObj.title;
    const author = bookObj.author;
    dispatch({ type: 'ADD_BOOK', book: bookObj })
    // addBook(title, author);
    // setTitle('');
    // setAuthor('');
  }
  const {title,author} = bookObj;
  return (
    <form>
      <input type='text' name="title" onChange={setFiledOnChange} placeholder="Enter title" value={title} required />
      <input type='text' name="author" onChange={setFiledOnChange} placeholder="Enter Author Name" value={author} required />
      <button className="submitForm" onClick={handleSubmit}>Add Book</button>
    </form>
  );
}

export default BookForm;