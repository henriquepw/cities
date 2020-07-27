import React from 'react';

import { GoogleMap, LoadScript } from '@react-google-maps/api';

import SectionTitle from '@atoms/SectionTitle';

import Container from '@templates/SectionContainer';

import contactData from '@assets/data/contact.json';

import { Content, MapContainer, Card } from './styles';

const containerStyle = {
  width: '546px',
  height: '498px',
};

const Contact: React.FC = () => {
  return (
    <Container id="contato">
      <SectionTitle>Contato</SectionTitle>

      <Content>
        <MapContainer>
          <LoadScript googleMapsApiKey={process.env.GATSBY_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={contactData.coordinates}
              zoom={16}
            />
          </LoadScript>
        </MapContainer>

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
