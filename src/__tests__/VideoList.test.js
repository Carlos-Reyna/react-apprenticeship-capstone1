import React from 'react';
import { render } from '@testing-library/react';
import VideoList from '../components/VideoList/VideoList.component';
import { MockService } from '../utils/MockService';
import AppContext from '../context/appContext';
import { MOCK_CREDENTIALS } from '../utils/const';
import { MemoryRouter } from 'react-router';
const { items } = MockService.GetMock();

const initialState = {
  searchTerm: '',
  styles: {
    customCard: { backgroundColor: '#fff', fontColor: '#000' },
    layout: { backgroundColor: 'antiquewhite', fontColor: '#000000' },
  },
  userProps: MOCK_CREDENTIALS,
};

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Testing the component elements', () => {
  it('Card Title is rendered', () => {
    const { getAllByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <VideoList videos={items} styles={initialState.styles} />
        </AppContext.Provider>
      </MemoryRouter>
    );

    const cardComponent = getAllByTitle('customCard-videoList');

    expect(cardComponent.length).toEqual(24);
  });

  test('Card Thumbail is displayed', () => {
    const { getAllByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <VideoList videos={items} styles={initialState.styles} />
        </AppContext.Provider>
      </MemoryRouter>
    );
    const thumbnail = getAllByTitle('video-thumbnail')[0];
    expect(thumbnail).toBeInTheDocument();
  });

  test('Card Title is displayed', () => {
    const { getAllByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <VideoList videos={items} styles={initialState.styles} />
        </AppContext.Provider>
      </MemoryRouter>
    );
    const title = getAllByTitle('video-title')[0];
    expect(title).toBeInTheDocument();
  });

  test('Card Description is displayed', () => {
    const { getAllByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <VideoList videos={items} styles={initialState.styles} />
        </AppContext.Provider>
      </MemoryRouter>
    );
    const description = getAllByTitle('video-description')[0];
    expect(description).toBeInTheDocument();
  });

  test('Empty List', () => {
    const { queryAllByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <VideoList videos={[]} styles={initialState.styles} />
        </AppContext.Provider>
      </MemoryRouter>
    );
    const description = queryAllByTitle('video-description');
    expect(description.length).toEqual(0);
  });
});
