# 🚀 Portfólio Iago Alves Medeiros

Um portfólio profissional e moderno desenvolvido com React, TypeScript e Framer Motion, incluindo um mini jogo interativo para entreter os visitantes.

## ✨ Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Utiliza Framer Motion para transições elegantes
- **Mini Jogo**: Jogo de memória interativo para engajar os visitantes
- **4 Seções Principais**: Início, Sobre, Projetos e Contato
- **Modo Escuro**: Suporte automático para preferências do sistema
- **SEO Otimizado**: Meta tags e estrutura semântica
- **Performance**: Lazy loading e otimizações de renderização

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 18, TypeScript, CSS3
- **Animações**: Framer Motion, AOS (Animate On Scroll)
- **Ícones**: React Icons
- **Build Tool**: Vite
- **Deploy**: GitHub Pages

## 📱 Seções do Portfólio

### 🏠 **Início**
- Hero section com apresentação pessoal
- Efeito de digitação animado
- Mini jogo interativo
- Preview das habilidades técnicas
- Links para redes sociais

### 👨‍💻 **Sobre**
- Informações pessoais e profissionais
- Formação acadêmica
- Habilidades técnicas organizadas por categoria
- Experiência profissional
- Objetivos e metas

### 🎯 **Projetos**
- Showcase de projetos com filtros
- Busca por tecnologia ou categoria
- Cards interativos com preview
- Links para GitHub e demonstrações
- Badges para projetos em destaque

### 📞 **Contato**
- Formulário de contato funcional
- Informações de contato
- Links para redes sociais
- Outras formas de colaboração

## 🎮 Mini Jogo

O portfólio inclui um jogo de memória interativo que:
- Testa a capacidade de concentração
- Mantém recordes de melhor pontuação
- É totalmente responsivo
- Adiciona um elemento divertido à experiência

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/iago-portfolio.git

# Entre na pasta
cd iago-portfolio

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

### Deploy no GitHub Pages
```bash
# Deploy automático
npm run deploy
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Navbar.tsx      # Navegação principal
│   ├── Footer.tsx      # Rodapé
│   └── MiniGame.tsx    # Jogo de memória
├── pages/              # Páginas principais
│   ├── Home.tsx        # Página inicial
│   ├── About.tsx       # Sobre mim
│   ├── Projects.tsx    # Projetos
│   └── Contact.tsx     # Contato
├── styles/             # Arquivos CSS
│   ├── index.css       # Estilos globais
│   └── App.css         # Estilos do App
└── assets/             # Recursos estáticos
```

## 🎨 Personalização

### Cores
As cores podem ser facilmente alteradas editando as variáveis CSS em `src/styles/index.css`:

```css
:root {
  --primary: #6366f1;
  --secondary: #10b981;
  --accent: #f59e0b;
  /* ... outras variáveis */
}
```

### Conteúdo
- **Informações pessoais**: Edite os componentes das páginas
- **Projetos**: Atualize o array de projetos em `Projects.tsx`
- **Redes sociais**: Modifique os links nos componentes
- **Imagens**: Substitua os placeholders por suas fotos

## 📱 Responsividade

O portfólio é totalmente responsivo com breakpoints:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Mobile Small**: < 480px

## 🌙 Modo Escuro

Suporte automático para modo escuro baseado nas preferências do sistema do usuário.

## 📊 Performance

- **Lazy Loading**: Componentes carregados sob demanda
- **Code Splitting**: Separação automática de código
- **Otimizações CSS**: Variáveis CSS e seletores eficientes
- **Bundle Size**: Build otimizado com Vite

## 🔧 Scripts Disponíveis

```json
{
  "dev": "vite",              // Desenvolvimento
  "build": "vite build",      // Build de produção
  "preview": "vite preview",  // Preview do build
  "deploy": "gh-pages -d dist" // Deploy no GitHub Pages
}
```

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Enviar pull requests
- Melhorar a documentação

## 📞 Contato

- **Nome**: Iago Alves Medeiros
- **Email**: iago.alves@email.com
- **LinkedIn**: [linkedin.com/in/seu-usuario](https://linkedin.com/in/seu-usuario)
- **GitHub**: [github.com/seu-usuario](https://github.com/seu-usuario)

## 🙏 Agradecimentos

- Comunidade React e TypeScript
- Framer Motion pela biblioteca de animações
- React Icons pelos ícones
- Vite pela ferramenta de build

---

**Desenvolvido com ❤️ por Iago Alves Medeiros**

*Formado em Análise e Desenvolvimento de Sistemas, cursando pós-graduação em Administração de Banco de Dados. Desenvolvedor apaixonado por criar soluções inovadoras e experiências digitais excepcionais.*
