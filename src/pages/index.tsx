import React from 'react';

import { PageProps } from 'gatsby';

import SEO from '@atoms/SEO';

import Footer from '@molecules/Footer';
import Header from '@molecules/Header';

import Contact from '@organisms/Contact';
import Home from '@organisms/Home';
import Labs from '@organisms/Labs';
import Mission from '@organisms/Mission';

import AppProvider from '@templates/AppProvider';

import GlobalStyles from '@styles/global';

const IndexPage: React.FC<PageProps> = () => (
  <AppProvider>
    <GlobalStyles />
    <SEO title="Home" />
    <Header />
    <Home id="home" />
    <Mission />
    <Labs />
    <Contact id="contato" />
    <Footer />
  </AppProvider>
);

export default IndexPage;
