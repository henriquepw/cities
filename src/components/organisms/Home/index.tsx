import React from 'react';

import InternalLink from '@atoms/InternalLink';

import { Container, Background, ScrollButtom } from './styles';

interface HomeProps {
  id: string;
}

const Home: React.FC<HomeProps> = ({ id }) => {
  return (
    <Container id={id}>
      <Background
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            size: { value: 3 },
            move: {
              enable: true,
              speed: 2,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
            },
          },
        }}
      />
      <h1>
        Centro de Inovação e Pesquisa em Tecnologias da Informação e Engenharia
        de Sistema
      </h1>
      <InternalLink to="missao">
        <ScrollButtom />
      </InternalLink>
    </Container>
  );
};

export default Home;
