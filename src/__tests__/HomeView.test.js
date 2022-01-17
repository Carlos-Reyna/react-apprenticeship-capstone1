import React from 'react';
import { render } from '@testing-library/react';
import HomeView from '../pages/HomeView/Homeview.page';
import AppContext from '../context/appContext';
const toggleStyles = (value) => {
  return value;
};

const setSearchTerm = (value) => {
  initialState.searchTerm = value;
};

let initialState = {
  searchTerm: '',
  videos: [],
  styles: {
    customCard: { backgroundColor: '#fff', fontColor: '#000' },
    layout: { backgroundColor: 'antiquewhite', fontColor: '#000000' },
  },
  toggleStyles,
  setSearchTerm,
};

describe('Testing the component elements', () => {
  test('Component is rendered', () => {
    render(
      <AppContext.Provider value={initialState}>
        <HomeView />
      </AppContext.Provider>
    );
  });
});
