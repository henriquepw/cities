import React from 'react';

import InternalLink from '@atoms/InternalLink';

import { Container, Background, ScrollButtom } from './styles';

interface HomeProps {
  title: string;
  nextId: string;
  backgroundImg?: string;
}

const Home: React.FC<HomeProps> = ({ title, nextId, backgroundImg }) => {
  return (
    <Container id="home" backgroundImg={backgroundImg}>
      {!backgroundImg && (
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
      )}

      <h1>{title}</h1>
      <InternalLink to={nextId}>
        <ScrollButtom />
      </InternalLink>
    </Container>
  );
};

export default Home;
