/**
 * Narrativa em primeira pessoa elaborada a partir dos relatos compartilhados por Juliana.
 * Deve ser revisada e aprovada por ela antes de publicação definitiva.
 * Não interpretar nem acrescentar diagnósticos; preservar os termos que ela relatou.
 */
export const campaign = {
  title: "Viva a Vida, Juliana!",
  eyebrow: "UMA CORRENTE DE SOLIDARIEDADE",
  heroHeadline: "Eu já enfrentei muitas batalhas. E continuo escolhendo a vida.",
  heroDescription:
    "Esta é a minha história — feita de recomeços, fé, coragem e pessoas que podem caminhar comigo.",
  heroImage: "/images/juliana-hero.webp",
  pix: {
    copyPasteCode: "00020126580014br.gov.bcb.pix013697556e8f-e359-48a9-a415-b680ea4c4e685204000053039865802BR5925LOURDES APARECIDA BATISTA6009Sao Paulo62290525REC6AECEAB9E23E3430529478630477E6",
    qrImage: "/images/pix-juliana.png",
    beneficiaryDisplayName: "Lourdes Aparecida Batista",
    enabled: true,
  },
};

export const storySections = [
  {
    id: "quem-sou",
    number: "01",
    kicker: "ANTES DOS DIAGNÓSTICOS",
    title: "Eu sou a Juliana. E minha história é muito maior que a doença.",
    paragraphs: [
      "Quero que você me conheça para além dos hospitais, dos exames e dos tratamentos. Sou uma mulher com meus gostos, meus afetos, minha fé, meus momentos de alegria e uma vida inteira de lembranças.",
      "Gosto de sorrir, de estar perto de quem amo e de guardar os momentos que fazem a vida valer a pena. Por isso, quando conto minha história, não quero falar apenas sobre o que enfrentei. Quero falar também sobre quem sou e sobre tudo o que ainda desejo viver."
    ],
    image: "/images/juliana-portrait.webp",
    imageAlt: "Retrato de Juliana em um momento pessoal.",
    imageCaption: "Eu, muito além dos capítulos difíceis."
  },
  {
    id: "primeira-batalha",
    number: "02",
    kicker: "O PRIMEIRO RECOMEÇO",
    title: "Minha primeira batalha foi contra o câncer de mama.",
    paragraphs: [
      "Foi o primeiro grande desafio que precisei enfrentar. O câncer de mama mudou minha vida e me levou a passar por uma cirurgia em que retirei parte da mama.",
      "Não foi um caminho simples. Precisei encontrar forças para atravessar aquele momento, cuidar de mim e seguir em frente. Eu venci aquela primeira batalha — e continuei vivendo, fazendo planos e construindo novas lembranças."
    ],
    image: "/images/juliana-hospital-v.webp",
    imageAlt: "Juliana em um registro pessoal durante uma passagem pelo hospital.",
    imageCaption: "Um registro de uma das etapas da minha caminhada."
  },
  {
    id: "dez-anos-depois",
    number: "03",
    kicker: "NOVOS DESAFIOS",
    title: "Cerca de dez anos depois, precisei recomeçar mais uma vez.",
    paragraphs: [
      "Quando já havia passado tanto tempo desde a primeira batalha, novos diagnósticos voltaram a fazer parte da minha vida. Nos meus relatos, compartilhei que enfrentei câncer de intestino e câncer de vesícula, que identifiquei como colangiocarcinoma. Também falei sobre tumores no pulmão e alterações no fígado.",
      "Vieram novos tratamentos, cirurgias e períodos de muita incerteza. Em uma das minhas publicações, escrevi com a força que eu sentia naquele momento: “VENCI TODOS ELES”. Era a minha maneira de registrar cada etapa que eu havia atravessado."
    ],
    image: "/images/juliana-hospital-heart.webp",
    imageAlt: "Juliana sorrindo e fazendo um coração com a mão durante uma internação.",
    imageCaption: "Mesmo nos dias difíceis, procurei guardar espaço para o sorriso."
  },
  {
    id: "remissao",
    number: "04",
    kicker: "QUANDO EU ESPERAVA RESPIRAR",
    title: "Quando eu acreditava estar perto da remissão, veio outra notícia.",
    paragraphs: [
      "Depois de quatro anos de luta, eu acreditava que estava perto de entrar em remissão. Eu imaginava que poderia começar uma fase diferente, com um pouco mais de tranquilidade.",
      "Mas, naquele momento, recebi a notícia de que haviam sido encontrados quatro tumores no fígado. Foi mais uma mudança inesperada no caminho, quando eu já alimentava a esperança de respirar um pouco mais aliviada.",
      "Em um dos meus relatos, falei sobre a fé, a força dos pensamentos e a decisão de seguir em frente. Escrevi: “Acredite! Desistir não me representa. Avante!”"
    ],
    image: "/images/juliana-headwrap.webp",
    imageAlt: "Juliana em um registro pessoal durante seu tratamento.",
    imageCaption: "Um momento da caminhada que compartilhei com quem estava perto de mim."
  },
  {
    id: "continuar",
    number: "05",
    kicker: "A JORNADA CONTINUA",
    title: "Enfrentei novas complicações. E continuei o tratamento.",
    paragraphs: [
      "Mais recentemente, contei que estava fazendo quimioterapia havia cerca de um ano e que haviam sido identificadas novas alterações no pâncreas e nas vias biliares, além de uma neoplasia no pulmão.",
      "Durante uma biópsia no pulmão, passei por uma complicação muito séria. Relatei uma hemorragia pulmonar, uma fístula de ar e a formação de um coágulo no pulmão. Depois disso, enfrentei outras complicações que descrevi como pneumonia e embolias, além de episódios de sangramento pela boca.",
      "Foi um período assustador e difícil. Mas, depois de tudo isso, compartilhei que estava continuando a quimioterapia. E escrevi do meu jeito, com a fé que me acompanha: “VENCEMOSSSS EM NOME DE JESUS!”"
    ],
    image: "/images/juliana-hospital-heart.webp",
    imageAlt: "Juliana sorrindo no hospital e fazendo um coração com a mão.",
    imageCaption: "Mais um registro de coragem, fé e vontade de continuar."
  }
];

export const voiceQuotes = [
  "Desistir não me representa. Avante!",
  "Se eu consigo, você também consegue.",
  "Mais um dia vencido.",
  "Venci todos eles."
];

export const campaignNeeds = {
  goal: null as number | null,
  purpose:
    "Estou pedindo ajuda para contribuir com as despesas desta caminhada e do meu tratamento. A família atualizará esta página com a finalidade detalhada da arrecadação e a prestação de contas."
};
