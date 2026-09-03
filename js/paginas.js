// Conteúdo das páginas fixas (não são módulos de emergência).

const PAGINA_SOBRE = {
  titulo: "Sobre o Projeto",
  blocos: [
    {
      titulo: "O que é?",
      texto: `"Primeiros Socorros na Palma da Mão" é um aplicativo educativo desenvolvido no
      âmbito do edital Jovens Talentos 2025 – FAPERJ, por estudantes bolsistas do Ensino Médio
      Técnico dos cursos de Enfermagem e Informática da ETESC (Escola Técnica Estadual
      Santa Cruz - RJ).`
    },
    {
      titulo: "Em desenvolvimento",
      texto: `Este projeto encontra-se em desenvolvimento. Esta ainda não é a versão final do
      aplicativo — conteúdos, ilustrações e funcionalidades continuam sendo revisados e
      atualizados.`
    },
    {
      titulo: "Objetivo",
      texto: `Levar orientações confiáveis e de fácil compreensão sobre primeiros socorros ao
      público leigo, de forma gratuita e acessível, incentivando uma cultura de cuidado e
      de ação rápida diante de emergências do dia a dia.`
    },
    {
      titulo: "Equipe",
      texto: `Orientadora: Aline Silvestre Rosa Serrão.<br>
      Alunas: Thaís Velloso da Silva e Samille Vitória de Freitas Ledo.`
    },
    {
      titulo: "Importante",
      texto: `Este aplicativo é um material educativo e não substitui atendimento médico
      profissional. Em qualquer emergência real, ligue 192 (SAMU) ou 193 (Corpo de Bombeiros).`
    }
  ]
};

// NOTA PARA REVISÃO: divisão de atribuições entre SAMU e Bombeiros baseada em
// conhecimento público geral (SAMU = atendimento médico de urgência; Corpo de
// Bombeiros = resgate, salvamento e emergências ambientais/estruturais).
// Não é uma fonte oficial verificada — confirme os itens, principalmente os
// mais específicos, com os canais oficiais do SAMU-RJ e do CBMERJ antes de
// publicar, já que o protocolo pode variar entre municípios.
const PAGINA_SAMU_BOMBEIROS = {
  titulo: "SAMU ou Bombeiros?",
  subtitulo: "Em caso de dúvida na hora de ligar, veja o que cada serviço atende. Se não tiver certeza, ligue para qualquer um dos dois — o atendente orienta e aciona o serviço correto.",
  samu: {
    titulo: "SAMU — 192",
    icone: "🚑",
    descricao: "Emergências de saúde: quando a vida corre risco por um problema médico.",
    itens: [
      "Mal súbito: suspeita de infarto ou AVC",
      "Falta de ar grave, crise asmática severa",
      "Convulsões e crises de ansiedade/pânico intensas",
      "Desmaio ou perda de consciência",
      "Partos e complicações na gravidez",
      "Intoxicações e envenenamentos",
      "Crises psiquiátricas e tentativas de suicídio",
      "Feridos em acidentes de trânsito (atendimento e transporte médico)",
      "Queimaduras graves e traumas com suspeita de fratura"
    ]
  },
  bombeiros: {
    titulo: "Corpo de Bombeiros — 193",
    icone: "🚒",
    descricao: "Resgate, salvamento e situações de risco físico ou ambiental.",
    itens: [
      "Incêndios (residenciais, veiculares, florestais)",
      "Resgate de pessoas presas em ferragens após acidente",
      "Afogamentos e resgates aquáticos ou em altura",
      "Vazamento de gás ou produto químico perigoso",
      "Desabamentos e quedas de estrutura",
      "Resgate em locais de difícil acesso (poços, elevadores presos)",
      "Choque elétrico com fiação exposta em via pública",
      "Animais peçonhentos ou silvestres soltos em via pública (em muitas cidades)"
    ]
  },
  ambos: {
    titulo: "Na dúvida, ou quando envolve os dois",
    itens: [
      "Se a situação tem risco à vida E precisa de resgate/extração (ex.: acidente com pessoa presa nas ferragens), normalmente os dois serviços são acionados juntos.",
      "Ligue para qualquer um dos dois números — o atendente identifica a emergência e aciona o serviço adequado.",
      "O importante é ligar rápido e informar com clareza o que está acontecendo e o endereço."
    ]
  }
};

