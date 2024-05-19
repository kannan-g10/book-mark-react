import React, { useContext, useEffect, useState } from 'react';
import { BookMarkContext } from './BookMarkContext';
import { API_URL } from '../constants/API_URL';
import axios from 'axios';

const BookMarkContextProvider = ({ children }) => {
  const [bookMarks, setBookMarks] = useState([]);

  useEffect(() => {
    getBookMarks();
    async function getBookMarks() {
      //   const res = await axios.get(API_URL);
      setBookMarks(res.data);
    }
  }, []);

  console.log(bookMarks);

  return (
    <BookMarkContext.Provider value={bookMarks}>
      {children}
    </BookMarkContext.Provider>
  );
};

export default BookMarkContextProvider;
