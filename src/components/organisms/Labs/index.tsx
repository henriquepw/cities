import React from 'react';

import SectionTitle from '@atoms/SectionTitle';

import { Container, Laboratory } from './styles';

const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et dui aliquam, lacinia orci eget, interdum purus. Sed posuere justo at cursus gravida. Quisque elementum tincidunt erat vitae auctor.';

const labs = [
  {
    id: 'lab_1',
    name: 'Assert',
    description,
  },
  {
    id: 'lab_2',
    name: 'GComPi',
    description,
  },
  {
    id: 'lab_3',
    name: 'Robótica',
    description,
  },
  {
    id: 'lab_4',
    name: 'Latin',
    description,
  },
  {
    id: 'lab_5',
    name: 'Latomia',
    description,
  },
];

interface LabsProps {
  id: string;
}

const Labs: React.FC<LabsProps> = ({ id }) => {
  return (
    <Container id={id}>
      <SectionTitle>Laboratórios</SectionTitle>
      <ul>
        {labs.map((lab) => (
          <Laboratory key={lab.id}>
            <div>
              <img
                src="https://cdn.mynewlab.com/wp-content/uploads/2018/04/iStock-928891398.jpg.webp"
                alt="test"
              />
            </div>

            <div>
              <h2>{lab.name}</h2>
              <p>{lab.description}</p>
            </div>
          </Laboratory>
        ))}
      </ul>
    </Container>
  );
};

export default Labs;
