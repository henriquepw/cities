import React from 'react';

import SectionTitle from '@atoms/SectionTitle';

import { Container } from './styles';

export interface AtuationArea {
  name: string;
  description: string;
}

interface OperationArea {
  areas: AtuationArea[];
}

const OperationArea: React.FC<OperationArea> = () => {
  return (
    <Container id="area">
      <SectionTitle>Áreas de atuação</SectionTitle>
    </Container>
  );
};

export default OperationArea;
