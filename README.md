# 🎯 BuzzFeed Quiz Clone com Angular

Clone moderno e interativo do famoso quiz do **BuzzFeed**, desenvolvido em **Angular** como parte do projeto prático do bootcamp da **Digital Innovation One (DIO)**.

---

## ⚡ Tema do Quiz

> **"Você seria um herói ou vilão?"**  
> Descubra qual lado da força cósmica se alinha com a sua verdadeira personalidade respondendo a perguntas sobre superpoderes, motivações, bases secretas e decisões cruciais!

O projeto também conta com um quiz bônus alternável:  
> **"Dev Frontend vs Backend"** — Descubra para qual lado do código o seu cérebro de programador foi forjado!

---

## 🚀 Funcionalidades

- **Design Fiel à Referência**:
  - Logo estilizado do BuzzFeed com badge "QUIZ".
  - Fundo escuro com paleta violeta/índigo profunda.
  - Card central de perguntas com cantos arredondados e cores vibrantes.
  - Botões de opções com contorno em **verde neon** e efeitos dinâmicos de hover/clique.
  - Setas de navegação estilo carrossel (`<` e `>`) para voltar e revisar respostas.
- **Interatividade & Áudio**:
  - Efeitos sonoros sutis sintetizados via **Web Audio API** (sem dependência de arquivos externos).
  - Botão de controle de som (Mudo / Ativado).
  - Indicador de progresso com barra e marcadores de questões.
- **Tela de Resultados Completa**:
  - Cálculo dinâmico do arquétipo (Super Vilão, Super Herói ou Anti-Herói).
  - Ilustrações personalizadas de alta qualidade para cada arquétipo.
  - Barra percentual com a distribuição das respostas.
  - Botão para **Refazer o Teste**.
  - Botão para **Compartilhar Resultado** (com cópia automática para a área de transferência e toast notification).
- **Troca de Quizzes**:
  - Abas para alternar facilmente entre o quiz de Super-Heróis e o quiz de Desenvolvedores.

---

## 🛠️ Tecnologias Utilizadas

- **Angular** (Standalone Components, Signals & Modern Control Flow `@if` / `@for`)
- **TypeScript**
- **HTML5 & CSS3** (Vanilla CSS avançado com variáveis CSS, sombras e animações personalizadas)
- **Web Audio API** para efeitos sonoros em tempo real
- **Google Fonts** (Outfit & Plus Jakarta Sans)

---

## 📁 Estrutura do Projeto

```text
src/
├── app/
│   ├── components/
│   │   └── quizz/
│   │       ├── quizz.component.ts      # Lógica reativa com Signals do Angular
│   │       ├── quizz.component.html    # Template com acessibilidade e navegação
│   │       └── quizz.component.css     # Estilos modernos e responsivos
│   ├── data/
│   │   └── quizz_questions.ts          # Definição e dados tipados dos quizzes
│   ├── services/
│   │   └── sound.service.ts            # Gerador de áudio via Web Audio API
│   ├── app.ts                          # Componente raiz standalone
│   ├── app.html                        # Container do app
│   └── app.css
├── assets/
│   └── data/
│       └── quizz_questions.json        # Arquivo JSON com o quiz clássico da DIO
public/
└── assets/
    ├── images/                         # Artes dos resultados (hero, villain, antihero)
    └── data/
        └── quizz_questions.json
```

---

## 💻 Como Executar Localmente

### Pré-requisitos
- **Node.js** (v18 ou superior)
- **npm** (v9 ou superior)

### Passo a passo

1. **Clone o repositório** (ou acesse a pasta do projeto):
   ```bash
   cd "Projeto angular BuzzFeed"
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm start
   ```

4. **Acesse no navegador**:
   Abra [http://localhost:4200/](http://localhost:4200/) para jogar o quiz!

---

## 📜 Licença

Projeto desenvolvido para fins educacionais e estudo prático de Angular.
