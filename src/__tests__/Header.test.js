import { render, fireEvent, waitFor } from '@testing-library/react';
import Header from '../components/Header/Header.component';
import React from 'react';
import AppContext from '../context/appContext';
import { MemoryRouter } from 'react-router';
import { MOCK_CREDENTIALS, USER_DEFAULT_PROPS } from '../utils/const';

beforeEach(() => {
  let portalRoot = document.getElementById('modal');
  if (!portalRoot) {
    portalRoot = document.createElement('div');
    portalRoot.setAttribute('id', 'modal');
    document.body.appendChild(portalRoot);
  }
});

const toggleStyles = (value) => {
  return value;
};

const setSearchTerm = (value) => {
  initialState.searchTerm = value;
};

const logout = () => {
  initialState = {
    ...initialState,
    userProps: USER_DEFAULT_PROPS,
    isLogged: false,
  };
};

let initialState = {
  searchTerm: '',
  videos: [],
  styles: {
    customCard: { backgroundColor: '#fff', fontColor: '#000' },
    layout: { backgroundColor: 'antiquewhite', fontColor: '#000000' },
  },
  isLogged: true,
  userProps: MOCK_CREDENTIALS,
  toggleStyles,
  setSearchTerm,
  logout,
};

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Testing the component elements', () => {
  test('Text input should be present', () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <Header />
        </AppContext.Provider>
      </MemoryRouter>
    );
    const searchInput = getByTitle('header-input-search');
    expect(searchInput).toBeInTheDocument();
  });

  test('Login button should be present', () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <Header />
        </AppContext.Provider>
      </MemoryRouter>
    );
    const switchInput = getByTitle('header-input-switch');
    expect(switchInput).toBeInTheDocument();
  });

  test('Switch input should be present', () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <Header />
        </AppContext.Provider>
      </MemoryRouter>
    );
    const button = getByTitle('header-button-login');
    expect(button).toBeInTheDocument();
  });

  test('Switch value changed to on', () => {
    const { getByTitle, getAllByRole } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <Header />
        </AppContext.Provider>
      </MemoryRouter>
    );
    const switchInput = getByTitle('header-input-switch');
    fireEvent.click(switchInput);
    const switchElement = getAllByRole('checkbox')[0]; //There will be only one checkbox on this component
    expect(switchElement.value).toEqual('true'); //true in string is the default value for true on this react bootstrap element
  });

  test('Switch value changed to off', () => {
    const { getByTitle, getAllByRole } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <Header />
        </AppContext.Provider>
      </MemoryRouter>
    );
    const switchInput = getByTitle('header-input-switch');
    fireEvent.click(switchInput);
    fireEvent.click(switchInput);
    const switchElement = getAllByRole('checkbox')[0]; //There will be only one checkbox on this component
    expect(switchElement.value).toEqual('false'); //false is the string is the default value for false on this react bootstrap element
  });

  test('Text input changes', () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <Header />
        </AppContext.Provider>
      </MemoryRouter>
    );

    const searchInput = getByTitle('header-input-search');
    fireEvent.change(searchInput, { target: { value: 'wizeline' } });

    expect(searchInput.value).toEqual('wizeline');
  });

  test('Text form submit', () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <Header />
        </AppContext.Provider>
      </MemoryRouter>
    );
    const searchInput = getByTitle('header-input-search');
    fireEvent.change(searchInput, { target: { value: 'wizeline' } });
    fireEvent.submit(searchInput);
    expect(initialState.searchTerm).toEqual('wizeline');
  });

  test('Test logout', async () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <Header />
        </AppContext.Provider>
      </MemoryRouter>
    );
    const btnLogin = getByTitle('header-button-login');

    // fireEvent.submit(searchInput);
    //expect(initialState.searchTerm).toEqual('wizeline');
    await waitFor(() => {
      fireEvent.click(btnLogin);
      const logoutOption = getByTitle('header-logout-dropdown');
      fireEvent.click(logoutOption);
      expect(initialState.isLogged).toEqual(false);
    });
  });
});
