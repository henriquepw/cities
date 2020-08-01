import React from 'react';

import Laboratory from '@templates/Laboratory';

import roboticaData from '@assets/data/laboratories/robotica.json';

const Robotica: React.FC = () => {
  return <Laboratory data={roboticaData} />;
};

export default Robotica;
