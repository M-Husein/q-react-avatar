import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders main app', () => {
    const component = render(<App />);

    // @ts-ignore
    expect(component).toMatchSnapshot();

    screen.debug();
  });
});
