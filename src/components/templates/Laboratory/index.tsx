import React from 'react';

import SEO from '@atoms/SEO';

import Header from '@molecules/Header';

import Home from '@organisms/Home';

import AppProvider from '@templates/AppProvider';

import GlobalStyles from '@styles/global';
// import { Container } from './styles';

interface LaboratoryProps {
  data: {
    name: string;
    title: string;
    backgroundImg: string;
  };
}

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'Sobre Nós', to: 'sobre' },
  { name: 'Área de Atuação', to: 'area' },
  { name: 'Professores', to: 'professores' },
];

const Laboratory: React.FC<LaboratoryProps> = ({ data }) => {
  return (
    <AppProvider>
      <GlobalStyles />
      <SEO title={data.name} />

      <Header title={data.name} navItems={navItems} />
      <Home nextId="2" title={data.title} backgroundImg={data.backgroundImg} />
    </AppProvider>
  );
};

export default Laboratory;
