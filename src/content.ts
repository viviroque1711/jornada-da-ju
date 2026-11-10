/**
 * Texto editorial em primeira pessoa baseado nos relatos enviados por Juliana.
 * A versão deve ser lida e aprovada por Juliana antes da divulgação pública.
 * Os relatos médicos permanecem descritos como experiências contadas por ela.
 */
export const campaign = {
  title: "Viva a Vida, Juliana!",
  eyebrow: "UMA HISTÓRIA DE FÉ, CORAGEM E VIDA",
  heroHeadline: "Nunca foi sobre um diagnóstico.",
  heroDescription:
    "Eu tinha uma vida cheia de planos, projetos e sonhos. Então, um diagnóstico chegou e mudou tudo. Esta é a história de como decidi continuar — e de por que hoje peço que você caminhe comigo.",
  heroImage: "/jornada-da-ju/images/juliana-hero.webp",
  video: {
    src: "/jornada-da-ju/video/juliana-background.mp4",
    poster: "/jornada-da-ju/images/juliana-hero.webp",
    eyebrow: "UM RESPIRO NO MEIO DA JORNADA",
    headline: "Há vida em cada momento que ainda quero viver.",
    caption: "Um pedacinho de mim, das coisas que amo e dos motivos que me fazem continuar."
  },
  pix: {
    copyPasteCode: "00020126900014br.gov.bcb.pix01364f588e81-0d7a-4b49-bafc-9181487c35610228CAMPANHA VIVA A VIDA JULIANA5204000053039865802BR5925LOURDES APARECIDA BATISTA6009Sao Paulo62290525REC6AF260B4BCF5F26570552663042B70",
    qrImage: "data:image/png;base64,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",
    beneficiaryDisplayName: "Lourdes Aparecida Batista",
    enabled: true,
  },
};

