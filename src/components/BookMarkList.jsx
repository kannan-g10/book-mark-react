import React, { useContext } from 'react';

const BookMarkList = ({ bookMark, onOpen }) => {
  return (
    <div className="m-5 flex gap-3 justify-center w-1/2 mx-auto">
      <p className="text-xl w-2/3">
        {bookMark.title + ' >'}
        <span className="mx-3">
          <a
            href="#"
            target="_blank"
            className="underline text-blue-500 active:text-purple-500"
          >
            {bookMark.url}
          </a>
        </span>
      </p>
      <button className="px-5 py-2 bg-red-400 hover:bg-red-500 rounded-lg text-white">
        Delete
      </button>
      <button
        className="px-5 py-2 bg-teal-400 hover:bg-teal-500 rounded-lg text-white"
        onClick={onOpen}
      >
        Edit
      </button>
    </div>
  );
};

export default BookMarkList;
