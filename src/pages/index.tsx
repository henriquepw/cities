import React from 'react';

import { PageProps } from 'gatsby';

import SEO from '@atoms/SEO';

import Home from '@organisms/Home';
import Mission from '@organisms/Mission';

import AppProvider from '@templates/AppProvider';

import GlobalStyles from '@styles/global';

const IndexPage: React.FC<PageProps> = () => (
  <AppProvider>
    <GlobalStyles />
    <SEO title="Home" />
    <Home />
    <Mission />
  </AppProvider>
);

export default IndexPage;
