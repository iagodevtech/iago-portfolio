import { Experience } from '../types';

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Tech Solutions Ltda',
    position: 'Desenvolvedor Full Stack Pleno',
    description: 'Desenvolvimento de aplicações web e móveis utilizando React, Node.js e FlutterFlow. Implementação de sistemas de banco de dados e APIs REST.',
    startDate: '2023-01-01',
    current: true,
    technologies: ['React', 'Node.js', 'FlutterFlow', 'MongoDB', 'PostgreSQL', 'TypeScript']
  },
  {
    id: '2',
    company: 'Data Analytics Corp',
    position: 'Analista de Dados',
    description: 'Análise e processamento de dados empresariais utilizando Python, ETL/ELT e ferramentas de Business Intelligence.',
    startDate: '2022-06-01',
    endDate: '2022-12-31',
    current: false,
    technologies: ['Python', 'PostgreSQL', 'Power BI', 'Excel Avançado', 'ETL/ELT']
  },
  {
    id: '3',
    company: 'Office Solutions',
    position: 'Especialista em PowerApps',
    description: 'Desenvolvimento de aplicações empresariais utilizando PowerApps, Power Automate e integração com SharePoint.',
    startDate: '2021-03-01',
    endDate: '2022-05-31',
    current: false,
    technologies: ['PowerApps', 'Power Automate', 'SharePoint', 'Excel Avançado', 'Power BI']
  },
  {
    id: '4',
    company: 'Startup Innovation',
    position: 'Desenvolvedor Frontend Júnior',
    description: 'Desenvolvimento de interfaces de usuário responsivas utilizando HTML, CSS, JavaScript e frameworks modernos.',
    startDate: '2020-08-01',
    endDate: '2021-02-28',
    current: false,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap']
  }
];
