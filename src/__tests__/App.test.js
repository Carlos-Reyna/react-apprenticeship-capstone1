import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App/App.component';

describe('Testing the component elements', () => {
  it('Component is rendered', () => {
    render(<App></App>);
  });
});
