import React from 'react';

import { PageProps } from 'gatsby';

import SEO from '@atoms/SEO';

import Footer from '@molecules/Footer';
import Header from '@molecules/Header';

import Contact from '@organisms/Contact';
import Home from '@organisms/Home';
import LabsList from '@organisms/LabsList';
import Mission from '@organisms/Mission';

import AppProvider from '@templates/AppProvider';

import GlobalStyles from '@styles/global';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'Missão', to: 'missao' },
  { name: 'Laboratórios', to: 'laboratorios' },
  { name: 'Contato', to: 'contato' },
];

const IndexPage: React.FC<PageProps> = () => (
  <AppProvider>
    <GlobalStyles />
    <SEO title="Home" />
    <Header navItems={navItems} />

    <Home
      title="Centro de Inovação e Pesquisa em Tecnologias da Informação e Engenharia de Sistemas"
      nextId="missao"
    />
    <Mission />
    <LabsList />
    <Contact />

    <Footer />
  </AppProvider>
);

export default IndexPage;
