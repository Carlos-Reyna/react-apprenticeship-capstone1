import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App/App.component';

beforeEach(() => {
  let portalRoot = document.getElementById('modal');
  if (!portalRoot) {
    portalRoot = document.createElement('div');
    portalRoot.setAttribute('id', 'modal');
    document.body.appendChild(portalRoot);
  }
});

describe('Testing the component elements', () => {
  it('Component is rendered', () => {
    render(<App></App>);
  });
});
