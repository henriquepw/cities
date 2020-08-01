import React from 'react';

import Laboratory from '@templates/Laboratory';

const Gcompi: React.FC = () => {
  return (
    <Laboratory
      data={{
        name: 'GCompi',
        title:
          'Grupo de Pesquisa em Comunicações e Processamento de Informação',
        backgroundImg:
          'https://cdn.mynewlab.com/wp-content/uploads/2018/04/iStock-928891398.jpg.webp',
        // aboutUs:
        //   'GComPI foi criado em 2018 e conta atualmente com cerca de 15 pesquisadores, entre professores e alunos. O grupo atua em projetos de pesquisa e desenvolvimento em áreas relacionadas a sistemas de comunicações e processamento de informação, como redes de sensores sem fio, sistemas de Internet das Coisas (IoT), redes cognitivas, sistemas distribuídos, processamento de sinais e análise de dados.',
      }}
    />
  );
};

export default Gcompi;
