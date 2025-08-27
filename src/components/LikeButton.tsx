import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useLikes } from '../hooks/useLikes';
import './LikeButton.css';

const LikeButton: React.FC = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const { likes, isLiked, handleLike, formatLikes } = useLikes();

  const onLikeClick = () => {
    if (!isLiked) {
      setShowAnimation(true);
      setTimeout(() => setShowAnimation(false), 1000);
      handleLike();
    }
    // Se já curtiu, não faz nada (não pode descurtir)
  };

  return (
    <div className="like-container">
      <motion.button
        className={`like-button ${isLiked ? 'liked' : ''}`}
        onClick={onLikeClick}
        whileHover={{ scale: isLiked ? 1 : 1.1 }}
        whileTap={{ scale: isLiked ? 1 : 0.9 }}
        style={{ cursor: isLiked ? 'default' : 'pointer' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {isLiked ? (
            <motion.div
              key="filled"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaHeart className="heart-icon filled" />
            </motion.div>
          ) : (
            <motion.div
              key="outline"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaRegHeart className="heart-icon outline" />
            </motion.div>
          )}
        </AnimatePresence>

        <span className="like-count">{formatLikes(likes)}</span>
      </motion.button>

      {/* Animação de confete quando curtir */}
      <AnimatePresence>
        {showAnimation && (
          <motion.div
            className="like-animation"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="confetti">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="confetti-piece"
                  style={
                    {
                      '--angle': `${i * 30}deg`,
                      '--delay': `${i * 0.1}s`,
                    } as React.CSSProperties
                  }
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mensagem motivacional */}
      {likes > 0 && (
        <motion.div
          className="like-message"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>
            {likes === 1
              ? '1 pessoa curtiu este portfólio! 🎉'
              : `${likes} pessoas curtiram este portfólio! 🎉`}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default LikeButton;
