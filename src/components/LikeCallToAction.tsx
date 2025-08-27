import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaArrowUp, FaSmile } from 'react-icons/fa';
import { useLikes } from '../hooks/useLikes';
import './LikeCallToAction.css';

const LikeCallToAction: React.FC = () => {
  const navigate = useNavigate();
  const { likes, isLiked, formatLikes } = useLikes();

  const handleGoToLike = () => {
    navigate('/');
    // Scroll para a seção de curtidas após um pequeno delay
    setTimeout(() => {
      const likeSection = document.querySelector('.like-section');
      if (likeSection) {
        likeSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  return (
    <motion.div
      className="like-cta"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="cta-container">
        <div className="cta-content">
          <motion.div
            className="cta-icon"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <FaSmile />
          </motion.div>

          <div className="cta-text">
            <h3>Gostou do que viu? 💖</h3>
            <p>
              Se você curtiu meu portfólio, deixe uma curtida! Isso me ajuda
              muito e mostra que estou no caminho certo! 🚀
            </p>

            {likes > 0 && (
              <div className="cta-stats">
                <span className="likes-count">
                  <FaHeart className="heart-icon" />
                  {formatLikes(likes)} pessoas já curtiram!
                </span>
              </div>
            )}
          </div>
        </div>

        <motion.button
          className="cta-button"
          onClick={handleGoToLike}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaHeart className="button-icon" />
          {isLiked ? 'Ver Curtidas' : 'Curtir Portfólio'}
          <FaArrowUp className="arrow-icon" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default LikeCallToAction;
