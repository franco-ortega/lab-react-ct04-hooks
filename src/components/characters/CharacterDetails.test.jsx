import React from 'react';
import { render } from '@testing-library/react';
import CharacterDetails from './CharacterDetails';

describe('CharacterDetails component', () => {
  it('renders CharacterDetails', () => {
    const { asFragment } = render(<CharacterDetails
      name="words"
      japaneseName="words"
      image="words"
      quote="words"
      personality="words"
      species="words"
      skill="words"
      goal="words"
      // coffee={{ object: 'words' }}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
