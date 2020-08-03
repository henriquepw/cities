import React from 'react';

import ExternalLink from '@atoms/ExternalLink';
import SectionTitle from '@atoms/SectionTitle';
import SocialIcon from '@atoms/SocialIcon';

import { Container, SocialList } from './styles';

export interface Professor {
  name: string;
  description: string;
  profileImg: string;
  socialList: Array<{
    name: 'github' | 'linkedin' | 'email' | 'lattes';
    url: string;
  }>;
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

            <SocialList>
              {professor.socialList.map((item) => (
                <li key={`@professors:${professor.name}:${item.name}`}>
                  <ExternalLink href={item.url}>
                    <SocialIcon name={item.name} />
                  </ExternalLink>
                </li>
              ))}
            </SocialList>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Professors;
