import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders main app', () => {
    render(<App />);

    screen.debug();

    // check if App components renders headline
  });
});
