import { useState } from 'react';
import Body from './components/Body';
import Header from './components/Header';
import Modal from './UI/Modal';
import BookMarkContextProvider from './store/BookMarkContextProvider';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonName, setButtonName] = useState('Add');
  const [editingBookmark, setEditingBookmark] = useState(null);

  const handleUpdateOpen = updateId => {
    setIsModalOpen(true);
    setButtonName('Update');
    setEditingBookmark(updateId);
  };

  const handlePostOpen = () => {
    setIsModalOpen(true);
    setButtonName('Add');
    setEditingBookmark(null);
  };

  return (
    <BookMarkContextProvider>
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          buttonName={buttonName}
          bookmark={editingBookmark}
        />
      )}
      <Header onOpen={handlePostOpen} />
      <Body onOpen={handleUpdateOpen} />
    </BookMarkContextProvider>
  );
}

export default App;
