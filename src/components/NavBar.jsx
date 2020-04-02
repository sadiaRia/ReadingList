import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const NavBar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className='navbar'>
      <h1> Reading List </h1>
      <p>Currenty you have to get through {books.length} books ....HappY Reading ^_^</p>
    </div>
  );
}

export default NavBar;
