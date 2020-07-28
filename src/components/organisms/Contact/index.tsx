import React from 'react';

import SectionTitle from '@atoms/SectionTitle';

import Container from '@templates/SectionContainer';

import contactData from '@assets/data/contact.json';

import { Content, Map, Card } from './styles';

const Contact: React.FC = () => {
  return (
    <Container id="contato">
      <SectionTitle>Contato</SectionTitle>

      <Content>
        <Map center={contactData.coordinates} zoom={16} />

        <Card>
          <h2>Onde nos encontrar</h2>
          <address>{contactData.address}</address>

          <h2>Envie um email para</h2>
          <ul>
            {contactData.emails.map((email) => (
              <li key={`@contact-emails-${email}`}>{email}</li>
            ))}
          </ul>

          <h2>Ligue para nós</h2>
          <ul>
            {contactData.numbers.map((num) => (
              <li key={`@contact-numbers-${num}`}>{num}</li>
            ))}
          </ul>
        </Card>
      </Content>
    </Container>
  );
};

export default Contact;
