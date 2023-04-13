import { render, screen } from '@testing-library/react';

import { Avatar } from './Avatar';
import { AvatarGroup } from './AvatarGroup';

const IMAGES = [
  { id: 1, name: "Catherine Missal", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" },
  { id: 2, name: "Siti Umaya", src: "/img/hijab_girl.jpg" },
  { id: 3, name: "Elizabeth Olsen", src: "/img/hijab_girl_2.webp" },
  { id: 4, name: "Jane Doe Taylor", src: "/img/hijab_girl_3.jpg" },
  { id: 5, name: "Bruce Wayne" },
  { id: 6, name: "Angelina Rose", src: "/img/hijab_girl_4.jpg" },
  { id: 7, name: "Diana Prince" },
  { id: 8, name: "Peter Parker" },
];

describe('AvatarGroup component', () => {
  it('AvatarGroup component - should check render with snapshot', () => {
    const component = render(
      <AvatarGroup
        className="avatar-group-snapshot"
      >
        {IMAGES.map((item: any) => <Avatar key={item.id} src={item.src} alt={item.alt} className="rounded-full" />)}
      </AvatarGroup>
    );
    // @ts-ignore
    expect(component).toMatchSnapshot();
  });

  it('renders <AvatarGroup /> default props', () => {
    render(
      <AvatarGroup
        className="avatar-group-default-props"
      >
        {IMAGES.map((item: any) => <Avatar key={item.id} src={item.src} alt={item.alt} className="rounded-full" />)}
      </AvatarGroup>
    );

    // @ts-ignore
    expect(screen.getByRole('group')).toBeInTheDocument();
    // @ts-ignore
    expect(screen.getByRole('group')).toHaveAttribute('class', 'avatar-group avatar-group-default-props');
  });

  it('with maxLength props', () => {
    const { container } = render(
      <AvatarGroup
        maxLength={4}
        className="avatar-group-with-maxLength"
      >
        {IMAGES.map((item: any) => <Avatar key={item.id} src={item.src} alt={item.alt} className="rounded-full" />)}
      </AvatarGroup>
    );

    // @ts-ignore
    expect(screen.getByRole('group')).toBeInTheDocument();
    // @ts-ignore
    expect(container.querySelector('img.ava')).toBeInTheDocument();
    // @ts-ignore
    expect(screen.getByText('+4')).toBeInTheDocument();
  });

  it('with size number props', () => {
    const { container } = render(
      <AvatarGroup
        size={125}
        className="avatar-group-with-size-number"
      >
        {IMAGES.map((item: any) => <Avatar key={item.id} src={item.src} alt={item.alt} className="rounded-full" />)}
      </AvatarGroup>
    );

    // @ts-ignore
    expect(screen.getByRole('group')).toBeInTheDocument();
    // @ts-ignore
    expect(container.querySelector('img.ava[width="125"]')).toBeInTheDocument();
  });

  it('render as div', () => {
    const { container } = render(
      <AvatarGroup
        As="div"
        className="avatar-group-as-div"
      >
        {IMAGES.map((item: any) => <Avatar key={item.id} src={item.src} alt={item.alt} className="rounded-full" />)}
      </AvatarGroup>
    );

    // @ts-ignore
    expect(screen.getByRole('group')).toBeInTheDocument();
    // @ts-ignore
    expect(container.querySelector('img.ava')).toBeInTheDocument();
  });
});
