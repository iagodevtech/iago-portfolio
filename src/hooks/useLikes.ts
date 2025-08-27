import { useState, useEffect } from 'react';
import { likesService } from '../services/likesService';

interface LikeStats {
  likes: number;
  isLiked: boolean;
  totalVisitors: number;
  isLoading: boolean;
}

export const useLikes = () => {
  const [likeStats, setLikeStats] = useState<LikeStats>({
    likes: 0,
    isLiked: false,
    totalVisitors: 0,
    isLoading: true,
  });

  // Carregar dados do Supabase
  useEffect(() => {
    const loadData = async () => {
      try {
        // Registrar visita
        await likesService.registerVisit();

        // Carregar estatísticas
        const stats = await likesService.getStats();

        // Carregar status de curtida do usuário
        const userLiked = await likesService.getUserLikeStatus();

        setLikeStats({
          likes: stats.total_likes,
          isLiked: userLiked,
          totalVisitors: stats.total_visitors,
          isLoading: false,
        });
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
        setLikeStats(prev => ({ ...prev, isLoading: false }));
      }
    };

    loadData();

    // Sincronizar dados a cada 30 segundos para garantir consistência
    const syncInterval = setInterval(async () => {
      try {
        const stats = await likesService.getStats();
        const userLiked = await likesService.getUserLikeStatus();

        setLikeStats(prev => ({
          ...prev,
          likes: stats.total_likes,
          isLiked: userLiked,
          totalVisitors: stats.total_visitors,
        }));
      } catch (error) {
        console.error('Erro ao sincronizar dados:', error);
      }
    }, 30000);

    return () => clearInterval(syncInterval);
  }, []);

  // Sincronizar dados quando a página ganhar foco
  useEffect(() => {
    const handleFocus = async () => {
      try {
        const stats = await likesService.getStats();
        const userLiked = await likesService.getUserLikeStatus();

        setLikeStats(prev => ({
          ...prev,
          likes: stats.total_likes,
          isLiked: userLiked,
          totalVisitors: stats.total_visitors,
        }));
      } catch (error) {
        console.error('Erro ao sincronizar dados no foco:', error);
      }
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  const handleLike = async () => {
    try {
      // Se já curtiu, não faz nada
      if (likeStats.isLiked) {
        return;
      }

      setLikeStats(prev => ({ ...prev, isLoading: true }));

      await likesService.toggleLike();

      // Buscar dados atualizados do servidor imediatamente
      const stats = await likesService.getStats();
      const userLiked = await likesService.getUserLikeStatus();

      setLikeStats(prev => ({
        ...prev,
        likes: stats.total_likes,
        isLiked: userLiked,
        totalVisitors: stats.total_visitors,
        isLoading: false,
      }));
    } catch (error) {
      console.error('Erro ao curtir:', error);
      setLikeStats(prev => ({ ...prev, isLoading: false }));
    }
  };

  const formatLikes = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  const likeRate =
    likeStats.totalVisitors > 0
      ? ((likeStats.likes / likeStats.totalVisitors) * 100).toFixed(1)
      : '0';

  return {
    ...likeStats,
    handleLike,
    formatLikes,
    likeRate,
  };
};
