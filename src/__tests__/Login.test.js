import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import AppContext from '../context/appContext';
import Login from '../components/login';
import { USER_DEFAULT_PROPS } from '../utils/const';

let initialState = {
  searchTerm: '',
  styles: {
    customCard: { backgroundColor: '#fff', fontColor: '#000' },
    layout: { backgroundColor: 'antiquewhite', fontColor: '#000000' },
  },
  UserProps: USER_DEFAULT_PROPS,
};

let show = true;
const handleClose = (value) => {
  show = value;
};

describe('Testing the component elements', () => {
  test('Username input is present', () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <Login show={show} handleClose={handleClose} />
        </AppContext.Provider>
      </MemoryRouter>
    );
    const userNameInput = getByTitle('login-input-username');
    expect(userNameInput).toBeInTheDocument();
  });

  test('Password input is present', () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <Login show={show} handleClose={handleClose} />
        </AppContext.Provider>
      </MemoryRouter>
    );
    const passwordInput = getByTitle('login-input-password');
    expect(passwordInput).toBeInTheDocument();
  });

  test('username value changes successfully', () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <Login show={show} handleClose={handleClose} />
        </AppContext.Provider>
      </MemoryRouter>
    );

    const userNameInput = getByTitle('login-input-username');
    fireEvent.change(userNameInput, { target: { value: 'wizeline' } });

    expect(userNameInput.value).toEqual('wizeline');
  });

  test('password value changes successfully', () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <Login show={show} handleClose={handleClose} />
        </AppContext.Provider>
      </MemoryRouter>
    );

    const passwordInput = getByTitle('login-input-password');
    fireEvent.change(passwordInput, { target: { value: 'wizeline' } });

    expect(passwordInput.value).toEqual('wizeline');
  });

  test('User props are updated', async () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <Login show={show} handleClose={handleClose} />
        </AppContext.Provider>
      </MemoryRouter>
    );

    const userNameInput = getByTitle('login-input-username');
    fireEvent.change(userNameInput, { target: { value: 'wizeline' } });

    const passwordInput = getByTitle('login-input-password');
    fireEvent.change(passwordInput, { target: { value: 'Rocks!' } });

    fireEvent.submit(passwordInput);

    setTimeout(() => {
      expect(initialState.UserProps.id).toEqual('123');
    }, 3000);
  });

  test('Login input username is cleared', () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <Login show={show} handleClose={handleClose} />
        </AppContext.Provider>
      </MemoryRouter>
    );

    const userNameInput = getByTitle('login-input-username');
    fireEvent.change(userNameInput, { target: { value: 'wizeline' } });

    const passwordInput = getByTitle('login-input-password');
    fireEvent.change(passwordInput, { target: { value: 'Rocks!' } });
    fireEvent.submit(passwordInput);

    setTimeout(() => {
      expect(userNameInput.value).toEqual('');
    }, 3000);
  });

  test('Login input username is cleared', () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <Login show={show} handleClose={handleClose} />
        </AppContext.Provider>
      </MemoryRouter>
    );

    const userNameInput = getByTitle('login-input-username');
    fireEvent.change(userNameInput, { target: { value: 'wizeline' } });

    const passwordInput = getByTitle('login-input-password');
    fireEvent.change(passwordInput, { target: { value: 'Rocks!' } });

    const btnLogin = getByTitle('btn-login-submit');
    fireEvent.click(btnLogin);
    setTimeout(() => {
      expect(userNameInput.value).toEqual('');
    }, 3000);
  });
});
