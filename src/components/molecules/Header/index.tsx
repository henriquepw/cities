import React, { useState } from 'react';

import InternalLink from '@atoms/InternalLink';

import { Container, NavBar } from './styles';

interface HeaderProps {
  title?: string;
  navItems: Array<{
    name: string;
    to: string;
  }>;
}

const Header: React.FC<HeaderProps> = ({ title = 'CITIES', navItems }) => {
  const [isOpened, setOpened] = useState(false);

  function toggleOpened(): void {
    setOpened((state) => !state);
  }

  function setClosed(): void {
    isOpened && setOpened(false);
  }

  return (
    <Container>
      <span>{title}</span>

      <NavBar isOpened={isOpened}>
        <button type="button" onClick={toggleOpened}>
          <span />
          <span />
          <span />
        </button>

        <ul>
          {navItems.map((item) => (
            <li key={`@navitems-${item.name}`}>
              <InternalLink to={item.to} onClick={setClosed}>
                {item.name}
              </InternalLink>
            </li>
          ))}
        </ul>
      </NavBar>
    </Container>
  );
};

export default Header;
