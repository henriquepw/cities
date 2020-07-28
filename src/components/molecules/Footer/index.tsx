import React from 'react';

import ExternalLink from '@atoms/ExternalLink';

import ifpbLogo from '@assets/images/ifpb-logo.png';
import ifpb from '@assets/images/ifpb-logotipo.png';

import { Container, Containt } from './styles';

const year = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <Container>
      <Containt>
        <ExternalLink href="https://www.ifpb.edu.br/campinagrande">
          <img src={ifpbLogo} alt="IFPB logo" />
          <img src={ifpb} alt="IFPB logo" />
        </ExternalLink>

        <ul>
          <h2>Páginas</h2>

          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#laboratorios">Laboratórios</a>
          </li>
          <li>
            <a href="#missao">Missão</a>
          </li>
          <li>
            <ExternalLink href="https://github.com/henry-ns/cities">
              Codigo do site
            </ExternalLink>
          </li>
        </ul>
      </Containt>

      <p>
        {`${year} © CITIES. Design by `}
        <ExternalLink href="https://thehenry.dev">
          Henrique Miranda
        </ExternalLink>
      </p>
    </Container>
  );
};

export default Footer;
