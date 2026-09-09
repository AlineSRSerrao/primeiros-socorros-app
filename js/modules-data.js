// Conteúdo educativo dos módulos de Primeiros Socorros
// IMPORTANTE: conteúdo geral de orientação para leigos, baseado em diretrizes
// públicas amplamente aceitas (OMS / Cruz Vermelha). Revisar com a equipe de
// Enfermagem antes da publicação final — este é um ponto de partida editorial,
// não uma validação clínica.

const MODULOS = [
  {
    id: "engasgo",
    titulo: "Engasgo",
    cor: "#D32F2F",
    icone: "🫁",
    videos: [
      {
        titulo: "Vídeo curto: orientação rápida",
        tituloCompleto: "Manobras de desengasgo: orientação rápida",
        url: "https://www.youtube.com/watch?v=hyLG33DgsGs"
      }
    ],
    resumo: "Quando a via aérea é obstruída por um objeto ou alimento. Toque na faixa etária.",
    abasLabel: "Faixa etária",
    subcategorias: [
      {
        id: "bebe",
        nome: "Bebê (até 1 ano)",
        imagem: "img/engasgo-bebe.webp",
        videos: [{
          titulo: "Vídeo completo: demonstração detalhada",
          tituloCompleto: "Manobras de desengasgo: orientação completa",
          url: "https://www.youtube.com/watch?v=P0IPytvlXQQ"
        }],
        sinais: [
          "Tosse fraca ou ausência de tosse",
          "Choro fraco ou nenhum som",
          "Dificuldade para respirar, rosto ou lábios arroxeados"
        ],
        passos: [
          "Segure o bebê de bruços sobre o seu antebraço, com a cabeça mais baixa que o tronco e a mandíbula bem apoiada, sem apertar o pescoço.",
          "Aplique até 5 palmadas firmes entre as escápulas.",
          "Se não desobstruir, vire o bebê de barriga para cima sobre o antebraço, mantendo o apoio cervical constante.",
          "Aplique até 5 compressões torácicas com a base da palma de uma mão no centro do peito, logo abaixo da linha dos mamilos.",
          "Alterne ciclos de 5 palmadas e 5 compressões até o objeto sair.",
          "Se o bebê perder a consciência, ligue 192 (viva-voz, se estiver sozinho) e inicie a RCP para bebês."
        ],
        naoFaca: [
          "Não faça a manobra de Heimlich (compressão abdominal) em bebês.",
          "Não faça varredura às cegas com o dedo dentro da boca do bebê.",
          "Mesmo após o objeto sair e o bebê voltar a respirar, leve-o imediatamente a um pronto-socorro para avaliação."
        ]
      },
      {
        id: "crianca",
        nome: "Criança (1 a 8 anos)",
        imagem: "img/engasgo-crianca.webp",
        videos: [{
          titulo: "Vídeo completo: demonstração detalhada",
          tituloCompleto: "Manobras de desengasgo: orientação completa",
          url: "https://www.youtube.com/watch?v=P0IPytvlXQQ"
        }],
        sinais: [
          "Não consegue falar, tossir ou respirar",
          "Leva as mãos à garganta",
          "Rosto e lábios ficando arroxeados"
        ],
        passos: [
          "Se a criança tossir ou falar, incentive a tossir. Se não conseguir respirar, aja imediatamente.",
          "Fique atrás da criança e incline levemente o tronco dela para a frente.",
          "Feche uma mão em punho e faça 5 compressões abdominais rápidas, para dentro e para cima.",
          "Repita as compressões até o objeto sair ou a criança voltar a respirar.",
          "Se houver ajuda, peça para alguém ligar 192 imediatamente; se estiver sozinho, continue a manobra e ligue 192 em viva-voz.",
          "Se a criança desmaiar, ligue 192 e inicie a RCP."
        ],
        naoFaca: [
          "Não use a mesma força empregada em um adulto.",
          "Não sacuda a criança pelos braços ou pernas.",
          "Mesmo que o objeto saia, leve a criança imediatamente a um pronto-socorro para avaliação médica."
        ]
      },
      {
        id: "adolescente",
        nome: "Adolescente",
        imagem: "img/engasgo-adolescente.webp",
        videos: [{
          titulo: "Vídeo completo: demonstração detalhada",
          tituloCompleto: "Manobras de desengasgo: orientação completa",
          url: "https://www.youtube.com/watch?v=P0IPytvlXQQ"
        }],
        sinais: [
          "Não consegue falar, tossir ou respirar",
          "Leva as mãos à garganta",
          "Rosto e lábios ficando arroxeados"
        ],
        passos: [
          "Se a adolescente/o adolescente tossir ou falar, incentive a tossir. Se não conseguir respirar, aja imediatamente.",
          "Fique atrás da pessoa e incline levemente o tronco dela para a frente.",
          "Faça 5 compressões abdominais rápidas, para dentro e para cima (em formato de 'J').",
          "Repita as compressões até o objeto sair ou a pessoa voltar a respirar.",
          "Se houver ajuda, peça para alguém ligar 192 imediatamente; se estiver sozinho, continue os ciclos e ligue 192 em viva-voz.",
          "Se a pessoa desmaiar ou não responder, ligue 192 e inicie a RCP."
        ],
        naoFaca: [
          "Vítimas especiais (grávidas ou pessoas com obesidade): se não for possível circundar o abdômen, use compressões torácicas firmes no centro do peito.",
          "Mesmo que o objeto saia, a vítima deve ser avaliada por um médico para verificar lesões internas."
        ]
      },
      {
        id: "adulto",
        nome: "Adulto",
        imagem: "img/engasgo-adulto.webp",
        videos: [{
          titulo: "Vídeo completo: demonstração detalhada",
          tituloCompleto: "Manobras de desengasgo: orientação completa",
          url: "https://www.youtube.com/watch?v=P0IPytvlXQQ"
        }],
        sinais: [
          "Não consegue falar, tossir ou respirar",
          "Leva as mãos à garganta",
          "Rosto e lábios ficando arroxeados"
        ],
        passos: [
          "Pergunte 'você está engasgado?'. Se ainda tossir com força, incentive a tossir.",
          "Se não conseguir tossir, falar ou respirar: fique atrás da pessoa, incline o tronco dela para a frente.",
          "Aplique até 5 golpes firmes entre as escápulas com a base da mão.",
          "Se não resolver, faça a manobra de Heimlich: mãos entrelaçadas acima do umbigo, compressões rápidas para dentro e para cima.",
          "Alterne 5 golpes nas costas e 5 compressões abdominais até desobstruir ou a pessoa perder a consciência.",
          "Se desmaiar, inicie a RCP e peça para alguém chamar ajuda (192)."
        ],
        naoFaca: ["Se a pessoa estiver grávida ou for muito acima do peso, posicione as mãos mais acima, no meio do peito, em vez do abdômen."]
      },
      {
        id: "adulto-sozinho",
        nome: "Adulto sozinho",
        imagem: "img/engasgo-adulto-sozinho.webp",
        videos: [{
          titulo: "Vídeo completo: demonstração detalhada",
          tituloCompleto: "Manobras de desengasgo: orientação completa",
          url: "https://www.youtube.com/watch?v=P0IPytvlXQQ"
        }],
        sinais: [
          "Se ainda consegue tossir ou falar: tussa com força.",
          "Se não consegue respirar: aja imediatamente, sem esperar por ajuda."
        ],
        passos: [
          "Se conseguir, ligue 192 no viva-voz enquanto tenta se desengasgar.",
          "Feche uma mão e coloque acima do umbigo, abaixo do esterno.",
          "Com a outra mão por cima, faça compressões rápidas, para dentro e para cima, até o objeto sair.",
          "Se não funcionar, pressione a parte alta do abdômen com força contra a borda firme de uma cadeira, mesa ou bancada."
        ],
        naoFaca: ["Não tente retirar às cegas o objeto da boca."]
      },
      {
        id: "gestante",
        nome: "Gestante",
        imagem: "img/engasgo-gestante.webp",
        videos: [{
          titulo: "Vídeo completo: demonstração detalhada",
          tituloCompleto: "Manobras de desengasgo: orientação completa",
          url: "https://www.youtube.com/watch?v=P0IPytvlXQQ"
        }],
        sinais: [
          "Se a gestante tossir ou falar, incentive a tossir.",
          "Se não conseguir respirar, aja imediatamente."
        ],
        passos: [
          "Fique atrás da gestante e incline levemente o tronco dela para a frente.",
          "Faça 5 compressões rápidas no centro do esterno, para trás — nunca no abdômen.",
          "Repita as compressões torácicas até o objeto sair ou a gestante voltar a respirar.",
          "Se ela desmaiar ou não responder, ligue 192 e inicie a RCP."
        ],
        naoFaca: [
          "Não faça compressões abdominais em gestantes.",
          "Não tente retirar às cegas o objeto da boca."
        ]
      }
    ]
  },
  {
    id: "hemorragia-nasal",
    titulo: "Hemorragia Nasal",
    cor: "#C2185B",
    icone: "🩹",
    imagem: "img/hemorragia-nasal.webp",
    videos: [{
      titulo: "Assistir vídeo explicativo",
      tituloCompleto: "Hemorragia nasal: primeiros socorros",
      url: "https://youtu.be/2FEKpnwVTGI?is=CcjHv6rG6sRZz6qE"
    }],
    resumo: "Sangramento pelo nariz, geralmente sem gravidade.",
    sinais: ["Sangue escorrendo por uma ou ambas as narinas", "Pode vir acompanhado de leve tontura"],
    passos: [
      "Sente a pessoa e incline a cabeça levemente para a FRENTE, nunca para trás.",
      "Peça para respirar pela boca.",
      "Pressione as narinas na parte mole (logo abaixo do osso) com os dedos, continuamente, por 10 a 15 minutos sem soltar para checar.",
      "Aplique uma compressa fria na base do nariz e na testa, se disponível.",
      "Depois que parar, oriente a não assoar o nariz nem abaixar a cabeça por algumas horas.",
      "Procure atendimento médico se o sangramento não parar após 20 minutos, for muito intenso, ou ocorrer após uma pancada na cabeça."
    ],
    naoFaca: [
      "Não incline a cabeça para trás — o sangue pode escorrer pela garganta e causar engasgo ou vômito.",
      "Não tampe o nariz empurrando papel ou algodão para dentro."
    ]
  },
  // NOTA PARA REVISÃO CLÍNICA: o protocolo de RCP para afogamento (começar com
  // ventilações antes das compressões) é diferente do protocolo padrão e
  // costuma aparecer em diretrizes internacionais de suporte básico de vida —
  // mas peça para a equipe de Enfermagem confirmar a versão vigente antes de publicar.
  {
    id: "afogamento",
    titulo: "Afogamento",
    cor: "#0277BD",
    icone: "🌊",
    imagem: "img/afogamento-ilustracao.webp",
    resumo: "Dificuldade respiratória por submersão ou imersão em água.",
    sinais: [
      "Cabeça baixa na água, boca na altura da superfície",
      "Pode não conseguir gritar por socorro (afogamento costuma ser silencioso)",
      "Movimentos de braços tentando se manter na superfície, sem nadar de fato"
    ],
    passos: [
      "Ligue para o 192 (ou 193 Corpo de Bombeiros) imediatamente.",
      "Retire a pessoa da água com segurança — use uma boia, corda ou objeto flutuante; só entre na água se for treinado e seguro para isso.",
      "Ao trazer a vítima para fora, verifique se está respirando.",
      "Se não estiver respirando, inicie a RCP: para afogamento, comece com 5 ventilações de resgate antes das compressões torácicas — diferente do protocolo padrão de RCP.",
      "Retire a pessoa da água fria e a mantenha aquecida com cobertores ou roupas secas.",
      "Encaminhe para avaliação médica mesmo que a pessoa pareça recuperada — sintomas de complicação pulmonar podem aparecer horas depois (afogamento secundário)."
    ],
    naoFaca: [
      "Não entre na água para resgatar sem flutuador e sem treinamento — afogamentos duplos são comuns.",
      "Não pressione o abdômen da vítima para tentar tirar água dos pulmões (método antigo, não recomendado)."
    ]
  },
  {
    id: "sangramento",
    titulo: "Sangramento intenso",
    cor: "#B71C1C",
    icone: "🩸",
    imagem: "img/sangramento-ilustracao.webp",
    resumo: "Ferimentos com perda de sangue abundante.",
    sinais: ["Sangue escorrendo continuamente ou em jato", "Palidez, tontura, pele fria e úmida"],
    passos: [
      "Chame ajuda (192) antes de continuar, se possível.",
      "Pressione o ferimento com um pano limpo ou gaze, com firmeza e continuamente.",
      "Eleve o membro ferido acima do nível do coração, se não houver suspeita de fratura.",
      "Não retire o pano se ele encharcar — acrescente outro por cima.",
      "Mantenha a pessoa deitada e aquecida até a chegada do socorro."
    ],
    naoFaca: ["Não faça torniquete improvisado a menos que tenha treinamento — pode causar mais dano."]
  },
  {
    id: "queimaduras",
    titulo: "Queimaduras",
    cor: "#EF6C00",
    icone: "🔥",
    resumo: "Lesões causadas por calor, produtos químicos ou eletricidade. Toque no grau.",
    abasLabel: "Grau da queimadura",
    subcategorias: [
      {
        id: "primeiro-grau",
        nome: "1º grau",
        imagem: "img/queimadura-ilustracao.webp",
        videos: [{
          titulo: "Assistir vídeo explicativo",
          tituloCompleto: "Queimaduras: primeiros socorros",
          url: "https://youtu.be/z8Scj1Rveck?is=qZhFFQgswZaNbDQp"
        }],
        sinais: [
          "Atinge apenas a camada mais superficial da pele (epiderme)",
          "Vermelhidão e dor leve a moderada",
          "Pele seca, sem bolhas",
          "Exemplo comum: queimadura solar leve"
        ],
        passos: [
          "Afaste a pessoa da fonte de calor.",
          "Resfrie a área com água corrente em temperatura ambiente por 10 a 20 minutos.",
          "Hidrate a pele depois de resfriar.",
          "Se necessário, um analgésico comum pode aliviar a dor.",
          "Evite expor a área ao sol até a pele cicatrizar."
        ],
        naoFaca: ["Não passe gelo, pasta de dente, manteiga ou clara de ovo na queimadura."]
      },
      {
        id: "segundo-grau",
        nome: "2º grau",
        imagem: "img/queimadura-ilustracao.webp",
        videos: [{
          titulo: "Assistir vídeo explicativo",
          tituloCompleto: "Queimaduras: primeiros socorros",
          url: "https://youtu.be/z8Scj1Rveck?is=qZhFFQgswZaNbDQp"
        }],
        sinais: [
          "Atinge a epiderme e parte da derme (camada mais profunda)",
          "Formação de bolhas",
          "Pele avermelhada, úmida e com dor intensa"
        ],
        passos: [
          "Afaste a pessoa da fonte de calor.",
          "Resfrie a área com água corrente em temperatura ambiente por 10 a 20 minutos.",
          "Retire anéis, relógios e roupas apertadas antes que a região inche.",
          "Cubra com um pano limpo e seco, sem apertar.",
          "Procure atendimento médico, principalmente se a queimadura for extensa ou estiver no rosto, mãos, articulações ou genitais."
        ],
        naoFaca: [
          "Não estoure as bolhas.",
          "Não passe gelo, pasta de dente, manteiga ou clara de ovo na queimadura."
        ]
      },
      {
        id: "terceiro-grau",
        nome: "3º grau",
        imagem: "img/queimadura-ilustracao.webp",
        videos: [{
          titulo: "Assistir vídeo explicativo",
          tituloCompleto: "Queimaduras: primeiros socorros",
          url: "https://youtu.be/z8Scj1Rveck?is=qZhFFQgswZaNbDQp"
        }],
        sinais: [
          "Destrói a epiderme e toda a derme, podendo atingir tecidos mais profundos",
          "Pele esbranquiçada, enegrecida ou com aspecto de couro",
          "Pode haver pouca ou nenhuma dor na área atingida (terminações nervosas destruídas), com dor intensa ao redor"
        ],
        passos: [
          "Ligue 192 imediatamente — é uma emergência médica.",
          "Afaste a pessoa da fonte de calor com segurança.",
          "Cubra a área com um pano limpo e seco (ou filme plástico), sem apertar.",
          "Retire anéis, relógios e roupas próximas que não estejam grudadas na pele.",
          "Mantenha a pessoa aquecida enquanto aguarda socorro.",
          "Fique atento à respiração, especialmente em queimaduras no rosto ou pescoço."
        ],
        naoFaca: [
          "Não retire tecidos ou roupas grudados na pele.",
          "Não aplique água gelada, gelo ou qualquer substância caseira na área.",
          "Não ofereça água ou comida à pessoa."
        ]
      }
    ]
  },
  {
    id: "desmaio",
    titulo: "Desmaio (síncope)",
    cor: "#1565C0",
    icone: "💫",
    imagem: "img/desmaio-ilustracao.webp",
    resumo: "Perda súbita e breve da consciência.",
    sinais: ["Tontura, visão escurecida antes de cair", "Palidez e sudorese"],
    passos: [
      "Deite a pessoa e eleve as pernas cerca de 30 cm.",
      "Afrouxe roupas apertadas no pescoço.",
      "Garanta ventilação — afaste aglomerações.",
      "Ao recobrar a consciência, deixe a pessoa se levantar devagar.",
      "Se não recobrar a consciência em 1 minuto, chame ajuda e verifique a respiração."
    ],
    naoFaca: ["Não ofereça água ou comida enquanto a pessoa estiver desacordada."]
  },
  {
    id: "rcp",
    titulo: "Parada cardiorrespiratória (RCP básica)",
    cor: "#6A1B9A",
    icone: "❤️",
    imagem: "img/rcp-adulto.webp",
    videos: [
      {
        titulo: "Assistir vídeo explicativo",
        tituloCompleto: "Como fazer reanimação cardíaca? — Dr. Drauzio Varella",
        url: "https://www.youtube.com/watch?v=j0Jwj8KKY5c"
      }
    ],
    resumo: "A pessoa não responde e não respira normalmente.",
    sinais: ["Não responde a estímulos", "Não respira ou respira de forma anormal (gasping)"],
    passos: [
      "Chame ajuda imediatamente (192) e peça um DEA, se houver por perto.",
      "Posicione as mãos sobrepostas no centro do peito.",
      "Comprima forte e rápido: cerca de 100 a 120 compressões por minuto, profundidade de 5 a 6 cm.",
      "Permita o retorno total do tórax entre as compressões.",
      "Continue até a chegada do socorro ou a pessoa se mover."
    ],
    naoFaca: ["Não interrompa as compressões por mais que alguns segundos.", "Se não for treinado em ventilação, priorize apenas as compressões contínuas."]
  },
  {
    id: "fraturas",
    titulo: "Fraturas e entorses",
    cor: "#00838F",
    icone: "🦴",
    imagem: "img/fraturas-ilustracao.webp",
    resumo: "Suspeita de osso quebrado ou lesão articular.",
    sinais: ["Dor intensa, inchaço, deformidade", "Dificuldade ou incapacidade de mover a área"],
    passos: [
      "Não movimente a área lesionada.",
      "Imobilize com uma tala improvisada (revista, papelão) e tecido, sem apertar.",
      "Aplique compressa fria envolta em pano, nunca direto na pele.",
      "Encaminhe para atendimento médico."
    ],
    naoFaca: ["Não tente 'colocar o osso no lugar'.", "Não force a pessoa a andar ou apoiar o membro."]
  },
  {
    id: "convulsao",
    titulo: "Convulsão",
    cor: "#4527A0",
    icone: "🧠",
    imagem: "img/convulsao-ilustracao.webp",
    videos: [{
      titulo: "Assistir vídeo explicativo",
      tituloCompleto: "Convulsão: primeiros socorros",
      url: "https://youtube.com/shorts/XeSjWcxUULA?is=gFZJnwERaY63qEBF"
    }],
    resumo: "Movimentos involuntários e perda de consciência.",
    sinais: ["Contrações musculares generalizadas", "Perda de consciência", "Pode haver perda de controle urinário"],
    passos: [
      "Afaste objetos que possam machucar a pessoa.",
      "Proteja a cabeça com algo macio.",
      "Vire a pessoa de lado assim que possível, para evitar engasgo.",
      "Não segure os movimentos da pessoa.",
      "Cronometre a duração; se passar de 5 minutos, chame ajuda (192)."
    ],
    naoFaca: ["Não coloque nada na boca da pessoa.", "Não tente conter os movimentos com força."]
  },
  {
    id: "intoxicacao",
    titulo: "Intoxicação / ingestão de substância",
    cor: "#2E7D32",
    icone: "☠️",
    imagem: "img/intoxicacao-ilustracao.webp",
    resumo: "Ingestão acidental de produto químico, medicamento ou planta tóxica.",
    sinais: ["Náusea, vômito, confusão", "Embalagem ou substância próxima à pessoa"],
    passos: [
      "Ligue imediatamente para o Centro de Intoxicações (disque 0800 722 6001) ou 192.",
      "Guarde a embalagem do produto para informar a substância.",
      "Não induza o vômito, a menos que orientado por um profissional.",
      "Mantenha a pessoa em observação até a chegada de ajuda."
    ],
    naoFaca: ["Nunca dê leite, água ou qualquer substância 'neutralizante' sem orientação profissional."]
  },
  {
    id: "picadas",
    titulo: "Picadas e Mordidas",
    cor: "#558B2F",
    icone: "🐝",
    resumo: "Picada de inseto, aranha, escorpião, cobra ou mordida de animal. Toque no tipo.",
    abasLabel: "Tipo de picada ou mordida",
    linksExternos: [
      {
        texto: "Saiba mais sobre animais peçonhentos (gov.br)",
        url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/animais-peconhentos"
      },
      {
        texto: "Hospitais de Referência para Atendimento (gov.br)",
        url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/animais-peconhentos/hospitais-de-referencia?b_start:int=0"
      }
    ],
    subcategorias: [
      {
        id: "insetos",
        nome: "Insetos",
        imagem: "img/picadas-insetos-aracnideos.webp",
        sinais: [
          "Dor, vermelhidão e inchaço local",
          "Coceira na região da picada",
          "Sinais de alergia grave: inchaço no rosto/lábios, falta de ar, urticária pelo corpo"
        ],
        passos: [
          "Se o ferrão ficar visível (picada de abelha), remova raspando com uma superfície firme, como um cartão — não use pinça.",
          "Lave o local com água e sabão.",
          "Aplique uma compressa fria por 10 a 15 minutos para reduzir o inchaço.",
          "Observe a pessoa por 30 a 60 minutos: se surgir falta de ar, inchaço no rosto ou urticária generalizada, ligue 192 imediatamente."
        ],
        naoFaca: [
          "Não use pinça para retirar o ferrão — isso pode espremer mais veneno na pele.",
          "Não coce o local, para evitar infecção."
        ]
      },
      {
        id: "aranha",
        nome: "Aranha",
        imagem: "img/picadas-insetos-aracnideos.webp",
        sinais: [
          "Dor local intensa e progressiva",
          "Pode evoluir para uma lesão avermelhada ou escurecida horas depois",
          "Em alguns casos: dor abdominal, cãibras, sudorese"
        ],
        passos: [
          "Lave o local com água e sabão.",
          "Aplique uma compressa fria e mantenha o membro afetado elevado.",
          "Procure atendimento médico o quanto antes — existe soro específico para picadas de aranhas de maior risco.",
          "Se for seguro fazer sem se expor a um novo risco, uma foto da aranha (a distância) pode ajudar a equipe médica a identificar a espécie."
        ],
        naoFaca: [
          "Não faça torniquete.",
          "Não corte o local nem tente sugar o veneno."
        ]
      },
      {
        id: "escorpiao",
        nome: "Escorpião",
        imagem: "img/picadas-insetos-aracnideos.webp",
        sinais: [
          "Dor local intensa e imediata, com formigamento ao redor",
          "Em crianças pequenas: pode evoluir com vômito, sudorese intensa e agitação — sinal de gravidade"
        ],
        passos: [
          "Lave o local com água e sabão.",
          "Aplique uma compressa fria para aliviar a dor.",
          "Procure atendimento médico imediatamente — existe soro antiescorpiônico para casos moderados e graves.",
          "Em crianças pequenas, considere emergência médica mesmo sem sintomas graves aparentes no início."
        ],
        naoFaca: [
          "Não faça torniquete.",
          "Não aplique substâncias caseiras (pasta, álcool, querosene) no local."
        ]
      },
      {
        id: "cobra",
        nome: "Cobra",
        sinais: [
          "Marcas de presas, dor e inchaço progressivo no local",
          "Pode haver sangramento ao redor da picada",
          "Menos comum: sonolência, visão dupla ou dificuldade para manter os olhos abertos"
        ],
        passos: [
          "Mantenha a pessoa calma e o mais imóvel possível.",
          "Mantenha o membro picado abaixo do nível do coração.",
          "Retire anéis, pulseiras e roupas apertadas antes que a região inche.",
          "Lave o local delicadamente com água e sabão.",
          "Procure atendimento médico com urgência — existe soro antiofídico específico conforme o tipo de cobra.",
          "Se for seguro, sem se aproximar ou manusear o animal (vivo ou morto), uma foto à distância ajuda na identificação."
        ],
        naoFaca: [
          "Não faça torniquete.",
          "Não corte o local nem tente sugar o veneno.",
          "Não aplique gelo diretamente sobre a picada."
        ]
      },
      {
        id: "mordida-animal",
        nome: "Mordida de animais",
        imagem: "img/mordida-animal-ilustracao.webp",
        sinais: [
          "Ferimento com marcas de dentes, podendo haver sangramento",
          "Risco de infecção e de exposição à raiva"
        ],
        passos: [
          "Lave o ferimento com água e sabão em abundância por vários minutos.",
          "Estanque o sangramento pressionando com um pano limpo.",
          "Procure atendimento médico para avaliar a necessidade de vacina antirrábica e antitetânica.",
          "Informe se o animal é conhecido, doméstico e vacinado, ou se é desconhecido/selvagem."
        ],
        naoFaca: [
          "Não tente fechar ou costurar o ferimento em casa.",
          "Não ignore mordidas de animais desconhecidos, mesmo que pareçam superficiais — risco de raiva."
        ]
      }
    ]
  },
  // NOTA PARA REVISÃO CLÍNICA: este módulo é sobre primeiros socorros psicológicos
  // (crise de ansiedade/pânico), não uma condição física. Peça para a equipe de
  // Enfermagem revisar a técnica de respiração e a linguagem antes de publicar —
  // conteúdo baseado em orientações gerais de suporte em crise, não é diagnóstico.
  {
    id: "ansiedade",
    titulo: "Crise de ansiedade",
    cor: "#00ACC1",
    icone: "🧘",
    imagem: "img/ansiedade-ilustracao.webp",
    resumo: "Medo ou pânico intensos, com sintomas físicos, sem causa física aparente.",
    sinais: [
      "Respiração acelerada ou sensação de falta de ar",
      "Coração acelerado (palpitações), aperto ou dor leve no peito",
      "Tremores, suor frio, tontura ou formigamento nas mãos",
      "Medo intenso, sensação de perigo iminente ou de estar 'perdendo o controle'"
    ],
    passos: [
      "Fale em tom calmo e baixo. Apresente-se e pergunte o nome da pessoa.",
      "Leve-a para um local mais calmo e arejado, se possível, e afaste curiosos.",
      "Ajude a regular a respiração: inspire contando até 4, segure por 4, solte contando até 6 a 8 — respire junto com a pessoa para dar o ritmo.",
      "Use uma técnica de ancoragem: peça para a pessoa nomear em voz alta 5 coisas que vê, 4 que ouve e 3 que sente ao toque.",
      "Fique ao lado dela até a crise passar — costuma durar entre 10 e 30 minutos.",
      "Se for a primeira crise da pessoa, se ela tiver histórico de problema cardíaco, ou se a dor no peito e a falta de ar não melhorarem, procure atendimento médico (192) para descartar causas físicas."
    ],
    naoFaca: [
      "Não diga frases que minimizem o que ela sente, como 'é só nervoso, se acalma'.",
      "Não peça para respirar dentro de um saco de papel — é uma técnica antiga e pode ser perigosa.",
      "Não deixe a pessoa sozinha durante a crise.",
      "Não segure ou contenha a pessoa à força."
    ]
  },
  // NOTA PARA REVISÃO CLÍNICA: choque elétrico pode causar lesões internas e
  // arritmias sem sinal externo visível. Peça para a equipe de Enfermagem
  // confirmar a ordem dos passos (segurança da cena antes de qualquer contato)
  // antes de publicar.
  {
    id: "choque-eletrico",
    titulo: "Choque elétrico",
    cor: "#FFB300",
    icone: "⚡",
    imagem: "img/choque-eletrico-ilustracao.webp",
    resumo: "Contato do corpo com corrente elétrica. A segurança da cena vem antes de tudo.",
    sinais: [
      "Marcas de queimadura no ponto de entrada e saída da corrente",
      "Pode não haver marca visível, mesmo com lesão interna grave",
      "Parada cardiorrespiratória, arritmia, inconsciência",
      "Dor muscular, formigamento ou fraqueza"
    ],
    passos: [
      "Antes de tocar na vítima, verifique se ela ainda está em contato com a fonte de energia — se estiver, NÃO a toque.",
      "Se for seguro e rápido, desligue o disjuntor ou desconecte a fonte de energia.",
      "Se não for possível desligar a energia, afaste a vítima da fonte usando um objeto seco e não condutor (madeira, plástico, borracha) — nunca com as mãos ou objetos metálicos/molhados.",
      "Só depois de garantir que não há mais contato com a corrente, ligue 192 e verifique respiração e consciência.",
      "Se a pessoa não estiver respirando ou não responder, inicie a RCP.",
      "Cubra queimaduras visíveis com um pano limpo e seco, sem apertar, enquanto aguarda o socorro."
    ],
    naoFaca: [
      "Não toque na vítima enquanto ela estiver em contato com a fonte de energia.",
      "Não use objetos metálicos ou molhados para afastar a vítima da fonte.",
      "Não subestime um choque elétrico só porque não há queimadura visível — a pessoa deve ser avaliada em um hospital mesmo parecendo bem."
    ]
  },
  // NOTA PARA REVISÃO CLÍNICA: distinguir "objeto no olho" (pode ter remoção
  // simples) de "produto químico no olho" (lavagem prolongada, emergência) é
  // importante — peça para a equipe de Enfermagem confirmar os tempos de
  // lavagem e os critérios de quando NÃO tentar remover o objeto.
  {
    id: "trauma-ocular",
    titulo: "Trauma Ocular (Objeto ou Química nos Olhos)",
    cor: "#00897B",
    icone: "👁️",
    resumo: "Objeto ou produto químico atingindo o olho. Toque no tipo.",
    abasLabel: "Tipo de trauma",
    subcategorias: [
      {
        id: "objeto",
        nome: "Objeto no olho",
        imagem: "img/trauma-ocular-ilustracao.webp",
        sinais: [
          "Dor, vermelhidão e lacrimejamento excessivo",
          "Sensação de algo preso no olho",
          "Dificuldade para abrir o olho, sensibilidade à luz"
        ],
        passos: [
          "Lave bem as mãos antes de tocar perto do olho.",
          "Não deixe a pessoa esfregar o olho.",
          "Tente lavar o olho com água limpa ou soro fisiológico, direcionando o jato do canto interno para o externo.",
          "Se o objeto estiver visível na parte branca do olho e sair facilmente com a lavagem ou com a ponta de um pano limpo e úmido, sem tocar na parte colorida (córnea), pode tentar remover delicadamente.",
          "Se não sair com a lavagem, ou estiver cravado ou sobre a parte colorida do olho, cubra o olho sem pressionar e procure atendimento médico."
        ],
        naoFaca: [
          "Não tente remover objetos cravados ou que estejam sobre a córnea.",
          "Não esfregue o olho.",
          "Não use pinças ou objetos pontiagudos."
        ]
      },
      {
        id: "quimica",
        nome: "Produto químico no olho",
        imagem: "img/trauma-ocular-ilustracao.webp",
        sinais: [
          "Dor intensa e ardência",
          "Vermelhidão, visão embaçada, lacrimejamento intenso",
          "Espasmo das pálpebras (dificuldade de manter o olho aberto)"
        ],
        passos: [
          "Ligue 192 ou o Centro de Intoxicações (0800 722 6001) enquanto já começa a lavagem.",
          "Lave o olho imediatamente com água corrente limpa (ou soro fisiológico), em abundância, por pelo menos 15 a 20 minutos contínuos.",
          "Mantenha a pálpebra bem aberta durante a lavagem, direcionando a água do canto interno para o externo, para não contaminar o outro olho.",
          "Se a pessoa usar lentes de contato, remova-as assim que possível durante a lavagem.",
          "Depois de lavar, cubra o olho com um pano limpo, sem apertar, e leve a pessoa a um hospital — se possível, leve a embalagem do produto."
        ],
        naoFaca: [
          "Não interrompa a lavagem antes do tempo recomendado, mesmo que a dor melhore.",
          "Não tente neutralizar o produto químico com outra substância."
        ]
      }
    ]
  },
  {
    id: "calor",
    titulo: "Insolação e exaustão pelo calor",
    cor: "#F9A825",
    icone: "☀️",
    imagem: "img/insolacao-ilustracao.webp",
    videos: [{
      titulo: "Assistir vídeo explicativo",
      tituloCompleto: "Insolação: primeiros socorros",
      url: "https://youtube.com/shorts/-4ONfCNMqRY?is=NfGOOctsLD_3Kbp1"
    }],
    resumo: "Superaquecimento do corpo por exposição ao calor.",
    sinais: ["Pele muito quente e vermelha, ou fria e úmida", "Confusão mental, tontura, náusea"],
    passos: [
      "Leve a pessoa para um local fresco e ventilado imediatamente.",
      "Retire excesso de roupa.",
      "Resfrie a pele com panos úmidos ou ventilação, especialmente pescoço, axilas e virilha.",
      "Ofereça água aos poucos, se a pessoa estiver consciente e conseguir engolir.",
      "Chame ajuda se houver confusão mental, desmaio ou temperatura muito elevada."
    ],
    naoFaca: ["Não ofereça bebidas com álcool ou cafeína.", "Não force líquidos se a pessoa estiver confusa ou inconsciente."]
  },
  // NOTA PARA REVISÃO CLÍNICA: classificação de gravidade (leve/moderada/grave)
  // e as faixas de temperatura baseadas em tuasaude.com/hipotermia — é um site
  // de conteúdo de saúde, não uma fonte médica oficial/primária. Peça para a
  // equipe de Enfermagem confirmar as faixas de temperatura, a orientação de
  // manusear a vítima grave com o mínimo de movimento possível (risco de
  // arritmia), e o método canguru descrito na aba Bebê, antes de publicar.
  {
    id: "hipotermia",
    titulo: "Hipotermia por exposição ao frio",
    cor: "#3F51B5",
    icone: "❄️",
    resumo: "Temperatura corporal abaixo de 35°C por exposição ao frio. Toque na faixa.",
    abasLabel: "Gravidade / idade",
    subcategorias: [
      {
        id: "bebe",
        nome: "Bebê (até 1 ano)",
        imagem: "img/hipotermia-bebe.webp",
        sinais: [
          "Pele fria ao toque, podendo parecer vermelha e brilhante",
          "Bebê muito quieto, com pouca energia",
          "Reage menos que o normal a estímulos",
          "Recusa mamar ou comer"
        ],
        passos: [
          "Leve o bebê para um ambiente aquecido imediatamente e ligue 192 — bebês perdem calor muito mais rápido que adultos e o quadro pode evoluir rápido.",
          "Retire roupas ou fraldas molhadas e substitua por roupas secas.",
          "Aqueça o bebê em contato pele a pele com um adulto, cobrindo os dois com um cobertor (método canguru), e cubra a cabeça dele com um gorro.",
          "Continue observando a respiração do bebê enquanto aguarda o socorro."
        ],
        naoFaca: [
          "Não ofereça bebidas ou alimentos ao bebê tentando aquecê-lo.",
          "Não use bolsa de água quente, secador ou outra fonte de calor direta na pele — a pele do bebê é sensível e pode queimar.",
          "Não demore para chamar ajuda — em bebês, a hipotermia pode evoluir rapidamente."
        ]
      },
      {
        id: "leve",
        nome: "Leve (33°C–35°C)",
        imagem: "img/hipotermia-guia-pratico.webp",
        sinais: [
          "Temperatura corporal aproximada: 33°C a 35°C",
          "Tremores",
          "Mãos e pés frios",
          "Dormência nos braços e pernas",
          "Perda de destreza (dificuldade com movimentos finos)",
          "Cansaço"
        ],
        passos: [
          "Leve a pessoa para um ambiente aquecido e abrigado do vento.",
          "Retire roupas molhadas e substitua por roupas secas.",
          "Cubra com cobertores e agasalhos, priorizando tronco, pescoço e cabeça.",
          "Se a pessoa estiver bem alerta e conseguir engolir sem dificuldade, ofereça bebidas mornas e açucaradas.",
          "Mesmo em casos leves, procure atendimento médico assim que possível."
        ],
        naoFaca: [
          "Não ofereça bebidas alcoólicas — elas aumentam a perda de calor do corpo.",
          "Não aqueça a pessoa de forma brusca (água muito quente, fogo direto) — o aquecimento deve ser gradual."
        ]
      },
      {
        id: "moderada",
        nome: "Moderada (30°C–33°C)",
        imagem: "img/hipotermia-guia-pratico.webp",
        sinais: [
          "Temperatura corporal aproximada: 30°C a 33°C",
          "Tremores violentos e incontroláveis",
          "Fala lenta e arrastada",
          "Respiração mais lenta e fraca, pulso fraco",
          "Dificuldade para controlar os movimentos do corpo",
          "Desatenção, perda de memória ou sonolência"
        ],
        passos: [
          "Ligue 192 imediatamente.",
          "Leve a pessoa para um ambiente aquecido, retire roupas molhadas e cubra com cobertores secos.",
          "Movimente a pessoa com cuidado e o mínimo possível — nessa fase, movimentos bruscos podem provocar arritmia cardíaca.",
          "Priorize aquecer o tronco antes das extremidades."
        ],
        naoFaca: [
          "Não ofereça bebidas ou alimentos se a pessoa estiver sonolenta ou confusa — risco de engasgo.",
          "Não movimente a pessoa bruscamente.",
          "Não massageie ou esfregue as extremidades com força."
        ]
      },
      {
        id: "grave",
        nome: "Grave (abaixo de 30°C)",
        imagem: "img/hipotermia-guia-pratico.webp",
        sinais: [
          "Temperatura corporal aproximada: abaixo de 30°C",
          "Perda de controle dos braços e pernas",
          "Perda dos sentidos / consciência",
          "Respiração superficial, podendo chegar a parar",
          "Pulso irregular ou muito difícil de perceber",
          "Pupilas dilatadas"
        ],
        passos: [
          "Ligue 192 imediatamente — é uma emergência.",
          "Manuseie a pessoa com o mínimo de movimento possível — movimentos bruscos podem provocar arritmia grave e parada cardíaca nessa fase.",
          "Retire-a do frio e do vento, isolando-a do chão frio; retire roupas molhadas e cubra com cobertores secos, sem tentar reaquecer bruscamente.",
          "Verifique respiração e pulso com calma — em hipotermia grave eles podem estar muito fracos e lentos, então confira por mais tempo que o normal antes de concluir que a pessoa está em parada.",
          "Se realmente não houver respiração nem pulso, inicie a RCP e continue até a chegada do socorro."
        ],
        naoFaca: [
          "Não movimente a pessoa bruscamente.",
          "Não ofereça nada por via oral.",
          "Não considere a pessoa sem chances só porque os sinais vitais parecem muito fracos ou ausentes — confirme com calma; em hipotermia grave o socorro médico ainda pode reanimar."
        ]
      }
    ]
  }
];
