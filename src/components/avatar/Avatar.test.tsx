import { render, screen } from '@testing-library/react';

import { Avatar } from './Avatar';

const SRC = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80';

describe('Avatar component', () => {
  it('renders <Avatar />', () => {
    render(
      <Avatar
        src={SRC}
        alt="Catherine Missal"
      />
    );

    // @ts-ignore
    expect(screen.getByAltText('Catherine Missal')).toBeInTheDocument();
    // @ts-ignore
    expect(screen.getByAltText('Catherine Missal')).toHaveAttribute('src', SRC);

    screen.debug();
  });

  it('without src', () => {
    const { container } = render(
      <Avatar
        alt="Muhamad Husein"
      />
    );

    // @ts-ignore
    expect(screen.getByAltText('Muhamad Husein')).toBeInTheDocument();
    // @ts-ignore
    expect(container.querySelector('img.ava[aria-label="MH"]')).toBeInTheDocument();

    screen.debug();
  });

  it('with size number', () => {
    const { container } = render(
      <Avatar
        src={SRC}
        alt="Adena"
        size={125}
      />
    );

    // @ts-ignore
    expect(screen.getByAltText('Adena')).toBeInTheDocument();
    // @ts-ignore
    expect(container.querySelector('img.ava[width="125"]')).toBeInTheDocument();

    screen.debug();
  });

  it('with className', () => {
    const { container } = render(
      <Avatar
        src={SRC}
        alt="Adena"
        className="rounded-full"
      />
    );

    // @ts-ignore
    expect(screen.getByAltText('Adena')).toBeInTheDocument();
    // @ts-ignore
    expect(container.querySelector('img.rounded-full')).toBeInTheDocument();

    screen.debug();
  });
});
