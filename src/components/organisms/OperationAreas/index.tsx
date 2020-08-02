import React from 'react';

import SectionTitle from '@atoms/SectionTitle';

import Hexagon from '@assets/svgs/hexagon.svg';

import { Container, AreaItem } from './styles';

export interface AtuationArea {
  name: string;
  description: string;
}

interface OperationArea {
  areas: AtuationArea[];
}

const colorsList = [
  '#B5A7D1',
  '#D3C3B5',
  '#BDD6B4',
  '#96C1D0',
  '#80ADAB',
  '#D09696',
];

const OperationArea: React.FC<OperationArea> = ({ areas }) => {
  return (
    <Container id="area">
      <SectionTitle>Áreas de atuação</SectionTitle>

      <ul>
        {areas.map((area, index) => (
          <AreaItem
            key={`@atuation-area:${area.name}`}
            hexagonColor={colorsList[index % colorsList.length]}
          >
            <Hexagon />
            <h2>{area.name}</h2>
            <p>{area.description}</p>
          </AreaItem>
        ))}
      </ul>
    </Container>
  );
};

export default OperationArea;
