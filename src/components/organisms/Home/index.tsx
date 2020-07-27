import React from 'react';

import { Container, Background } from './styles';

interface HomeProps {
  id: string;
}

const Home: React.FC<HomeProps> = ({ id }) => {
  return (
    <Container id={id}>
      <Background
        params={{
          particles: {
            number: { value: 150 },
            size: { value: 3 },
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
