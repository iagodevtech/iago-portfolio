import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaUsers, FaDownload, FaEye } from 'react-icons/fa';
import { likesService } from '../services/likesService';
import './AdminDashboard.css';

interface LikeData {
  id: number;
  user_id: string;
  is_liked: boolean;
  created_at: string;
  updated_at: string;
}

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({ total_likes: 0, total_visitors: 0 });
  const [likes, setLikes] = useState<LikeData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const [statsData, likesData] = await Promise.all([
        likesService.getStats(),
        likesService.getAllLikes(),
      ]);

      setStats(statsData);
      setLikes(likesData);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const exportData = () => {
    const data = {
      stats,
      likes,
      exportDate: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio-likes-${
      new Date().toISOString().split('T')[0]
    }.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR');
  };

  if (isLoading) {
    return (
      <div className="admin-dashboard">
        <div className="loading">Carregando dados...</div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <motion.div
        className="dashboard-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>📊 Dashboard de Curtidas</h1>
        <p>Gerencie as estatísticas do seu portfólio</p>
      </motion.div>

      {/* Estatísticas Principais */}
      <div className="stats-grid">
        <motion.div
          className="stat-card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <FaHeart className="stat-icon" />
          <div className="stat-content">
            <div className="stat-value">{stats.total_likes}</div>
            <div className="stat-label">Total de Curtidas</div>
          </div>
        </motion.div>

        <motion.div
          className="stat-card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FaUsers className="stat-icon" />
          <div className="stat-content">
            <div className="stat-value">{stats.total_visitors}</div>
            <div className="stat-label">Total de Visitantes</div>
          </div>
        </motion.div>
      </div>

      {/* Ações */}
      <motion.div
        className="dashboard-actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <button className="action-btn" onClick={loadData}>
          <FaEye /> Atualizar Dados
        </button>
        <button className="action-btn" onClick={exportData}>
          <FaDownload /> Exportar Dados
        </button>
        <button
          className="action-btn toggle-btn"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Ocultar Detalhes' : 'Ver Detalhes'}
        </button>
      </motion.div>

      {/* Detalhes das Curtidas */}
      {showDetails && (
        <motion.div
          className="likes-details"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.5 }}
        >
          <h3>📋 Detalhes das Curtidas</h3>
          <div className="likes-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Usuário</th>
                  <th>Status</th>
                  <th>Criado em</th>
                  <th>Atualizado em</th>
                </tr>
              </thead>
              <tbody>
                {likes.map(like => (
                  <tr key={like.id}>
                    <td>{like.id}</td>
                    <td className="user-id">{like.user_id}</td>
                    <td>
                      <span
                        className={`status ${
                          like.is_liked ? 'liked' : 'not-liked'
                        }`}
                      >
                        {like.is_liked ? '❤️ Curtiu' : '🤍 Não curtiu'}
                      </span>
                    </td>
                    <td>{formatDate(like.created_at)}</td>
                    <td>{formatDate(like.updated_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AdminDashboard;
