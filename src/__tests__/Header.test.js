import { render } from '@testing-library/react';
import Header from '../components/Header/Header.component';
import React from 'react';

describe('Testing the component elements', () => {
  it('Text input should be present', () => {
    render(<Header></Header>);
    const input = screen.getByTestId('header-input-search');
    expect(input).toBeInTheDocument();
  });

  it('Login button should be present', () => {
    render(<Header></Header>);
    const button = screen.getByTestId('header-btn-login');
    expect(button).toBeInTheDocument();
  });

  it('Switch input should be present', () => {
    render(<Header></Header>);
    const switchInput = screen.getByTestId('header-input-switch');
    expect(switchInput).toBeInTheDocument();
  });
});
