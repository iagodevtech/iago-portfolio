import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaMobile,
  FaGlobe,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiFlutter,
  SiMongodb,
  SiPostgresql,
  SiMariadb,
  SiWordpress,
  SiStripe,
  SiFirebase,
  SiFramer,
  SiDjango,
  SiChartdotjs,
  SiExpress,
  SiJsonwebtokens,
} from 'react-icons/si';
import LikeCallToAction from '../components/LikeCallToAction';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mapeamento de tecnologias para ícones e cores
  const technologyIcons: {
    [key: string]: { icon: React.ReactElement; color: string };
  } = {
    React: { icon: <FaReact />, color: '#61DAFB' },
    'Node.js': { icon: <FaNodeJs />, color: '#339933' },
    MongoDB: { icon: <SiMongodb />, color: '#47A248' },
    Stripe: { icon: <SiStripe />, color: '#6772E5' },
    TypeScript: { icon: <SiTypescript />, color: '#3178C6' },
    Firebase: { icon: <SiFirebase />, color: '#FFCA28' },
    'Framer Motion': { icon: <SiFramer />, color: '#0055FF' },
    Flutter: { icon: <SiFlutter />, color: '#02569B' },
    Dart: { icon: <SiFlutter />, color: '#02569B' },
    'APIs REST': { icon: <FaCode />, color: '#6C757D' },
    Python: { icon: <FaPython />, color: '#3776AB' },
    Django: { icon: <SiDjango />, color: '#092E20' },
    PostgreSQL: { icon: <SiPostgresql />, color: '#336791' },
    'Chart.js': { icon: <SiChartdotjs />, color: '#FF6384' },
    Express: { icon: <SiExpress />, color: '#000000' },
    JWT: { icon: <SiJsonwebtokens />, color: '#000000' },
    JavaScript: { icon: <FaJs />, color: '#F7DF1E' },
    MariaDB: { icon: <SiMariadb />, color: '#C0765C' },
    WordPress: { icon: <SiWordpress />, color: '#21759B' },
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description:
        'Plataforma completa de e-commerce com sistema de pagamentos, gestão de produtos e painel administrativo.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JavaScript'],
      category: 'fullstack',
      image: '/project1.jpg',
      githubUrl: 'https://github.com/seu-usuario/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'Aplicativo de gerenciamento de tarefas com drag & drop, notificações e sincronização em tempo real.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Framer Motion'],
      category: 'frontend',
      image: '/project2.jpg',
      githubUrl: 'https://github.com/seu-usuario/task-manager',
      liveUrl: 'https://task-manager-demo.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      description:
        'Aplicativo mobile para banco digital com autenticação biométrica e transferências PIX.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'APIs REST'],
      category: 'mobile',
      image: '/project3.jpg',
      githubUrl: 'https://github.com/seu-usuario/banking-app',
      featured: false,
    },
    {
      id: 4,
      title: 'Data Analytics Dashboard',
      description:
        'Dashboard interativo para análise de dados com gráficos dinâmicos e relatórios personalizáveis.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Chart.js', 'MariaDB'],
      category: 'backend',
      image: '/project4.jpg',
      githubUrl: 'https://github.com/seu-usuario/analytics-dashboard',
      featured: false,
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description:
        'Site portfólio responsivo com animações e mini jogo interativo.',
      technologies: ['React', 'TypeScript', 'Framer Motion', 'CSS3'],
      category: 'frontend',
      image: '/project5.jpg',
      githubUrl: 'https://github.com/seu-usuario/portfolio',
      liveUrl: 'https://portfolio-demo.com',
      featured: true,
    },
    {
      id: 6,
      title: 'API REST Service',
      description:
        'Serviço de API REST para gestão de usuários com autenticação JWT e documentação Swagger.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'WordPress'],
      category: 'backend',
      image: '/project6.jpg',
      githubUrl: 'https://github.com/seu-usuario/api-service',
      featured: false,
    },
  ];

  const categories = [
    { id: 'all', label: 'Todos', icon: <FaCode /> },
    { id: 'frontend', label: 'Frontend', icon: <FaGlobe /> },
    { id: 'backend', label: 'Backend', icon: <FaDatabase /> },
    { id: 'mobile', label: 'Mobile', icon: <FaMobile /> },
    { id: 'fullstack', label: 'FullStack', icon: <FaCode /> },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory =
      selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <FaGlobe />;
      case 'backend':
        return <FaDatabase />;
      case 'mobile':
        return <FaMobile />;
      case 'fullstack':
        return <FaCode />;
      default:
        return <FaCode />;
    }
  };

  return (
    <div className="projects">
      {/* Hero Section */}
      <section className="projects-hero">
        <motion.div
          className="projects-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="projects-title">Meus Projetos</h1>
          <p className="projects-subtitle">
            Uma coleção dos meus trabalhos mais recentes e projetos em destaque
          </p>
        </motion.div>
      </section>

      {/* Filters and Search */}
      <section className="projects-filters">
        <div className="container">
          <motion.div
            className="filters-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="search-container">
              <input
                type="text"
                placeholder="Buscar projetos..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="category-filters">
              {categories.map(category => (
                <motion.button
                  key={category.id}
                  className={`category-filter ${
                    selectedCategory === category.id ? 'active' : ''
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-label">{category.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid">
        <div className="container">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <div className="projects-container">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className={`project-card ${
                      project.featured ? 'featured' : ''
                    }`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    {project.featured && (
                      <div className="featured-badge">
                        <span>⭐ Destaque</span>
                      </div>
                    )}

                    <div className="project-image">
                      <div className="image-placeholder">
                        <span>{project.title.charAt(0)}</span>
                      </div>
                      <div className="project-overlay">
                        <div className="project-actions">
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-action github"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaGithub />
                          </motion.a>
                          {project.liveUrl && (
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-action live"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <FaExternalLinkAlt />
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="project-content">
                      <div className="project-header">
                        <h3 className="project-title">{project.title}</h3>
                        <span className="project-category">
                          {getCategoryIcon(project.category)}
                          {project.category}
                        </span>
                      </div>

                      <p className="project-description">
                        {project.description}
                      </p>

                      <div className="project-technologies">
                        {project.technologies.map((tech, techIndex) => {
                          const techInfo = technologyIcons[tech] || {
                            icon: <FaCode />,
                            color: '#6C757D',
                          };
                          return (
                            <motion.div
                              key={tech}
                              className="technology-tag"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.1 + techIndex * 0.05,
                              }}
                              style={{ color: techInfo.color }}
                            >
                              <span className="tech-icon">{techInfo.icon}</span>
                              <span className="tech-name">{tech}</span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                className="no-projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3>Nenhum projeto encontrado</h3>
                <p>Tente ajustar os filtros ou termos de busca</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section className="projects-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Interessado em trabalhar juntos?</h2>
            <p>
              Estou sempre aberto a novas oportunidades e projetos
              interessantes. Vamos criar algo incrível juntos!
            </p>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = '/contato')}
            >
              Entre em Contato
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Like Call to Action */}
      <LikeCallToAction />
    </div>
  );
};

export default Projects;
