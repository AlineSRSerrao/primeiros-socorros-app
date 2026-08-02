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
        tituloCompleto: "Parada cardiorrespiratória: RCP em adultos",
        url: "https://www.youtube.com/watch?v=DeltcXuIkl0"
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
  }
];
