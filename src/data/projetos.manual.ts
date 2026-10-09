import type { Projeto } from '@/types/Projeto';

/** Estudos de caso editados manualmente sempre têm prioridade sobre os dados do GitHub. */
export const projetosManuais: Projeto[] = [
  {
    id: 'vaultpos',
    titulo: 'VaultPOS',
    resumo: 'SaaS mobile de ponto de venda para bares, restaurantes e pequenos negócios.',
    contexto:
      'pequenos estabelecimentos costumam depender de comanda de papel ou de sistemas caros e pesados. O VaultPOS nasce para ser um PDV leve, feito para o celular, que o dono consegue usar no balcão ou na mesa.',
    solucao:
      'aplicativo mobile em Ionic Vue 3 e TypeScript, com estado gerenciado por Pinia e backend em Supabase. Defini o esquema completo do banco, as migrações, os tipos TypeScript e a base do design system no Figma antes de construir as telas. O desenvolvimento segue tela por tela, do protótipo ao código.',
    desafios: [
      'modelar o banco para vendas, produtos e mesas de forma que escale como SaaS',
      'decidir entre manter o Supabase ou usar SQLite local, pensando no uso offline do estabelecimento',
      'trabalhar em equipe com designer (André), apoio de backend (Rafael) e documentação (Vinícius)',
    ],
    aprendizados:
      'planejar dados e tipos antes das telas, organizar um design system e coordenar um fluxo design → código.',
    stack: ['Ionic Vue 3', 'TypeScript', 'Pinia', 'Supabase', 'Figma'],
    papel: 'desenvolvimento frontend e mobile; arquitetura de dados.',
    periodo: 'Projeto atual',
    status: 'Em desenvolvimento',
    prints: [],
    repositorio: '',
    demo: '',
    video: '',
    destaque: true,
    ordem: 1,
  },
  {
    id: 'burro-bluetooth',
    titulo: 'Burro Bluetooth',
    resumo: 'jogo de cartas "Burro" para celulares Android, jogado por Bluetooth, sem precisar de internet.',
    contexto:
      'trabalho em equipe de 3 pessoas que une a lógica de um jogo multiplayer à comunicação direta entre aparelhos.',
    solucao:
      'aplicativo em Vue 3, Ionic e Capacitor com TypeScript. Um jogador cria a sala como anfitrião, os outros procuram e pedem para entrar, e o anfitrião valida cada jogada. A lógica do jogo fica separada da interface, as mensagens trocadas têm formato definido e são validadas, e o histórico de partidas é salvo em SQLite no próprio celular.',
    desafios: [
      'descoberta de salas por Bluetooth (o plugin de referência só atua como central, então foi preciso investigar como o anfitrião anuncia a partida)',
      'manter as jogadas sincronizadas e bloquear jogadas fora do turno',
      'tratar desconexão, permissões e Bluetooth desligado',
    ],
    aprendizados:
      'integrar recursos nativos com Capacitor, projetar um protocolo de mensagens, validar entradas e testar a lógica do jogo isoladamente.',
    stack: ['Vue 3', 'Ionic', 'Capacitor', 'TypeScript', 'SQLite', 'Bluetooth LE'],
    papel: 'Desenvolvimento em equipe de 3 pessoas, colaborando por Pull Requests.',
    periodo: 'Projeto acadêmico',
    status: 'Concluído',
    prints: [],
    repositorio: 'https://github.com/Juliodbc/Bluetooth',
    demo: '',
    video: '',
    destaque: true,
    ordem: 2,
  },
  {
    id: 'smartevent',
    titulo: 'smartEvent',
    resumo: 'Aplicativo multiplataforma para eventos, desenvolvido com Vue, Ionic e Capacitor.',
    contexto: 'Projeto de aplicação para eventos criado para praticar o desenvolvimento de interfaces multiplataforma e a organização de fluxos com Vue e Ionic.',
    solucao:
      'Aplicativo em Vue com Ionic e Capacitor, escrito em TypeScript, com testes automatizados em Cypress e organizado com ESLint.',
    desafios: ['Organizar telas e navegação para uso em dispositivos móveis.', 'Manter componentes e estilos consistentes ao longo da aplicação.', 'Validar os principais fluxos com testes automatizados em Cypress.'],
    aprendizados: 'Prática com Vue, Ionic e Capacitor, organização de código com TypeScript e automação de verificações com Cypress.',
    stack: ['Vue', 'Ionic', 'Capacitor', 'TypeScript', 'Cypress'],
    papel: 'Desenvolvimento da interface e organização da base de testes.',
    periodo: 'Projeto acadêmico',
    status: 'Concluído',
    prints: [],
    repositorio: 'https://github.com/Juliodbc/smartEvent',
    demo: '',
    video: '',
    destaque: true,
    ordem: 3,
  },
  {
    id: 'galeria-de-fotos',
    titulo: 'Galeria de fotos',
    resumo:
      'app de galeria de fotos que usa a câmera e o armazenamento do celular, com login e tema escuro.',
    contexto:
      'projeto de curso para praticar recursos nativos do dispositivo: câmera, galeria, compartilhamento, localização e permissões.',
    solucao:
      'app em Ionic Vue e TypeScript com cadastro e login, e tela inicial acessível só depois de entrar. Um botão flutuante abre a câmera ou a galeria, as fotos aparecem em grade e cada uma pode ser removida ou compartilhada (WhatsApp, Telegram etc.). A tela "Sobre" mostra versão, termos de uso e privacidade, localização do usuário (latitude, longitude e altitude), alternância de tema escuro salva em Preferences e aviso quando o app está offline.',
    desafios: [
      'pedir e tratar permissões de câmera, galeria e localização',
      'gerenciar a lista de fotos em memória',
      'salvar a preferência de tema e detectar o estado de conexão',
    ],
    aprendizados:
      'usar plugins do Capacitor (câmera, geolocalização, compartilhamento, preferências), proteger rotas e organizar um projeto Ionic Vue.',
    stack: ['Ionic Vue', 'TypeScript', 'Capacitor'],
    papel: 'Desenvolvimento completo do aplicativo como projeto de curso.',
    periodo: 'Projeto de curso',
    status: 'Concluído',
    prints: [],
    repositorio: 'https://github.com/Juliodbc/galeria-fotos',
    demo: '',
    video: '',
    destaque: true,
    ordem: 4,
  },
];
