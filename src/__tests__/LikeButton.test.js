import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import LikeButton from '../components/LikeButton';
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

const setFavorite = (video) => {
  return video;
};

const removeFavorite = () => {
  return '';
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Testing the component elements', () => {
  test('Like icon is displayed', () => {
    const { getByTitle } = render(
      <LikeButton
        video={selectedVideo}
        setFavorite={setFavorite}
        userId={'123'}
        removeFavorite={removeFavorite}
      ></LikeButton>
    );

    const likeButton = getByTitle('no-favorite-icon');
    expect(likeButton).toBeInTheDocument();

    fireEvent.click(likeButton);
  });

  test('Dislike icon is displayed', () => {
    const { getByTitle } = render(
      <LikeButton
        video={selectedVideo}
        setFavorite={setFavorite}
        userId={'123'}
        removeFavorite={removeFavorite}
      ></LikeButton>
    );

    const likeButton = getByTitle('no-favorite-icon');
    fireEvent.click(likeButton);
    const dislikeButton = getByTitle('favorite-icon');
    expect(dislikeButton).toBeInTheDocument();
  });

  test('Like icons are toggled', () => {
    const { getByTitle } = render(
      <LikeButton
        video={selectedVideo}
        setFavorite={setFavorite}
        userId={'123'}
        removeFavorite={removeFavorite}
      ></LikeButton>
    );

    const likeButton = getByTitle('no-favorite-icon');
    fireEvent.click(likeButton);
    const dislikeButton = getByTitle('favorite-icon');
    fireEvent.click(dislikeButton);
    expect(likeButton).toBeInTheDocument();
  });
});
