import React from 'react';

import SEO from '@atoms/SEO';

import Footer from '@molecules/Footer';
import Header from '@molecules/Header';

import AboutUs, { AboutUsProps } from '@organisms/AboutUs';
import Home from '@organisms/Home';
import OperationAreas, { AtuationArea } from '@organisms/OperationAreas';
import Professors from '@organisms/Professors';

import AppProvider from '@templates/AppProvider';

import GlobalStyles from '@styles/global';
// import { Container } from './styles';

interface LaboratoryProps {
  data: {
    name: string;
    title: string;
    backgroundImg: string;
    aboutUs: AboutUsProps;
    areas: AtuationArea[];
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
      <Header navItems={navItems} />

      <Home
        nextId="sobre"
        title={data.title}
        backgroundImg={data.backgroundImg}
      />
      <AboutUs {...data.aboutUs} />
      <OperationAreas areas={data.areas} />
      {/* <Professors /> */}

      <Footer />
    </AppProvider>
  );
};

export default Laboratory;
