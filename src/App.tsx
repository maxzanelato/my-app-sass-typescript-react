import React from 'react';

import { ToastContainer } from 'react-toastify';

import { Users } from './components/Users';
import { Filter } from './components/Filter';
import { Header } from './components/Header';
import { UserContextProvider } from './contexts/UserContext';

import './styles/global.scss';
import 'react-toastify/dist/ReactToastify.min.css';


const App: React.FC = () => {
  return (
    <div>
      <Header />

      <main>
        <UserContextProvider>
          <Filter />

          <Users />
        </UserContextProvider>
      </main>

      <ToastContainer />
    </div>
  );
}

export default App;
