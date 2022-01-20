import React from 'react';
import { render } from '@testing-library/react';
import AppContext from '../context/appContext';
import { MOCK_CREDENTIALS } from '../utils/const';
import { MemoryRouter } from 'react-router';
import ValidateSession from '../components/ValidateSession';
const initialState = {
  searchTerm: '',
  styles: {
    customCard: { backgroundColor: '#fff', fontColor: '#000' },
    layout: { backgroundColor: 'antiquewhite', fontColor: '#000000' },
  },
  userProps: MOCK_CREDENTIALS,
  isLogged: true,
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
          <ValidateSession />
        </AppContext.Provider>
      </MemoryRouter>
    );
  });

  it('Component is rendered with no auth', () => {
    initialState.isLogged = false;
    render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <ValidateSession />
        </AppContext.Provider>
      </MemoryRouter>
    );
  });
});
