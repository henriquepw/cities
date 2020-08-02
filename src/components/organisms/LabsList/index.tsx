import React from 'react';

import { Link } from 'gatsby';

import SectionTitle from '@atoms/SectionTitle';

import labsData from '@assets/data/labs.json';

import { Container, Laboratory } from './styles';

const LabsList: React.FC = () => {
  return (
    <Container id="laboratorios">
      <SectionTitle>Laboratórios</SectionTitle>
      <ul>
        {labsData.map((lab) => (
          <Laboratory key={lab.id}>
            <div>
              <img
                src="https://cdn.mynewlab.com/wp-content/uploads/2018/04/iStock-928891398.jpg.webp"
                alt={lab.name}
              />
            </div>

            <div>
              <h2>{lab.name}</h2>
              <p>{lab.description}</p>
              <Link to={`/laboratorios/${lab.slug}`}>SAIBA MAIS</Link>
            </div>
          </Laboratory>
        ))}
      </ul>
    </Container>
  );
};

export default LabsList;
