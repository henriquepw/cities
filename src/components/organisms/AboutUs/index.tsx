import React from 'react';

import SectionTitle from '@atoms/SectionTitle';

import { Container } from './styles';

export interface AboutUsProps {
  description: string;
  img: string;
}

const AboutUs: React.FC<AboutUsProps> = ({ img, description }) => {
  return (
    <Container id="sobre">
      <SectionTitle>Sobre nós</SectionTitle>
      <div>
        <div>
          <img src={img} alt={description} />
        </div>
        <p>{description}</p>
      </div>
    </Container>
  );
};

export default AboutUs;
