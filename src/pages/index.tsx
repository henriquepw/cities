import React from 'react';

import { PageProps } from 'gatsby';

import SEO from '@atoms/SEO';

const IndexPage: React.FC<PageProps> = () => (
  <>
    <SEO title="Home" />
    <h1>Hi people</h1>
  </>
);

export default IndexPage;
