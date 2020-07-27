import React from 'react';

import { GoogleMap, LoadScript } from '@react-google-maps/api';

import SectionTitle from '@atoms/SectionTitle';

import { Container, Content, MapContainer, Card } from './styles';

const center = {
  lat: -7.2400372,
  lng: -35.9176976,
};

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
              center={center}
              zoom={16}
            />
          </LoadScript>
        </MapContainer>

        <Card>
          <h2>Onde nos encontrar</h2>
          <address>
            Rua Tranquilino Coelho Lemos, 671 Dinamérica, Campina Grande - PB,
            58432-300
          </address>

          <h2>Envie um email para</h2>
          <ul>
            <li>contato@exemplo.edu.br </li>
            <li>contato@exemplo.edu.br </li>
            <li>contato@exemplo.edu.br </li>
          </ul>

          <h2>Ligue para nós</h2>
          <ul>
            <li>(83) xxxxx-xxxx</li>
            <li>(83) xxxxx-xxxx</li>
            <li>(83) xxxxx-xxxx</li>
          </ul>
        </Card>
      </Content>
    </Container>
  );
};

export default Contact;
