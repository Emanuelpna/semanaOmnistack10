import React from 'react';

import './global.css';

import DevsContextProvider from './context/DevsContext';

import Aside from './components/Aside';
import Main from './components/Main';
import Layout from './components/Layout';

function App() {
  
  return (
    <DevsContextProvider>
      <Layout>
        <Aside />
        <Main />
      </Layout>
    </DevsContextProvider>
  );
}

export default App;
