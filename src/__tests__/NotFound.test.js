import React from 'react';
import { render } from '@testing-library/react';
import AppContext from '../context/appContext';
import { MOCK_CREDENTIALS } from '../utils/const';
import { MemoryRouter } from 'react-router';
import NotFound from '../pages/NotFound';
const initialState = {
  searchTerm: '',
  styles: {
    customCard: { backgroundColor: '#fff', fontColor: '#000' },
    layout: { backgroundColor: 'antiquewhite', fontColor: '#000000' },
  },
  userProps: MOCK_CREDENTIALS,
};

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Testing the component elements', () => {
  it('Component is rendered', () => {
    render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <NotFound />
        </AppContext.Provider>
      </MemoryRouter>
    );
  });
});
