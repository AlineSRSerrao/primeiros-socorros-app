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

const PAGINA_GUIAS = {
  titulo: "Ilustrações",
  subtitulo: "Pôsteres de consulta rápida, organizados por categoria. Toque para ampliar.",
  categorias: [
    {
      titulo: "Emergências Respiratórias e Cardíacas",
      posteres: [
        { titulo: "Engasgo — Guia de Primeiros Socorros", imagem: "img/guia-engasgo.webp" },
        { titulo: "Reanimação Cardiopulmonar (RCP)", imagem: "img/guia-rcp.webp" },
        { titulo: "Afogamento", imagem: "img/guia-afogamento.webp" }
      ]
    },
    {
      titulo: "Lesões e Traumas",
      posteres: [
        { titulo: "Queimaduras", imagem: "img/guia-queimaduras.webp" },
        { titulo: "Fraturas e Entorses", imagem: "img/guia-fraturas.webp" },
        { titulo: "Sangramento Intenso", imagem: "img/guia-sangramento.webp" }
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
