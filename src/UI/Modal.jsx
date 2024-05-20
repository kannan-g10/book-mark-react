import React, { useContext, useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { BookMarkContext } from '../store/BookMarkContext';
import axios from 'axios';
import { API_URL } from '../constants/API_URL';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ onClose, buttonName, bookmark }) => {
  const { getBookMarks } = useContext(BookMarkContext);

  const [title, setTitle] = useState(bookmark ? bookmark.title : '');
  const [url, setUrl] = useState(bookmark ? bookmark.url : '');

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [bookmark]);

  const handleAddItem = async () => {
    onClose();
    if (title === '' || url === '') return;
    await axios.post(API_URL, { title, url });
    getBookMarks();
  };

  const handleUpdate = async () => {
    onClose();
    await axios.put(`${API_URL}/${bookmark._id}`, { title, url });
    getBookMarks();
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-black/75" onClick={onClose}></div>
        <motion.div
          className="relative bg-white w-2/5 p-10 rounded-xl bottom-44 flex flex-col justify-center items-center gap-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          exit={{ y: 50, opacity: 1, transition: { delay: 0.5 } }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2">
            <label htmlFor="title" className="text-xl">
              WebSite Title :
            </label>
            <input
              type="text"
              ref={inputRef}
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
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
              value={url}
              onChange={e => setUrl(e.target.value)}
              id="url"
              placeholder="Url..."
              className="border-2 mx-3 outline-none px-2 py-1"
            />
          </div>
          <button
            className="bg-[#ff305a] hover:bg-[#d7294c] text-white font-semibold text-lg px-5 py-2 rounded-lg"
            onClick={buttonName === 'Add' ? handleAddItem : handleUpdate}
          >
            {buttonName}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.getElementById('overlays')
  );
};

export default Modal;
