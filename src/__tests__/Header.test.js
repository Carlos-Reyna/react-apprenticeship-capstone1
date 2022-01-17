import { render, fireEvent } from '@testing-library/react';
import Header from '../components/Header/Header.component';
import React from 'react';
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
  test('Text input should be present', () => {
    const { getByTitle } = render(
      <AppContext.Provider value={initialState}>
        <Header />
      </AppContext.Provider>
    );
    const searchInput = getByTitle('header-input-search');
    expect(searchInput).toBeInTheDocument();
  });

  test('Login button should be present', () => {
    const { getByTitle } = render(
      <AppContext.Provider value={initialState}>
        <Header />
      </AppContext.Provider>
    );
    const switchInput = getByTitle('header-input-switch');
    expect(switchInput).toBeInTheDocument();
  });

  test('Switch input should be present', () => {
    const { getByTitle } = render(
      <AppContext.Provider value={initialState}>
        <Header />
      </AppContext.Provider>
    );
    const button = getByTitle('header-button-login');
    expect(button).toBeInTheDocument();
  });

  test('Switch value changed to on', () => {
    const { getByTitle, getAllByRole } = render(
      <AppContext.Provider value={initialState}>
        <Header />
      </AppContext.Provider>
    );
    const switchInput = getByTitle('header-input-switch');
    fireEvent.click(switchInput);
    const switchElement = getAllByRole('checkbox')[0]; //There will be only one checkbox on this component
    expect(switchElement.value).toEqual('true'); //true in string is the default value for true on this react bootstrap element
  });

  test('Switch value changed to off', () => {
    const { getByTitle, getAllByRole } = render(
      <AppContext.Provider value={initialState}>
        <Header />
      </AppContext.Provider>
    );
    const switchInput = getByTitle('header-input-switch');
    fireEvent.click(switchInput);
    fireEvent.click(switchInput);
    const switchElement = getAllByRole('checkbox')[0]; //There will be only one checkbox on this component
    expect(switchElement.value).toEqual('false'); //false is the string is the default value for false on this react bootstrap element
  });

  test('Text input changes', () => {
    const { getByTitle } = render(
      <AppContext.Provider value={initialState}>
        <Header />
      </AppContext.Provider>
    );

    const searchInput = getByTitle('header-input-search');
    fireEvent.change(searchInput, { target: { value: 'wizeline' } });

    expect(searchInput.value).toEqual('wizeline');
  });

  test('Text form submit', () => {
    const { getByTitle } = render(
      <AppContext.Provider value={initialState}>
        <Header />
      </AppContext.Provider>
    );
    const searchInput = getByTitle('header-input-search');
    fireEvent.change(searchInput, { target: { value: 'wizeline' } });
    fireEvent.submit(searchInput);
    expect(initialState.searchTerm).toEqual('wizeline');
  });
});
