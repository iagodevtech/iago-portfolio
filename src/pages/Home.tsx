import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  FaGithub,
  FaLinkedin,
  FaProjectDiagram,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaJs,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiFlutter,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiMariadb,
  SiWordpress,
} from 'react-icons/si';
import MiniGame from '../components/MiniGame';
import LikeButton from '../components/LikeButton';
import LikeStats from '../components/LikeStats';
import './Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [currentText, setCurrentText] = useState('');
  const [fullText] = useState(
    'Desenvolvedor FullStack apaixonado por criar soluções inovadoras'
  );
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (textIndex < fullText.length && isTyping) {
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (textIndex === fullText.length) {
      setTimeout(() => setIsTyping(false), 2000);
    }
  }, [textIndex, isTyping, fullText]);

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/iagodevtech',
      label: 'GitHub',
    },
    {
      icon: (
        <span
          style={{
            fontSize: '1.1em',
            fontWeight: '900',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          𝕏
        </span>
      ),
      url: 'https://x.com/iagodevtech',
      label: 'X',
    },
  ];

  const technologies = [
    { icon: <FaReact />, name: 'React', color: '#61DAFB' },
    { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
    { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
    { icon: <FaPython />, name: 'Python', color: '#3776AB' },
    { icon: <FaJava />, name: 'Java', color: '#ED8B00' },
    { icon: <SiFlutter />, name: 'Flutter', color: '#02569B' },
    { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
    { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#336791' },
    { icon: <SiMysql />, name: 'MySQL', color: '#4479A1' },
    { icon: <FaGitAlt />, name: 'Git', color: '#F05032' },
    { icon: <FaDocker />, name: 'Docker', color: '#2496ED' },
    { icon: <FaAws />, name: 'AWS', color: '#FF9900' },
    { icon: <FaJs />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <SiMariadb />, name: 'MariaDB', color: '#C0765C' },
    { icon: <SiWordpress />, name: 'WordPress', color: '#21759B' },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Olá, eu sou <span className="highlight">Iago Alves</span>
            </motion.h1>

            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {currentText}
              <span className="cursor">|</span>
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Formado em Análise e Desenvolvimento de Sistemas, cursando
              pós-graduação em Administração de Banco de Dados. Apaixonado por
              desenvolvimento Front-end e explorando as vertentes de Back-end
              para me tornar um futuro FullStack.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/projetos')}
              >
                <FaProjectDiagram />
                Projetos
              </motion.button>
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/iago-alves-b502a518b/',
                    '_blank'
                  )
                }
              >
                <FaLinkedin /> LinkedIn
              </motion.button>
            </motion.div>

            <motion.div
              className="social-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-circle"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="profile-photo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/profile-photo.png"
                alt="Iago - Desenvolvedor FullStack"
                className="profile-image"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Like Section */}
      <section className="like-section">
        <motion.div
          className="like-container-wrapper"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">💖 Gostou do meu portfólio?</h2>
          <p className="section-description">
            Se você gostou do que viu, deixe uma curtida! Isso me ajuda a saber
            que estou no caminho certo! 🚀
          </p>
          <LikeButton />
          <LikeStats />
        </motion.div>
      </section>

      {/* Mini Game Section */}
      <section className="game-section">
        <motion.div
          className="game-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            🎮 Mini Jogo - Teste suas Habilidades!
          </h2>
          <p className="section-description">
            Enquanto explora meu portfólio, que tal jogar um pouco? Este é um
            jogo de memória que testa sua capacidade de concentração!
          </p>
          <MiniGame />
        </motion.div>
      </section>

      {/* Skills Preview */}
      <section className="skills-preview">
        <motion.div
          className="skills-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">🛠️ Tecnologias & Ferramentas</h2>
          <div className="skills-grid">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="skill-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="skill-icon" style={{ color: tech.color }}>
                  {tech.icon}
                </div>
                <div className="skill-name">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
