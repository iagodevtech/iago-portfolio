# 🚀 Iago Portfolio

[![GitHub stars](https://img.shields.io/github/stars/iagodevtech/iago-portfolio?style=social)](https://github.com/iagodevtech/iago-portfolio/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/iagodevtech/iago-portfolio?style=social)](https://github.com/iagodevtech/iago-portfolio/network)
[![GitHub last commit](https://img.shields.io/github/last-commit/iagodevtech/iago-portfolio?style=flat)](https://github.com/iagodevtech/iago-portfolio/commits)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visitar-brightgreen?style=flat)](https://iago-alves-medeiros.github.io/iago-portfolio/)

Portfolio pessoal desenvolvido com React, TypeScript e Supabase, incluindo sistema de curtidas em tempo real.

## ✨ Características

- **Design Moderno**: Interface responsiva e animada com Framer Motion
- **Sistema de Curtidas**: Engajamento em tempo real com Supabase
- **Tema Escuro/Claro**: Alternância automática baseada na preferência do sistema
- **Meta Tags Otimizadas**: Compartilhamento otimizado em redes sociais
- **PWA Ready**: Progressive Web App com cache inteligente
- **Performance**: Otimizado com Vite e lazy loading
- **Animações**: AOS (Animate On Scroll) para transições suaves

## 🛠️ Stack Tecnológica

### Frontend
- **React 18** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **React Router DOM** - Roteamento SPA
- **Framer Motion** - Animações avançadas
- **AOS** - Animações on scroll
- **React Icons** - Ícones consistentes

### Backend & Database
- **Supabase** - Backend-as-a-Service
- **PostgreSQL** - Banco de dados
- **Real-time** - Sincronização em tempo real

### Deploy & CI/CD
- **GitHub Pages** - Hospedagem estática
- **GitHub Actions** - Deploy automático

## 🚀 Quickstart

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Conta no Supabase

### 1. Clone o repositório
```bash
git clone https://github.com/iagodevtech/iago-portfolio.git
cd iago-portfolio
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente
```bash
# Crie um arquivo .env na raiz do projeto
cp .env.example .env
```

Configure as variáveis no arquivo `.env`:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Execute o projeto
```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

### 5. Acesse
- **Desenvolvimento**: http://localhost:5173
- **Produção**: https://iago-alves-medeiros.github.io/iago-portfolio/

## 📊 Sistema de Curtidas

O portfolio inclui um sistema de curtidas irreversível que:
- ✅ Salva curtidas permanentemente no Supabase
- ✅ Sincroniza em tempo real
- ✅ Mostra estatísticas de visitantes
- ✅ Calcula taxa de aprovação

## 🌐 Deploy

O projeto está configurado para deploy automático via GitHub Actions.

## 📱 Responsivo

Totalmente responsivo para:
- 📱 Mobile
- 💻 Desktop
- 📺 Tablet

## 🎨 Temas

- 🌞 Modo Claro
- 🌙 Modo Escuro
- 🔄 Alternância automática

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
├── pages/              # Páginas da aplicação
├── hooks/              # Custom hooks
├── lib/                # Configurações e utilitários
├── styles/             # Estilos globais
└── types/              # Definições TypeScript
```

## 📞 Contato

- **LinkedIn**: [Iago Alves](https://www.linkedin.com/in/iago-alves-b502a518b/)
- **GitHub**: [@iagodevtech](https://github.com/iagodevtech)
- **Email**: iagodevtech@gmail.com

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com ❤️ por [Iago Alves](https://github.com/iagodevtech)
