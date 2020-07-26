import React from 'react';

import { PageProps } from 'gatsby';

import SEO from '@atoms/SEO';

import AppProvider from '@templates/AppProvider';

import GlobalStyles from '@styles/global';

const IndexPage: React.FC<PageProps> = () => (
  <AppProvider>
    <GlobalStyles />
    <SEO title="Home" />
    <h1>Hi people</h1>
  </AppProvider>
);

export default IndexPage;
