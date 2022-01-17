import React from 'react';
import { screen, render } from '@testing-library/react';
import VideoList from '../components/VideoList/VideoList.component';
import { MockService } from '../utils/MockService';

const { items } = MockService.GetMock();

describe('Testing the component elements', () => {
  it('Card Title is rendered', () => {
    render(<VideoList videos={items}></VideoList>);
  });

  it('Card Thumbail is displayed', () => {
    render(<VideoList videos={items}></VideoList>);
    const thumbnail = screen.getAllByTestId('header-component-thumbnail')[0];
    expect(thumbnail.src).toMatch(items[0].snippet.thumbnails.medium.url);
  });
});