export const storySections = [
  {
    id: "quem-sou",
    number: "01",
    kicker: "ANTES DE TUDO MUDAR",
    title: "Eu tinha planos. Tinha projetos. Tinha uma vida acontecendo.",
    paragraphs: [
      "Como tantas pessoas, eu seguia fazendo planos, sonhando com novos projetos, cuidando das minhas coisas e imaginando o que ainda viveria. Até que um diagnóstico de câncer de mama chegou. Foi um baque. Uma notícia que parece parar o mundo por alguns instantes e faz a gente olhar para a própria vida de um jeito completamente diferente.",
      "Eu precisei de um tempo para organizar tudo dentro de mim. Vieram o medo, as perguntas e a consciência de que começaria uma caminhada que eu não havia escolhido. Aceitar que aquilo estava acontecendo não significava me entregar à doença: significava reconhecer a realidade e encontrar forças para começar o tratamento. Depois de respirar e olhar para aquela realidade, entendi que precisava tomar uma decisão sobre como atravessaria aquele caminho.",
      "Eu não podia escolher o que estava acontecendo com meu corpo. Mas podia colocar minha vida nas mãos de Deus e pedir que Ele me conduzisse. Decidi me colocar à disposição da vontade Dele e ser instrumento em Suas mãos. Pedi que, se minha caminhada pudesse servir de inspiração para alguém, minha história também se transformasse em esperança para outras vidas."
    ],
    image: "/jornada-da-ju/images/juliana-portrait.webp",
    imageAlt: "Retrato pessoal de Juliana.",
    imageCaption: "Antes de qualquer diagnóstico, existe uma vida inteira."
  },
  {
    id: "primeira-batalha",
    number: "02",
    kicker: "O PRIMEIRO RECOMEÇO",
    title: "Minha primeira batalha foi contra o câncer de mama.",
    paragraphs: [
      "Para tratar o câncer de mama, passei por uma cirurgia e precisei retirar parte da mama. Foi um momento muito difícil, física e emocionalmente. Eu precisei reunir forças, atravessar o tratamento e aprender a conviver com tantas mudanças.",
      "Naquele começo, eu esperava que fosse uma única batalha. Queria tratar, me recuperar e voltar aos meus planos. E, quando consegui vencer aquele primeiro câncer, segui vivendo, acreditando que aquele capítulo tinha ficado para trás."
    ],
    image: "/jornada-da-ju/images/juliana-primeiro-cancer-final.webp?v=20261109-1",
    imageAlt: "Juliana em um leito hospitalar, fazendo sinal de vitória com a mão.",
    imageCaption: "Um registro da minha primeira batalha — e da força que encontrei para seguir."
  },
  {
    id: "dez-anos-depois",
    number: "03",
    kicker: "QUANDO OS DESAFIOS VOLTARAM",
    title: "Cerca de dez anos depois, os diagnósticos continuaram aparecendo.",
    paragraphs: [
      "Eu imaginava que o câncer tinha ficado no passado. Mas, cerca de dez anos depois, novas notícias começaram a chegar. Em meus relatos, contei que enfrentei câncer de intestino e câncer de vesícula, que identifiquei como colangiocarcinoma. Também compartilhei sobre tumores no pulmão e alterações no fígado.",
      "Eu esperava que fosse um diagnóstico, uma etapa, um tratamento. Mas não foi assim. Os desafios foram surgindo novamente, um depois do outro. Cada notícia trazia um novo impacto, novas conversas, novos cuidados e mais uma etapa para atravessar.",
      "Mesmo quando eu não tinha todas as respostas, eu escolhia seguir. Em uma das minhas publicações, escrevi: “VENCI TODOS ELES”. Era a forma como eu registrava as batalhas que já tinha atravessado — e a força que buscava para continuar."
    ],
    image: "/jornada-da-ju/images/juliana-hospital-heart.webp",
    imageAlt: "Juliana sorrindo e fazendo um coração com a mão durante uma internação.",
    imageCaption: "Eu continuei encontrando motivos para sorrir."
  },
  {
    id: "remissao",
    number: "04",
    kicker: "QUANDO EU ESPERAVA RESPIRAR",
    title: "Quando achei que a remissão estava perto, veio outra notícia.",
    paragraphs: [
      "Depois de quatro anos de luta, eu acreditava que estava perto de entrar em remissão. Eu já imaginava a possibilidade de viver uma fase com mais tranquilidade. Depois de tudo o que havia enfrentado, aquela esperança significava muito para mim.",
      "Mas, justamente quando eu pensava que poderia respirar um pouco mais aliviada, recebi a notícia de que haviam sido encontrados quatro tumores no fígado. Foi outro baque. Mais uma vez, precisei reorganizar minhas emoções e encontrar forças para continuar.",
      "Em um dos meus relatos, deixei registrada uma frase que traduzia a decisão que eu tentava renovar a cada dia: “Desistir não me representa. Avante!”"
    ],
    image: "/jornada-da-ju/images/juliana-sorrindo-oculos.webp?v=20261109-1",
    imageAlt: "Juliana sorrindo, usando óculos escuros, em um registro pessoal.",
    imageCaption: "A alegria também faz parte da minha história."
  },
  {
    id: "continuar",
    number: "05",
    kicker: "A JORNADA CONTINUA",
    title: "Ainda surgiram outras notícias. E eu continuei escolhendo viver.",
    paragraphs: [
      "Em um relato mais recente, contei que estava fazendo quimioterapia havia cerca de um ano e que tinham sido identificadas novas alterações no pâncreas e nas vias biliares, além de uma neoplasia no pulmão.",
      "Durante uma biópsia pulmonar, passei por uma complicação muito séria. Relatei uma hemorragia pulmonar, uma fístula de ar e a formação de um coágulo no pulmão. Depois disso, enfrentei outras complicações que descrevi como pneumonia e embolias, além de episódios de sangramento pela boca.",
      "Foi um período assustador. Mas, depois de tudo isso, compartilhei que estava continuando a quimioterapia. A minha fé continua fazendo parte da forma como atravesso cada etapa. Como escrevi naquele momento: “VENCEMOS EM NOME DE JESUS!”"
    ],
    image: "/jornada-da-ju/images/juliana-recuperacao-hospital.webp?v=20261109-1",
    imageAlt: "Juliana em um registro pessoal no ambiente hospitalar, durante sua caminhada.",
    imageCaption: "Mesmo nos dias delicados, sigo encontrando forças para continuar."
  }
];

