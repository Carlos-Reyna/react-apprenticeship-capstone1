import React, { useState } from 'react';
import Layout from '../Layout';
import Header from '../Header';
import HomeView from '../../pages/HomeView';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [performSearch, setPerformSearch] = useState(true);

  const handleSearch = (e) => {
    if (e.charCode === 13) {
      setPerformSearch(true);
    }
  };

  return (
    <Layout>

      <Header
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        setSearchTerm={setSearchTerm}
      />
      <HomeView
        searchTerm={searchTerm}
        performSearch={performSearch}
        setPerformSearch={setPerformSearch}
      />

    </Layout>
  );
}

export default App;
