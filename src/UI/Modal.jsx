import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/75" onClick={onClose}></div>
      <div className="relative bg-white w-2/5 p-10 rounded-xl bottom-44 flex flex-col justify-center items-center gap-6">
        <div className="p-2">
          <label htmlFor="title" className="text-xl">
            WebSite Title :
          </label>
          <input
            type="text"
            id="title"
            placeholder="Title...."
            className="border-2 mx-3 outline-none px-2 py-1"
          />
        </div>
        <div className="p-2">
          <label htmlFor="url" className="text-xl">
            WebSite URL :
          </label>
          <input
            type="text"
            id="url"
            placeholder="Url..."
            className="border-2 mx-3 outline-none px-2 py-1"
          />
        </div>
        <button
          className="bg-[#ff305a] hover:bg-[#d7294c] text-white font-semibold text-lg px-5 py-2 rounded-lg"
          onClick={onClose}
        >
          Add New
        </button>
      </div>
    </div>,
    document.getElementById('overlays')
  );
};

export default Modal;
