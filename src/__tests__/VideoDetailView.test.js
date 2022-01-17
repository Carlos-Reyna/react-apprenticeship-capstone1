import React from 'react';
import { render } from '@testing-library/react';
import VideoDetailView from '../pages/VideoDetailsView/VideoDetailView.page';

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

describe('Testing the component elements', () => {
  test('Card Title is rendered', () => {
    render(<VideoDetailView selectedVideo={selectedVideo}></VideoDetailView>);
  });
});
