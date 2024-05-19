import React, { useContext } from 'react';
import { BookMarkContext } from '../store/BookMarkContext';

import BookMarkList from './BookMarkList';

const Body = ({ onOpen }) => {
  const bookMarks = useContext(BookMarkContext);
  return (
    <div className="mt-10 text-center flex flex-col gap-5">
      <h1 className="text-4xl font-mono font-semibold">All BookMarks</h1>
      <div>
        {bookMarks.map(book => (
          <BookMarkList key={book._id} bookMark={book} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
};

export default Body;
