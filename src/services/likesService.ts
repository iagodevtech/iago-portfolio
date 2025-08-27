import { supabase } from '../lib/supabase';

// Gerar ID único para cada usuário (baseado no navegador)
const generateUserId = (): string => {
  let userId = localStorage.getItem('portfolio-user-id');
  if (!userId) {
    userId =
      'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    localStorage.setItem('portfolio-user-id', userId);
  }
  return userId;
};

export const likesService = {
  // Obter estatísticas gerais
  async getStats() {
    try {
      const { data, error } = await supabase
        .from('portfolio_stats')
        .select('*')
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Erro ao buscar estatísticas:', error);
      return { total_likes: 0, total_visitors: 0 };
    }
  },

  // Obter status de curtida do usuário
  async getUserLikeStatus() {
    try {
      const userId = generateUserId();
      const { data, error } = await supabase
        .from('portfolio_likes')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error && error.code !== 'PGRST116') throw error; // PGRST116 = não encontrado
      return data?.is_liked || false;
    } catch (error) {
      console.error('Erro ao buscar status de curtida:', error);
      return false;
    }
  },

  // Curtir (sem descurtir)
  async toggleLike() {
    try {
      const userId = generateUserId();

      // Verificar se já existe um registro para este usuário
      const { data: existingLike } = await supabase
        .from('portfolio_likes')
        .select('*')
        .eq('user_id', userId)
        .single();

      // Se já curtiu, não permite descurtir
      if (existingLike && existingLike.is_liked) {
        return true; // Mantém curtido
      }

      let newLikeStatus: boolean;

      if (existingLike) {
        // Atualizar curtida existente (só se não estava curtido)
        newLikeStatus = true;
        const { error } = await supabase
          .from('portfolio_likes')
          .update({ is_liked: true })
          .eq('user_id', userId);

        if (error) throw error;
      } else {
        // Criar nova curtida
        newLikeStatus = true;
        const { error } = await supabase
          .from('portfolio_likes')
          .insert({ user_id: userId, is_liked: true });

        if (error) throw error;
      }

      // Atualizar estatísticas (só incrementa)
      await this.updateStats(1);

      return newLikeStatus;
    } catch (error) {
      console.error('Erro ao curtir:', error);
      throw error;
    }
  },

  // Registrar nova visita
  async registerVisit() {
    try {
      const { data: stats } = await supabase
        .from('portfolio_stats')
        .select('total_visitors')
        .single();

      if (stats) {
        const { error } = await supabase
          .from('portfolio_stats')
          .update({
            total_visitors: stats.total_visitors + 1,
            last_updated: new Date().toISOString(),
          })
          .eq('id', 1);

        if (error) throw error;
      }
    } catch (error) {
      console.error('Erro ao registrar visita:', error);
    }
  },

  // Atualizar estatísticas
  async updateStats(likeChange: number) {
    try {
      const { data: stats } = await supabase
        .from('portfolio_stats')
        .select('total_likes')
        .single();

      if (stats) {
        const newTotalLikes = Math.max(0, stats.total_likes + likeChange);
        const { error } = await supabase
          .from('portfolio_stats')
          .update({
            total_likes: newTotalLikes,
            last_updated: new Date().toISOString(),
          })
          .eq('id', 1);

        if (error) throw error;
      }
    } catch (error) {
      console.error('Erro ao atualizar estatísticas:', error);
    }
  },

  // Obter todas as curtidas (para admin)
  async getAllLikes() {
    try {
      const { data, error } = await supabase
        .from('portfolio_likes')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Erro ao buscar todas as curtidas:', error);
      return [];
    }
  },
};
