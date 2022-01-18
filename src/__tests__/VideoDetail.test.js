import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AppContext from '../context/appContext';
import { MOCK_CREDENTIALS } from '../utils/const';
import { MemoryRouter } from 'react-router';
import VideoDetail from '../components/VideoDetail';

const initialState = {
  searchTerm: '',
  styles: {
    customCard: { backgroundColor: '#fff', fontColor: '#000' },
    layout: { backgroundColor: 'antiquewhite', fontColor: '#000000' },
  },
  userProps: MOCK_CREDENTIALS,
  isLogged: true,
};

let selectedVideo = {
  kind: 'youtube#searchResult',
  etag: '7VY0u60YdqamyHOCAufd7r6qTsQ',
  id: {
    kind: 'youtube#video',
    videoId: 'HYyRZiwBWc8',
  },
  snippet: {
    publishedAt: '2019-04-18T18:48:04Z',
    channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
    title: 'Wizeline Guadalajara | Bringing Silicon Valley to Mexico',
    description:
      'Wizeline continues to offer a Silicon Valley culture in burgeoning innovation hubs like Mexico and Vietnam. In 2018, our Guadalajara team moved into a ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    channelTitle: 'Wizeline',
    liveBroadcastContent: 'none',
    publishTime: '2019-04-18T18:48:04Z',
  },
};

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Testing the component elements', () => {
  test('Component is rendered', () => {
    render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <VideoDetail
            styles={initialState.styles}
            selectedVideo={selectedVideo}
          />
        </AppContext.Provider>
      </MemoryRouter>
    );
  });

  test('Breadcrumb is rendered', () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <VideoDetail
            styles={initialState.styles}
            selectedVideo={selectedVideo}
          />
        </AppContext.Provider>
      </MemoryRouter>
    );

    const breadcrumb = getByTitle('breadcrumb-VideoDetail-title');
    expect(breadcrumb).toBeInTheDocument();
  });

  test('Custom Card is rendered', () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <VideoDetail
            styles={initialState.styles}
            selectedVideo={selectedVideo}
          />
        </AppContext.Provider>
      </MemoryRouter>
    );

    const cardComponent = getByTitle('customCard-VideoDetail');
    expect(cardComponent).toBeInTheDocument();
  });

  test('Card title is rendered', () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <VideoDetail
            styles={initialState.styles}
            selectedVideo={selectedVideo}
          />
        </AppContext.Provider>
      </MemoryRouter>
    );

    const title = getByTitle('title-videoDetail');
    expect(title).toBeInTheDocument();
  });

  test('Card description is rendered', () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <VideoDetail
            styles={initialState.styles}
            selectedVideo={selectedVideo}
            isLogged={true}
          />
        </AppContext.Provider>
      </MemoryRouter>
    );

    const description = getByTitle('description-videoDetail');
    expect(description).toBeInTheDocument();
  });

  test('Add to favorites button is rendered', () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <VideoDetail
            styles={initialState.styles}
            selectedVideo={selectedVideo}
            isLogged={true}
          />
        </AppContext.Provider>
      </MemoryRouter>
    );

    const btnAdd = getByTitle('btn-videoDetail-add');
    expect(btnAdd).toBeInTheDocument();
  });

  test('Add to favorites button is not rendered', () => {
    const { queryByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <VideoDetail
            styles={initialState.styles}
            selectedVideo={selectedVideo}
            isLogged={false}
          />
        </AppContext.Provider>
      </MemoryRouter>
    );

    const btnAdd = queryByTitle('btn-videoDetail-add');
    expect(btnAdd).not.toBeInTheDocument();
  });

  test('Add to favorites button is rendered', () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <VideoDetail
            styles={initialState.styles}
            selectedVideo={selectedVideo}
            isLogged={true}
          />
        </AppContext.Provider>
      </MemoryRouter>
    );

    const btnAdd = getByTitle('btn-videoDetail-add');
    fireEvent.click(btnAdd);
    const btnRemove = getByTitle('btn-videoDetail-remove');
    expect(btnRemove).toBeInTheDocument();
  });

  test('Add to favorites button is rendered', () => {
    const { queryByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={initialState}>
          <VideoDetail
            styles={initialState.styles}
            selectedVideo={selectedVideo}
            isLogged={false}
          />
        </AppContext.Provider>
      </MemoryRouter>
    );

    const btnAdd = queryByTitle('btn-videoDetail-add');
    expect(btnAdd).not.toBeInTheDocument();
  });
});
