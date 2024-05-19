import { useState } from 'react';
import Body from './components/Body';
import Header from './components/Header';
import Modal from './UI/Modal';
import BookMarkContextProvider from './store/BookMarkContextProvider';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <BookMarkContextProvider>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
      <Header onOpen={() => setIsModalOpen(true)} />
      <Body onOpen={() => setIsModalOpen(true)} />
    </BookMarkContextProvider>
  );
}

export default App;
