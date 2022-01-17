import React from 'react';
import Layout from '../Layout';
import Header from '../Header';
import HomeView from '../../pages/HomeView';
import AppState from '../../context/useAppState';

function App() {
  return (
    <AppState>
      <Layout>
        <Header />
        <HomeView />
      </Layout>
    </AppState>
  );
}

export default App;
