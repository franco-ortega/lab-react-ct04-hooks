import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import OneCharacter from './OneCharacter';

describe('OneCharacter component', () => {
  it('displays character details', async() => {
    render(
      <BrowserRouter>
        <OneCharacter match={{ params: { id: 'id' } }} />
      </BrowserRouter>
    );

    screen.getByText('Loading');

    const ul = await screen.findByTestId('character');
    
    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
