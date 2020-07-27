import React from 'react';

import { Container, Background } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Background
        params={{
          particles: {
            number: {
              value: 120,
            },
            size: {
              value: 2,
            },
          },
        }}
      />
      <h1>
        Centro de Inovação e Pesquisa em Tecnologias da Informação e Engenharia
        de Sistema
      </h1>
    </Container>
  );
};

export default Home;