const PAGINA_GUIAS = {
  titulo: "Ilustrações",
  subtitulo: "Pôsteres de consulta rápida, organizados por categoria. Toque para ampliar.",
  categorias: [
    {
      titulo: "Emergências Respiratórias e Cardíacas",
      posteres: [
        { titulo: "Engasgo — Guia de Primeiros Socorros", imagem: "img/guia-engasgo.webp" },
        { titulo: "Reanimação Cardiopulmonar (RCP)", imagem: "img/guia-rcp.webp" },
        { titulo: "Afogamento", imagem: "img/guia-afogamento.webp" },
        { titulo: "Utilização do DEA", imagem: "img/guia-dea.webp" }
      ]
    },
    {
      titulo: "Lesões e Traumas",
      posteres: [
        { titulo: "Queimaduras", imagem: "img/guia-queimaduras.webp" },
        { titulo: "Fraturas e Entorses", imagem: "img/guia-fraturas.webp" },
        { titulo: "Sangramento Intenso", imagem: "img/guia-sangramento.webp" },
        { titulo: "Mordidas de Animais", imagem: "img/guia-mordidas.webp" }
      ]
    },
    {
      titulo: "Exposição e Substâncias",
      posteres: [
        { titulo: "Insolação e Exaustão por Calor", imagem: "img/guia-insolacao.webp" },
        { titulo: "Intoxicação", imagem: "img/guia-intoxicacao.webp" }
      ]
    }
  ]
};

const PAGINA_ESTUDOS = {
  titulo: "Referências",
  categorias: [
    {
      titulo: "Materiais de Apoio",
      itens: [
        {
          titulo: "Manual de Primeiros Socorros para Leigos",
          texto: "Guia da SAMU 192 — Secretaria Municipal da Saúde de São Paulo.",
          link: {
            texto: "Acessar manual (gov.br)",
            url: "https://prefeitura.sp.gov.br/web/saude/w/primeiros-socorros-para-leigos"
          }
        },
        {
          titulo: "Sociedade Brasileira de Queimaduras",
          texto: "Orientações voltadas a profissionais de saúde sobre o atendimento a queimaduras.",
          link: {
            texto: "Acessar site (SBQueimaduras)",
            url: "https://sbqueimaduras.org.br/profissional-saude"
          }
        },
        {
          titulo: "Cartilha de Segurança e Desempenho: Desfibrilador Automático Externo",
          texto: `Fonte: Agência Nacional de Vigilância Sanitária (Anvisa), edição revisada e ampliada de 2025.
          A reprodução parcial ou integral é permitida para uso não comercial, desde que a fonte seja citada.`,
          link: {
            texto: "Acessar cartilha (gov.br/Anvisa)",
            url: "https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/monitoramento/tecnovigilancia/cartilha-de-seguranca-e-desempenho-desfibrilador-automatico-externo"
          }
        }
      ]
    },
    {
      titulo: "Protocolos",
      itens: [
        {
          titulo: "Suporte Básico de Vida (SBV)",
          texto: `Conjunto de diretrizes e procedimentos médicos mais complexos, utilizados por
          profissionais de saúde altamente treinados para oferecer assistência em situações
          de emergência crítica.`,
          link: {
            texto: "Ver protocolo completo (gov.br, PDF)",
            url: "https://www.gov.br/saude/pt-br/composicao/saes/samu-192/publicacoes/protocolo-de-suporte-basico-de-vida-1-2.pdf/view"
          }
        }
      ]
    },
    {
      titulo: "Em breve",
      itens: [
        {
          texto: `Esta área também vai reunir resumos, slides e exercícios sobre primeiros
          socorros usados no desenvolvimento deste aplicativo. Volte em breve para conferir
          as novidades!`
        }
      ]
    }
  ]
};
