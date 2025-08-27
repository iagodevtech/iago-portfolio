# 🗄️ Configuração do Supabase para Sistema de Curtidas

## 📋 Passo a Passo Completo

### **1. Criar Conta no Supabase**

1. Acesse: https://supabase.com
2. Clique em "Start your project"
3. Faça login com GitHub
4. Clique em "New Project"

### **2. Configurar Projeto**

1. **Nome do Projeto**: `iago-portfolio-likes`
2. **Database Password**: Crie uma senha forte (guarde!)
3. **Region**: Escolha a mais próxima (São Paulo)
4. Clique em "Create new project"

### **3. Configurar Banco de Dados**

Após criar o projeto, vá em "SQL Editor" e execute:

```sql
-- Criar tabela de curtidas
CREATE TABLE portfolio_likes (
  id SERIAL PRIMARY KEY,
  user_id TEXT UNIQUE NOT NULL,
  is_liked BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar tabela de estatísticas
CREATE TABLE portfolio_stats (
  id SERIAL PRIMARY KEY,
  total_likes INTEGER DEFAULT 0,
  total_visitors INTEGER DEFAULT 0,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Inserir estatísticas iniciais
INSERT INTO portfolio_stats (total_likes, total_visitors) VALUES (0, 0);

-- Criar função para atualizar timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Criar trigger para atualizar timestamp automaticamente
CREATE TRIGGER update_portfolio_likes_updated_at
    BEFORE UPDATE ON portfolio_likes
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
```

### **4. Configurar Políticas de Segurança**

Vá em "Authentication" > "Policies" e adicione:

```sql
-- Permitir leitura pública das estatísticas
CREATE POLICY "Allow public read access to stats" ON portfolio_stats
FOR SELECT USING (true);

-- Permitir inserção/atualização de curtidas
CREATE POLICY "Allow public insert/update likes" ON portfolio_likes
FOR ALL USING (true);
```

### **5. Obter Credenciais**

1. Vá em "Settings" > "API"
2. Copie:
   - **Project URL**
   - **anon public key**

### **6. Configurar Variáveis de Ambiente**

Crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_SUPABASE_URL=sua_project_url_aqui
VITE_SUPABASE_ANON_KEY=sua_anon_key_aqui
```

## 🔧 Próximos Passos

Após seguir este guia, execute os comandos de instalação que vou te passar!
