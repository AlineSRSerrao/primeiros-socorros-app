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

const PAGINA_SAMU_BOMBEIROS = {
  titulo: "SAMU ou Bombeiros?",
  subtitulo: "Em caso de dúvida na hora de ligar, veja o que cada serviço atende. Se não tiver certeza, ligue 192 ou 193, descreva a situação e siga as orientações do atendente.",
  samu: {
    titulo: "SAMU — 192",
    icone: '<img src="img/icones/icone-samu.webp" alt="" class="icone-comparativo-titulo-img">',
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
      "Queimaduras graves e traumas com suspeita de fratura",
      "Vítima de afogamento, já fora da água (atendimento médico)",
      "Vítima de choque elétrico (avaliação médica, mesmo sem ferimento aparente)"
    ]
  },
  bombeiros: {
    titulo: "Corpo de Bombeiros — 193",
    icone: '<img src="img/icones/icone-bombeiros.webp" alt="" class="icone-comparativo-titulo-img">',
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
      "Situações com risco à vida e necessidade de resgate ou extração (ex.: acidente com pessoa presa nas ferragens, afogamento ou choque elétrico com fiação exposta) podem exigir atuação conjunta do Corpo de Bombeiros e do SAMU, conforme a organização local.",
      "Na dúvida, ligue 192 ou 193, descreva a situação com clareza e siga as orientações do atendente.",
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
        { titulo: "Exaustão pelo Calor e Golpe de Calor", imagem: "img/guia-insolacao.webp" },
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
      titulo: "Diretrizes usadas na revisão de conteúdo",
      itens: [
        {
          titulo: "AHA 2025 Guidelines for CPR & ECC (engasgo, RCP, DEA)",
          texto: "American Heart Association — algoritmo atualizado de desobstrução de vias aéreas e suporte básico de vida.",
          link: {
            texto: "Acessar (cpr.heart.org)",
            url: "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines"
          }
        },
        {
          titulo: "2024 AHA e American Red Cross Guidelines for First Aid",
          texto: "Diretrizes conjuntas de primeiros socorros — convulsão, objeto no olho e outros temas.",
          link: {
            texto: "Acessar (cpr.heart.org)",
            url: "https://cpr.heart.org/en/resuscitation-science/2024-first-aid-guidelines"
          }
        },
        {
          titulo: "2024 AHA/AAP Focused Update: Resuscitation Following Drowning",
          texto: "Atualização específica sobre reanimação após afogamento.",
          link: {
            texto: "Acessar (cpr.heart.org)",
            url: "https://professional.heart.org/en/science-news/2024-aha-and-aap-focused-update-on-special-circumstances-resuscitation-following-drowning"
          }
        },
        {
          titulo: "Ondas de Calor — Ministério da Saúde",
          texto: "Definição e sinais de emergência do golpe de calor.",
          link: {
            texto: "Acessar (gov.br/saude)",
            url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/o/ondas-de-calor"
          }
        },
        {
          titulo: "Nota Técnica Conjunta nº 270/2026 — Ministério da Saúde",
          texto: "Preparação e resposta a ondas de frio, incluindo classificação da hipotermia.",
          link: {
            texto: "Acessar (gov.br/saude, PDF)",
            url: "https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/notas-tecnicas/2026/nota-tecnica-conjunta-no-270-2026.pdf"
          }
        },
        {
          titulo: "Dica em Saúde: Queimaduras — BVS/Ministério da Saúde",
          texto: "Orientação oficial sobre resfriamento de queimaduras e classificação por grau.",
          link: {
            texto: "Acessar (bvsms.saude.gov.br)",
            url: "https://bvsms.saude.gov.br/bvs/dicas/54queimaduras.html"
          }
        },
        {
          titulo: "Manejo inicial da crise de ansiedade — Linhas de Cuidado, Ministério da Saúde",
          texto: "Protocolo do SAMU para primeiro atendimento em crises de ansiedade.",
          link: {
            texto: "Acessar (linhasdecuidado.saude.gov.br)",
            url: "https://linhasdecuidado.saude.gov.br/portal/ansiedade/servico-de-atendimento-movel/manejo-inicial/"
          }
        },
        {
          titulo: "SAMU 192 — página oficial",
          texto: "Situações atendidas pelo SAMU, usadas na comparação SAMU x Corpo de Bombeiros.",
          link: {
            texto: "Acessar (gov.br/saude)",
            url: "https://www.gov.br/saude/pt-br/composicao/saes/samu-192"
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
