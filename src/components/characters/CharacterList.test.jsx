import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import CharacterList from './CharacterList';

describe('CharacterList component', () => {
  afterEach(() => cleanup());
  it('displays a list of characters', async() => {
    render(
      <BrowserRouter>
        <CharacterList />
      </BrowserRouter>
    );

    screen.getByText('Loading');

    const ul = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
