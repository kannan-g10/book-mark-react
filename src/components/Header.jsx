import React from 'react';

const Header = ({ onOpen }) => {
  return (
    <div className="text-center gap-4 mt-10">
      <h1 className="font-bold text-5xl m-3 font-mono">BookMark Website</h1>
      <button
        className="bg-green-200 hover:bg-green-300 p-3 m-3 rounded-lg font-bold text-xl"
        onClick={onOpen}
      >
        Add New
      </button>
    </div>
  );
};

export default Header;
