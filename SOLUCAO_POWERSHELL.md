# 🔧 Solução para Erro do PowerShell

## ❌ **Problema Identificado:**
```
npm : O arquivo C:\Program Files\nodejs\npm.ps1 não pode ser carregado porque a execução de scripts foi desabilitada neste sistema.
```

## ✅ **Solução 1: Alterar Execution Policy (Recomendado)**

### Passo 1: Abrir PowerShell como Administrador
1. Pressione `Windows + X`
2. Selecione "Windows PowerShell (Admin)" ou "Terminal (Admin)"

### Passo 2: Executar Comando
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Passo 3: Confirmar
Quando perguntar, digite `S` e pressione Enter.

### Passo 4: Verificar
```powershell
Get-ExecutionPolicy -Scope CurrentUser
```
Deve retornar: `RemoteSigned`

## ✅ **Solução 2: Usar Command Prompt (Alternativa)**

Se preferir não alterar o PowerShell, use o Command Prompt:

1. Pressione `Windows + R`
2. Digite `cmd` e pressione Enter
3. Navegue até a pasta do projeto:
   ```cmd
   cd C:\Users\Iago\iago-portfolio
   ```
4. Execute os comandos npm:
   ```cmd
   npm install
   npm run dev
   ```

## ✅ **Solução 3: Usar Terminal do VSCode**

1. Abra o projeto no Visual Studio Code
2. Pressione `Ctrl + `` (backtick) para abrir o terminal
3. No terminal do VSCode, execute:
   ```bash
   npm install
   npm run dev
   ```

## 🚀 **Após Resolver o Problema:**

### 1. Instalar Dependências
```bash
cd C:\Users\Iago\iago-portfolio
npm install
```

### 2. Executar Projeto
```bash
npm run dev
```

### 3. Acessar no Navegador
Abra: `http://localhost:3000`

## 📋 **Comandos Úteis:**

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Deploy para GitHub Pages
npm run deploy
```

## 🔍 **Verificar se Funcionou:**

Após executar `npm install`, você deve ver:
- Pasta `node_modules` criada
- Arquivo `package-lock.json` criado
- Mensagem de sucesso no terminal

## ❓ **Se Ainda Tiver Problemas:**

1. **Verifique se o Node.js está instalado:**
   ```bash
   node --version
   npm --version
   ```

2. **Reinstale o Node.js:**
   - Baixe em: https://nodejs.org/
   - Escolha a versão LTS (recomendada)

3. **Limpe cache do npm:**
   ```bash
   npm cache clean --force
   ```

---

**💡 Dica:** A Solução 1 (alterar Execution Policy) é a mais recomendada pois resolve o problema permanentemente.


