import React from 'react';

import missionImg from '@assets/svgs/mission.svg';

import { Container } from './styles';

const Mission: React.FC = () => {
  return (
    <Container id="missao">
      <img src={missionImg} alt="mission" />
      <div>
        <h1>Nossa missão</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
          dui aliquam, lacinia orci eget, interdum purus. Sed posuere justo at
          cursus gravida. Quisque elementum tincidunt erat vitae auctor.
          Suspendisse dictum arcu nisi, vel mollis eros finibus nec.
        </p>
      </div>
    </Container>
  );
};

export default Mission;
