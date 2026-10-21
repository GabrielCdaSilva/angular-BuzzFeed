export interface Option {
  id: number;
  name: string;
  alias: 'A' | 'B';
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
}

export interface QuizResult {
  title: string;
  badge: string;
  archetype: string;
  statLabel: string;
  description: string;
  image: string;
  themeColor: string;
}

export interface QuizData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  questions: Question[];
  results: {
    A: QuizResult;
    B: QuizResult;
    tie?: QuizResult;
  };
}

export const HERO_VILLAIN_QUIZ: QuizData = {
  id: 'heroi-ou-vilao',
  title: 'Você seria um heroi ou vilão ?',
  subtitle: 'Descubra qual lado da força cósmica se alinha com a sua verdadeira personalidade!',
  category: 'CULTURA POP & QUADRINHOS',
  readTime: '2 min de teste',
  questions: [
    {
      id: 1,
      question: 'Qual super poder você escolheria ?',
      options: [
        { id: 1, name: 'Raios-Lasers', alias: 'A' },
        { id: 2, name: 'Voar', alias: 'B' },
        { id: 3, name: 'Explodir coisas', alias: 'A' },
        { id: 4, name: 'Curar feridas', alias: 'B' },
        { id: 5, name: 'Soltar fogo pelas mãos', alias: 'A' }
      ]
    },
    {
      id: 2,
      question: 'Quem você salvaria primeiro em um desastre ?',
      options: [
        { id: 1, name: 'Crianças, idosos e todos em perigo imediato', alias: 'B' },
        { id: 2, name: 'Apenas quem puder me pagar uma fortuna pelo resgate', alias: 'A' },
        { id: 3, name: 'Ninguém, os fortes sobrevivem sozinhos!', alias: 'A' },
        { id: 4, name: 'Meus amigos leais e familiares próximos', alias: 'B' }
      ]
    },
    {
      id: 3,
      question: 'Qual seria a sua maior motivação de vida ?',
      options: [
        { id: 1, name: 'Proteger os inocentes e trazer justiça ao mundo', alias: 'B' },
        { id: 2, name: 'Poder supremo e controle total sobre a cidade', alias: 'A' },
        { id: 3, name: 'Vingança impiedosa contra quem me humilhou no passado', alias: 'A' },
        { id: 4, name: 'Inspirar esperança e unir as pessoas', alias: 'B' }
      ]
    },
    {
      id: 4,
      question: 'Onde você construiria a sua base de operações ?',
      options: [
        { id: 1, name: 'Uma torre futurista brilhante no centro da metrópole', alias: 'B' },
        { id: 2, name: 'Um covil secreto subterrâneo sob um vulcão ativo', alias: 'A' },
        { id: 3, name: 'Uma estação orbital secreta no espaço sideral', alias: 'B' },
        { id: 4, name: 'Uma fortaleza sombria no cume de montanhas congeladas', alias: 'A' }
      ]
    },
    {
      id: 5,
      question: 'O que você faria ao derrotar seu maior arqui-inimigo ?',
      options: [
        { id: 1, name: 'Entregá-lo às autoridades para um julgamento justo', alias: 'B' },
        { id: 2, name: 'Destruí-lo sem hesitar para impor medo a todos', alias: 'A' },
        { id: 3, name: 'Fazer um discurso dramático e baní-lo para outra dimensão', alias: 'A' },
        { id: 4, name: 'Oferecer uma chance de redenção e recuperação', alias: 'B' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Você muito provavelmente seria um Super Vilão!',
      badge: 'SUPER VILÃO',
      archetype: 'O Tirano das Sombras',
      statLabel: 'Ameaça Nível Ômega',
      description: 'Você não tem paciência para regras antiquadas ou falsa moralidade. Para você, os fins justificam os meios e o poder pertence a quem tem a audácia de tomá-lo. Prepare seu covil, o mundo conhecerá a sua força!',
      image: 'assets/images/villain.jpg',
      themeColor: '#a855f7'
    },
    B: {
      title: 'Você muito provavelmente seria um Super Herói!',
      badge: 'SUPER HERÓI',
      archetype: 'O Guardião da Esperança',
      statLabel: 'Protetor da Humanidade',
      description: 'Seu coração transborda coragem e altruísmo. Você coloca o bem-estar coletivo acima de qualquer benefício pessoal, pronto para se sacrificar pelos inocentes e iluminar as noites mais escuras!',
      image: 'assets/images/hero.jpg',
      themeColor: '#38bdf8'
    },
    tie: {
      title: 'Você muito provavelmente seria um Anti-Herói!',
      badge: 'ANTI-HERÓI',
      archetype: 'O Vigilante Noturno',
      statLabel: 'Fator Caos Imprevisível',
      description: 'Nem capa reluzente, nem vilania gratuita. Você age na linha tênue entre a luz e as trevas, fazendo o trabalho sujo que os heróis tradicionais têm medo de fazer. Ninguém quer estar na sua mira!',
      image: 'assets/images/antihero.jpg',
      themeColor: '#f59e0b'
    }
  }
};

export const DEV_QUIZ: QuizData = {
  id: 'frontend-ou-backend',
  title: 'Você seria Frontend ou Backend ?',
  subtitle: 'Descubra para qual lado do código o seu cérebro de desenvolvedor foi forjado!',
  category: 'TECNOLOGIA & CÓDIGO',
  readTime: '2 min de teste',
  questions: [
    {
      id: 1,
      question: 'Qual parte de um aplicativo chama mais a sua atenção ?',
      options: [
        { id: 1, name: 'Cores, animações suaves e layouts modernos', alias: 'A' },
        { id: 2, name: 'Velocidade de resposta, APIs e segurança', alias: 'B' },
        { id: 3, name: 'Experiência do usuário e responsividade', alias: 'A' },
        { id: 4, name: 'Modelagem do banco de dados e arquitetura de microsserviços', alias: 'B' }
      ]
    },
    {
      id: 2,
      question: 'O que te dá mais dor de cabeça ao programar ?',
      options: [
        { id: 1, name: 'Centralizar uma div no CSS e bugs em navegadores diferentes', alias: 'A' },
        { id: 2, name: 'Queries lentas, deadlocks no banco e erros 500 no servidor', alias: 'B' },
        { id: 3, name: 'Ajustar fontes e espaçamentos no mobile', alias: 'A' },
        { id: 4, name: 'Configurar autenticação JWT e regras de CORS', alias: 'B' }
      ]
    },
    {
      id: 3,
      question: 'Qual ferramenta ou conceito você prefere dominar ?',
      options: [
        { id: 1, name: 'Angular, React, CSS moderno e Figma', alias: 'A' },
        { id: 2, name: 'Node.js, Java Spring, Docker e PostgreSQL', alias: 'B' },
        { id: 3, name: 'State Management, Microfrontends e Transições', alias: 'A' },
        { id: 4, name: 'Filas RabbitMQ/Kafka, Cache Redis e Infraestrutura Cloud', alias: 'B' }
      ]
    },
    {
      id: 4,
      question: 'Como você descreve seu dia ideal no trabalho ?',
      options: [
        { id: 1, name: 'Ver uma tela linda ganhando vida exatamente como desenhada', alias: 'A' },
        { id: 2, name: 'Processar 100.000 requisições/segundo com 0% de erro', alias: 'B' },
        { id: 3, name: 'Criar componentes interativos que os usuários amam usar', alias: 'A' },
        { id: 4, name: 'Refatorar um serviço complexo e reduzir a latência pela metade', alias: 'B' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Você é 100% Frontend Developer!',
      badge: 'FRONTEND MASTER',
      archetype: 'Arquiteto de Interfaces',
      statLabel: 'Pixel Perfect',
      description: 'Seus olhos enxergam 1px de diferença a quilômetros de distância! Você ama transformar ideias em interfaces dinâmicas, fluidas e acessíveis que encantam o usuário.',
      image: 'assets/images/hero.jpg',
      themeColor: '#ec4899'
    },
    B: {
      title: 'Você é 100% Backend Developer!',
      badge: 'BACKEND ARCHITECT',
      archetype: 'Engenheiro das Sombras',
      statLabel: 'Mestre da Lógica',
      description: 'O motor por trás da máquina é com você! Você respira APIs velozes, consultas otimizadas, segurança robusta e dados consistentes. Se o sistema funciona sem falhar, o mérito é seu.',
      image: 'assets/images/villain.jpg',
      themeColor: '#10b981'
    },
    tie: {
      title: 'Você é um Fullstack Developer Nato!',
      badge: 'FULLSTACK NINJA',
      archetype: 'Canivete Suíço da Programação',
      statLabel: 'Ponta a Ponta',
      description: 'Você domina as duas metades da moeda! Cria desde o layout refinado até a infraestrutura do servidor sem pestanejar.',
      image: 'assets/images/antihero.jpg',
      themeColor: '#f59e0b'
    }
  }
};

export const ALL_QUIZZES: QuizData[] = [HERO_VILLAIN_QUIZ, DEV_QUIZ];
