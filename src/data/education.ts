import { Education } from '../types';

export const education: Education[] = [
  {
    id: '1',
    institution: 'Universidade de São Paulo (USP)',
    degree: 'Pós-Graduação',
    field: 'Administração de Banco de Dados',
    startDate: '2023-03-01',
    current: true,
    description: 'Especialização em administração, otimização e segurança de bancos de dados empresariais.'
  },
  {
    id: '2',
    institution: 'Centro Universitário Senac',
    degree: 'Graduação',
    field: 'Análise e Desenvolvimento de Sistemas',
    startDate: '2020-02-01',
    endDate: '2022-12-15',
    current: false,
    description: 'Formação completa em desenvolvimento de software com foco em programação, banco de dados e gestão de projetos.'
  },
  {
    id: '3',
    institution: 'Microsoft',
    degree: 'Certificação',
    field: 'Power Platform Developer',
    startDate: '2021-06-01',
    endDate: '2021-08-15',
    current: false,
    description: 'Certificação oficial Microsoft em desenvolvimento de aplicações utilizando PowerApps e Power Platform.'
  },
  {
    id: '4',
    institution: 'Google',
    degree: 'Certificação',
    field: 'Google Cloud Professional Data Engineer',
    startDate: '2022-03-01',
    endDate: '2022-05-15',
    current: false,
    description: 'Certificação em engenharia de dados na plataforma Google Cloud, incluindo BigQuery e Dataflow.'
  }
];
