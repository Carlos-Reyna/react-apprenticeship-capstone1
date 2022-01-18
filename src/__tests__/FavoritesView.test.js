import React from 'react';
import { render } from '@testing-library/react';
import FavoritesView from '../pages/FavoritesView';
import { MOCK_CREDENTIALS } from '../utils/const';
import AppContext from '../context/appContext';
import { MemoryRouter } from 'react-router-dom';

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
  userProps: MOCK_CREDENTIALS,
  toggleStyles,
  setSearchTerm,
};

describe('Testing the component elements', () => {
  test('Component is rendered', () => {
    render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <FavoritesView></FavoritesView>
        </AppContext.Provider>
      </MemoryRouter>
    );
  });
});
