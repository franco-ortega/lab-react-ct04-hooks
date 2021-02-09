import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  // afterEach(() => cleanup());
  it('renders Character', () => {
    const { asFragment } = render(<Character
      name="a title"
      japaneseName="this article"
      image="that image url" />);
    expect(asFragment()).toMatchSnapshot();
  });
});