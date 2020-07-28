import React, { useState } from 'react';

import InternalLink from '@atoms/InternalLink';

import { Container, NavBar } from './styles';

const navItems = [
  {
    name: 'Home',
    to: 'home',
  },
  {
    name: 'Missão',
    to: 'missao',
  },
  {
    name: 'Laboratórios',
    to: 'laboratorios',
  },
  {
    name: 'Contato',
    to: 'contato',
  },
];

const Header: React.FC = () => {
  const [isOpened, setOpened] = useState(false);

  function toggleOpened(): void {
    setOpened((state) => !state);
  }

  function setClosed(): void {
    isOpened && setOpened(false);
  }

  return (
    <Container>
      <span>CITIES</span>

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
