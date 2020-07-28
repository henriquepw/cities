import React from 'react';

import { Container } from './styles';

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
  return (
    <Container>
      <span>CITIES</span>

      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={`@navitems-${item.name}`}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
