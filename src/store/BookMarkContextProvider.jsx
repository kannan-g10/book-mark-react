import React, { useContext, useEffect, useState } from 'react';
import { BookMarkContext } from './BookMarkContext';
import { API_URL } from '../constants/API_URL';
import axios from 'axios';

const BookMarkContextProvider = ({ children }) => {
  const [bookMarks, setBookMarks] = useState([]);

  async function getBookMarks() {
    const res = await axios.get(API_URL);
    setBookMarks(res.data);
  }

  async function deleteBookMarks(id) {
    const res = await axios.delete(API_URL + '/' + id);
    getBookMarks();
  }

  async function updateBookMarks(id) {
    const res = await axios.put(API_URL + '/' + id, { title, url });
    getBookMarks();
  }

  useEffect(() => {
    getBookMarks();
  }, []);

  return (
    <BookMarkContext.Provider
      value={{ bookMarks, getBookMarks, deleteBookMarks }}
    >
      {children}
    </BookMarkContext.Provider>
  );
};

export default BookMarkContextProvider;
