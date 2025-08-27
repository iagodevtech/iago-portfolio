# Setup do Projeto Portfolio

## Pré-requisitos

- Node.js versão 16 ou superior
- npm ou yarn
- Git

## Instalação e Configuração

### 1. Clone ou configure o projeto

Se você baixou os arquivos, certifique-se de que está no diretório correto:

```bash
cd iago-portfolio
```

### 2. Instale as dependências

```bash
npm install
```

ou

```bash
yarn install
```

### 3. Execute o projeto em modo de desenvolvimento

```bash
npm run dev
```

ou

```bash
yarn dev
```

O projeto será executado em `http://localhost:3000`

### 4. Build para produção

```bash
npm run build
```

ou

```bash
yarn build
```

### 5. Preview da build de produção

```bash
npm run preview
```

ou

```bash
yarn preview
```

## Deploy no GitHub Pages

### 1. Configure o repositório no GitHub

1. Crie um repositório no GitHub com o nome `iago-portfolio`
2. Inicialize o git local:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/iago-portfolio.git
git push -u origin main
```

### 2. Configure o GitHub Pages

1. Vá nas configurações do repositório no GitHub
2. Na seção "Pages", configure:
   - Source: GitHub Actions

### 3. Deploy automático

O deploy é feito automaticamente via GitHub Actions sempre que você fizer push para a branch `main`.

Ou você pode fazer deploy manual:

```bash
npm run deploy
```

## Personalização

### Alterar informações pessoais

1. **src/data/**: Edite os arquivos de dados para suas informações
2. **config.ts**: Atualize as configurações gerais
3. **public/**: Substitua as imagens pelos seus arquivos

### Adicionar projetos

Edite o arquivo `src/data/projects.ts` e adicione suas imagens em `public/projects/`

### Modificar cores e estilos

Edite as variáveis CSS em `src/styles/index.css`

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Faz o build para produção
- `npm run preview` - Preview da build de produção
- `npm run lint` - Executa o linter
- `npm run deploy` - Deploy para GitHub Pages

## Estrutura de Pastas

```
iago-portfolio/
├── public/
│   ├── assets/          # Imagens gerais
│   ├── projects/        # Imagens dos projetos
│   ├── icons/           # Ícones
│   ├── manifest.json    # PWA manifest
│   └── sw.js           # Service Worker
├── src/
│   ├── components/      # Componentes React
│   ├── pages/          # Páginas principais
│   ├── styles/         # Arquivos CSS
│   ├── data/           # Dados mock
│   ├── types/          # Tipos TypeScript
│   └── utils/          # Funções utilitárias
├── .github/
│   └── workflows/      # GitHub Actions
└── ...arquivos de configuração
```

## Troubleshooting

### Erro de permissão no Windows

Se encontrar erros de permissão, execute o terminal como administrador.

### Erro de dependências

```bash
rm -rf node_modules package-lock.json
npm install
```

### Problemas com o deploy

Verifique se:
1. O repositório está público ou tem GitHub Pages habilitado
2. A branch `main` está configurada corretamente
3. As configurações do GitHub Actions estão corretas

## Suporte

Para dúvidas ou problemas, consulte a documentação dos frameworks utilizados:

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/)
