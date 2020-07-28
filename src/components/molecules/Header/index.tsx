import React, { useState } from 'react';

import { Container, NavBar } from './styles';

const navItems = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'Missão',
    href: '#missao',
  },
  {
    name: 'Laboratórios',
    href: '#laboratorios',
  },
  {
    name: 'Contato',
    href: '#contato',
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
              <a href={item.href} onClick={setClosed}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </NavBar>
    </Container>
  );
};

export default Header;
