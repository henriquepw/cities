import React from 'react';

import Laboratory from '@templates/Laboratory';

import gcompiData from '@assets/data/laboratories/gcompi.json';

const Gcompi: React.FC = () => {
  return <Laboratory data={gcompiData} />;
};

export default Gcompi;
