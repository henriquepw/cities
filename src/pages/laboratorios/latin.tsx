import React from 'react';

import Laboratory from '@templates/Laboratory';

import latinData from '@assets/data/laboratories/latin.json';

const Latin: React.FC = () => {
  return <Laboratory data={latinData} />;
};

export default Latin;
