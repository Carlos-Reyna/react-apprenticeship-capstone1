import { render, fireEvent } from '@testing-library/react';
import Header from '../components/Header/Header.component';
import React from 'react';

describe('Testing the component elements', () => {
  test('Text input should be present', () => {
    const { getByTitle } = render(<Header></Header>);
    const searchInput = getByTitle('header-input-search');
    expect(searchInput).toBeInTheDocument();
  });

  test('Login button should be present', () => {
    const { getByTitle } = render(<Header></Header>);
    const switchInput = getByTitle('header-input-switch');
    expect(switchInput).toBeInTheDocument();
  });

  test('Switch input should be present', () => {
    const { getByTitle } = render(<Header></Header>);
    const button = getByTitle('header-button-login');
    expect(button).toBeInTheDocument();
  });

  test('Switch value changed to on', () => {
    const { getByTitle, getAllByRole } = render(<Header></Header>);
    const switchInput = getByTitle('header-input-switch');
    fireEvent.click(switchInput);
    const switchElement = getAllByRole('checkbox')[0]; //There will be only one checkbox on this component
    expect(switchElement.value).toEqual('true'); //true in string is the default value for true on this react bootstrap element
  });

  test('Switch value changed to off', () => {
    const { getByTitle, getAllByRole } = render(<Header></Header>);
    const switchInput = getByTitle('header-input-switch');
    fireEvent.click(switchInput);
    fireEvent.click(switchInput);
    const switchElement = getAllByRole('checkbox')[0]; //There will be only one checkbox on this component
    expect(switchElement.value).toEqual('false'); //false is the string is the default value for false on this react bootstrap element
  });
});
