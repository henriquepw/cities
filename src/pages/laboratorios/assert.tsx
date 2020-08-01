import React from 'react';

import Laboratory from '@templates/Laboratory';

import assertData from '@assets/data/laboratories/assert.json';

const Assert: React.FC = () => {
  return <Laboratory data={assertData} />;
};

export default Assert;
