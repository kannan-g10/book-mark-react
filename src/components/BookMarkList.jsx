import React, { useContext } from 'react';
import { BookMarkContext } from '../store/BookMarkContext';

const BookMarkList = ({ bookMark, onOpen }) => {
  const { getBookMarks, deleteBookMarks } = useContext(BookMarkContext);

  const handleDelete = () => {
    deleteBookMarks(bookMark._id);
    getBookMarks();
  };

  const handleEdit = () => {
    onOpen(bookMark);
  };

  return (
    <div className="m-5 flex gap-0 justify-center w-1/2 mx-auto">
      <p className="text-xl text-left mx-5 w-[45%]">
        {bookMark.title + ' >'}
        <span className="mx-3">
          <a
            href={bookMark.url}
            target="_blank"
            className="underline text-blue-500 active:text-purple-500"
          >
            {bookMark.url}
          </a>
        </span>
      </p>
      <div>
        <button
          className="px-5 py-2 mx-2 w-24 bg-red-400 hover:bg-red-500 rounded-lg text-white"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className="px-5 py-2 mx-2 w-24 bg-teal-400 hover:bg-teal-500 rounded-lg text-white"
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default BookMarkList;
