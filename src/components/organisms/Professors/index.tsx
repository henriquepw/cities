import React from 'react';

import SectionTitle from '@atoms/SectionTitle';

import { Container } from './styles';

export interface Professor {
  name: string;
  description: string;
  profileImg: string;
}

interface ProfessorsProps {
  professors: Professor[];
}

const Professors: React.FC<ProfessorsProps> = ({ professors }) => {
  return (
    <Container id="professores">
      <SectionTitle>Professores</SectionTitle>

      <ul>
        {professors.map((professor) => (
          <li key={`@professors:${professor.name}`}>
            <img src={professor.profileImg} alt={professor.name} />
            <h2>{professor.name}</h2>
            <p>{professor.description}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Professors;
