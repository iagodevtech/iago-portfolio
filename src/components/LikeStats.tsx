import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaUsers, FaTrophy } from 'react-icons/fa';
import { useLikes } from '../hooks/useLikes';
import './LikeStats.css';

const LikeStats: React.FC = () => {
  const { likes, totalVisitors } = useLikes();

  const stats = [
    {
      icon: <FaHeart />,
      label: 'Curtidas',
      value: likes,
      color: '#ef4444',
      description: 'Pessoas que curtiram',
    },
    {
      icon: <FaUsers />,
      label: 'Visitantes',
      value: totalVisitors,
      color: '#3b82f6',
      description: 'Total de visitas',
    },
  ];

  return (
    <div className="like-stats">
      <motion.div
        className="stats-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaTrophy className="trophy-icon" />
        <h3>Estatísticas do Portfólio</h3>
      </motion.div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="stat-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="stat-icon" style={{ color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {likes > 0 && (
        <motion.div
          className="motivational-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>
            {likes === 1
              ? '🎉 Obrigado pela primeira curtida! Isso significa muito para mim!'
              : `🎉 ${likes} pessoas já curtiram! Obrigado pelo apoio!`}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default LikeStats;
