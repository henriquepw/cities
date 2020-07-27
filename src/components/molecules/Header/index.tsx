import React from 'react';

import { Container } from './styles';

const navItems = ['Home', 'Missão', 'Laboratórios', 'Contato'];

const Header: React.FC = () => {
  return (
    <Container>
      <span>CITIES</span>

      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={`@navitems-${item}`}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
