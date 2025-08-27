import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Plataforma completa de e-commerce com sistema de pagamentos, gestão de produtos e painel administrativo.',
    image: '/projects/ecommerce.svg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'TypeScript'],
    category: 'fullstack',
    githubUrl: 'https://github.com/iago-alves-medeiros/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.com',
    featured: true,
    date: '2024-01-15'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Aplicativo de gerenciamento de tarefas com funcionalidades de colaboração em tempo real.',
    image: '/projects/task-app.svg',
    technologies: ['React', 'Firebase', 'Material-UI', 'TypeScript'],
    category: 'frontend',
    githubUrl: 'https://github.com/iago-alves-medeiros/task-manager',
    liveUrl: 'https://task-manager-demo.com',
    featured: true,
    date: '2023-12-20'
  },
  {
    id: '3',
    title: 'Database Management System',
    description: 'Sistema de gerenciamento de banco de dados com interface web e relatórios avançados.',
    image: '/projects/database-system.svg',
    technologies: ['Python', 'PostgreSQL', 'Flask', 'SQLAlchemy', 'Bootstrap'],
    category: 'database',
    githubUrl: 'https://github.com/iago-alves-medeiros/db-manager',
    featured: false,
    date: '2023-11-10'
  },
  {
    id: '4',
    title: 'Mobile App - FlutterFlow',
    description: 'Aplicativo móvel desenvolvido com FlutterFlow para gestão de eventos e conferências.',
    image: '/projects/mobile-app.svg',
    technologies: ['FlutterFlow', 'Firebase', 'Google Cloud', 'JavaScript'],
    category: 'mobile',
    githubUrl: 'https://github.com/iago-alves-medeiros/event-app',
    liveUrl: 'https://event-app-demo.com',
    featured: true,
    date: '2023-10-05'
  },
  {
    id: '5',
    title: 'PowerApps Dashboard',
    description: 'Dashboard executivo desenvolvido com PowerApps para análise de dados empresariais.',
    image: '/projects/powerapps-dashboard.svg',
    technologies: ['PowerApps', 'Power BI', 'SharePoint', 'Excel', 'Power Automate'],
    category: 'tools',
    githubUrl: 'https://github.com/iago-alves-medeiros/powerapps-dashboard',
    featured: false,
    date: '2023-09-15'
  },
  {
    id: '6',
    title: 'API REST - Node.js',
    description: 'API REST completa para sistema de gestão de usuários com autenticação JWT.',
    image: '/projects/api-rest.svg',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
    category: 'backend',
    githubUrl: 'https://github.com/iago-alves-medeiros/user-api',
    featured: false,
    date: '2023-08-20'
  },
  {
    id: '7',
    title: 'Data Pipeline ETL',
    description: 'Pipeline de dados ETL para processamento e transformação de dados empresariais.',
    image: '/projects/etl-pipeline.svg',
    technologies: ['Python', 'Apache Airflow', 'PostgreSQL', 'Pandas', 'Docker'],
    category: 'database',
    githubUrl: 'https://github.com/iago-alves-medeiros/etl-pipeline',
    featured: false,
    date: '2023-07-10'
  },
  {
    id: '8',
    title: 'Portfolio Website',
    description: 'Website de portfolio pessoal com design responsivo e funcionalidades interativas.',
    image: '/projects/portfolio.svg',
    technologies: ['React', 'TypeScript', 'CSS3', 'Framer Motion', 'Vite'],
    category: 'frontend',
    githubUrl: 'https://github.com/iago-alves-medeiros/portfolio',
    liveUrl: 'https://iago-portfolio.com',
    featured: true,
    date: '2023-06-01'
  }
];