export const voiceQuotes = [
  {
    phrase: "Desistir não me representa. Avante!",
    detail: "Em um registro de agosto de 2022, compartilhei essa frase enquanto a luta contra o câncer continuava. Eu não estava dizendo que era fácil. Estava registrando a decisão de seguir, um passo de cada vez, com fé e coragem para enfrentar o que viesse."
  },
  {
    phrase: "Se eu consigo, você também consegue.",
    detail: "Essa é uma mensagem que quero deixar a quem também enfrenta dias difíceis. Cada história é única e cada pessoa tem seu próprio tempo. Mas eu gostaria que minhas palavras lembrassem alguém de que não precisa atravessar tudo sozinho e de que vale a pena procurar apoio, cuidado e esperança."
  },
  {
    phrase: "Mais um dia vencido.",
    detail: "Em fevereiro de 2023, compartilhei um registro de um dia no hospital com essa frase. Para mim, cada dia atravessado tinha valor. Às vezes, a conquista não é dar um passo enorme: é conseguir viver mais um dia e reconhecer a força que isso exige."
  },
  {
    phrase: "Venci todos eles.",
    detail: "Em novembro de 2022, registrei etapas de tratamentos e diagnósticos que havia enfrentado. Escrevi “Venci todos eles” como expressão da minha fé e da forma como enxergava aquelas batalhas. Essa frase não apaga a dificuldade; ela guarda a força que encontrei para atravessar cada etapa."
  }
];

export const faithDecision = {
  title: "A decisão que tomei diante de Deus.",
  paragraphs: [
    "Depois do impacto do primeiro diagnóstico, precisei de um tempo para organizar tudo dentro de mim. Eu não tinha escolhido aquela doença, mas podia decidir como colocaria meu coração diante daquela caminhada.",
    "Decidi entregar minha vida a Deus, me colocar à disposição da vontade Dele e pedir que Ele me conduzisse. Queria ser instrumento em Suas mãos — e, se minha história pudesse inspirar, acolher ou encorajar alguém, que ela também servisse a esse propósito.",
    "Naquele começo, eu imaginava que seria uma única batalha. Esperava tratar, me recuperar e voltar aos meus planos. Não sabia que novos diagnósticos continuariam aparecendo. Mas, a cada notícia, precisei reorganizar minhas forças e renovar minha escolha de continuar vivendo."
  ]
};

export const campaignNeeds = {
  goal: null as number | null,
  purpose:
    "Eu e minha família estamos fazendo o melhor que podemos para seguir com o tratamento e cuidar de cada etapa. Ainda assim, o desafio financeiro existe: as despesas dessa caminhada pesam e se somam. Depois de pensar muito, decidi pedir ajuda. Não é um pedido fácil, mas entendi que também preciso permitir que outras pessoas caminhem comigo.",
  inspiration:
    "Eu não quero que minha história seja lembrada apenas pelos diagnósticos. Quero que ela alcance outras pessoas, incentive alguém a não perder a esperança, a procurar ajuda e a valorizar a vida. Meu desejo é que minha caminhada encoraje alguém a buscar cuidado e, quem sabe, ajude a salvar uma vida. Quero continuar vivendo e, enquanto eu viver, ser instrumento nas mãos de Deus para tocar outras vidas.",
  request:
    "Se minha história tocar você e estiver ao seu alcance, sua ajuda será muito importante. Se puder contribuir, ficarei muito grata. Qualquer valor, dentro das suas possibilidades, fará diferença. E, se não puder ajudar financeiramente, compartilhar esta página também é uma forma de apoio."
};
