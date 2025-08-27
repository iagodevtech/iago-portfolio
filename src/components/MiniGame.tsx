import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaRedo, FaTrophy, FaClock } from 'react-icons/fa';
import './MiniGame.css';

interface Card {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const MiniGame: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gamePaused, setGamePaused] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [bestScore, setBestScore] = useState<number | null>(null);
  const [bestTime, setBestTime] = useState<number | null>(null);

  const emojis = ['🚀', '💻', '🎯', '⚡', '🔥', '🎮', '🌟', '💡'];

  const initializeGame = useCallback(() => {
    const gameCards = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        value: emoji,
        isFlipped: false,
        isMatched: false,
      }));

    setCards(gameCards);
    setFlippedCards([]);
    setGameStarted(false);
    setGamePaused(false);
    setGameWon(false);
    setMoves(0);
    setTime(0);
  }, []);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameStarted && !gamePaused && !gameWon) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, gamePaused, gameWon]);

  useEffect(() => {
    if (gameWon) {
      const currentScore = moves;
      const currentTime = time;

      if (bestScore === null || currentScore < bestScore) {
        setBestScore(currentScore);
        localStorage.setItem('bestScore', currentScore.toString());
      }

      if (bestTime === null || currentTime < bestTime) {
        setBestTime(currentTime);
        localStorage.setItem('bestTime', currentTime.toString());
      }
    }
  }, [gameWon, moves, time, bestScore, bestTime]);

  useEffect(() => {
    const savedBestScore = localStorage.getItem('bestScore');
    const savedBestTime = localStorage.getItem('bestTime');

    if (savedBestScore) setBestScore(parseInt(savedBestScore));
    if (savedBestTime) setBestTime(parseInt(savedBestTime));
  }, []);

  const startGame = () => {
    setGameStarted(true);
    setGamePaused(false);
  };

  const pauseGame = () => {
    setGamePaused(!gamePaused);
  };

  const resetGame = () => {
    initializeGame();
  };

  const handleCardClick = (cardId: number) => {
    if (!gameStarted || gamePaused || gameWon) return;

    const card = cards.find(c => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched) return;

    const newCards = [...cards];
    newCards[cardId].isFlipped = true;
    setCards(newCards);

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);

      const [firstId, secondId] = newFlippedCards;
      const firstCard = newCards[firstId];
      const secondCard = newCards[secondId];

      if (firstCard.value === secondCard.value) {
        // Match found
        newCards[firstId].isMatched = true;
        newCards[secondId].isMatched = true;
        setCards(newCards);
        setFlippedCards([]);

        // Check if game is won
        if (newCards.every(card => card.isMatched)) {
          setGameWon(true);
        }
      } else {
        // No match, flip cards back
        setTimeout(() => {
          newCards[firstId].isFlipped = false;
          newCards[secondId].isFlipped = false;
          setCards(newCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <div className="mini-game">
      <div className="game-header">
        <div className="game-stats">
          <div className="stat">
            <FaClock /> <span>Tempo: {formatTime(time)}</span>
          </div>
          <div className="stat">
            <span>Movimentos: {moves}</span>
          </div>
        </div>

        <div className="game-controls">
          {!gameStarted ? (
            <motion.button
              className="btn btn-play"
              onClick={startGame}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPlay /> Iniciar
            </motion.button>
          ) : (
            <>
              <motion.button
                className="btn btn-pause"
                onClick={pauseGame}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {gamePaused ? <FaPlay /> : <FaPause />}
                {gamePaused ? 'Continuar' : 'Pausar'}
              </motion.button>
              <motion.button
                className="btn btn-reset"
                onClick={resetGame}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRedo /> Reiniciar
              </motion.button>
            </>
          )}
        </div>
      </div>

      {gameWon && (
        <motion.div
          className="game-won"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaTrophy className="trophy-icon" />
          <h3>Parabéns! Você venceu! 🎉</h3>
          <p>
            Movimentos: {moves} | Tempo: {formatTime(time)}
          </p>
          {bestScore && <p>Melhor pontuação: {bestScore} movimentos</p>}
          {bestTime && <p>Melhor tempo: {formatTime(bestTime)}</p>}
        </motion.div>
      )}

      <div className="game-board">
        {cards.map(card => (
          <motion.div
            key={card.id}
            className={`game-card ${card.isFlipped ? 'flipped' : ''} ${
              card.isMatched ? 'matched' : ''
            }`}
            onClick={() => handleCardClick(card.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card-inner">
              <div className="card-front">❓</div>
              <div className="card-back">{card.value}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="game-instructions">
        <h4>Como jogar:</h4>
        <p>
          Encontre todos os pares de emojis iguais. Quanto menos movimentos e
          tempo, melhor!
        </p>
      </div>
    </div>
  );
};

export default MiniGame;
