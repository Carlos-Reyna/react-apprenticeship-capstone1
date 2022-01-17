import React from 'react';
import { render } from '@testing-library/react';
import VideoList from '../components/VideoList/VideoList.component';
import { MockService } from '../utils/MockService';
import AppContext from '../context/appContext';
const { items } = MockService.GetMock();

const initialState = {
  searchTerm: '',
  styles: {
    customCard: { backgroundColor: '#fff', fontColor: '#000' },
    layout: { backgroundColor: 'antiquewhite', fontColor: '#000000' },
  },
};

describe('Testing the component elements', () => {
  it('Card Title is rendered', () => {
    render(
      <AppContext.Provider value={initialState}>
        <VideoList videos={items} styles={initialState.styles} />
      </AppContext.Provider>
    );
  });

  test('Card Thumbail is displayed', () => {
    const { getAllByTitle } = render(
      <AppContext.Provider value={initialState}>
        <VideoList videos={items} styles={initialState.styles} />
      </AppContext.Provider>
    );
    const thumbnail = getAllByTitle('video-thumbnail')[0];
    expect(thumbnail).toBeInTheDocument();
  });

  test('Card Title is displayed', () => {
    const { getAllByTitle } = render(
      <AppContext.Provider value={initialState}>
        <VideoList videos={items} styles={initialState.styles} />
      </AppContext.Provider>
    );
    const title = getAllByTitle('video-title')[0];
    expect(title).toBeInTheDocument();
  });

  test('Card Description is displayed', () => {
    const { getAllByTitle } = render(
      <AppContext.Provider value={initialState}>
        <VideoList videos={items} styles={initialState.styles} />
      </AppContext.Provider>
    );
    const description = getAllByTitle('video-description')[0];
    expect(description).toBeInTheDocument();
  });
});
