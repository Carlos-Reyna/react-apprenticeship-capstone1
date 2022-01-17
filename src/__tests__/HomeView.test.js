import React from 'react';
import { render } from '@testing-library/react';
import HomeView from '../pages/HomeView/Homeview.page';

let searchTerm = 'Wizeline',
  performSearch = true,
  setPerformSearch = (value) => {
    performSearch = value;
  };

describe('Testing the component elements', () => {
  it('Component is rendered', () => {
    render(
      <HomeView
        searchTerm={searchTerm}
        performSearch={performSearch}
        setPerformSearch={setPerformSearch}
      ></HomeView>
    );
  });
});
