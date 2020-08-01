import React from 'react';

import Laboratory from '@templates/Laboratory';

import latomiaData from '@assets/data/laboratories/latomia.json';

const Latomia: React.FC = () => {
  return <Laboratory data={latomiaData} />;
};

export default Latomia;
