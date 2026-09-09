// Banco de perguntas do "Teste seus conhecimentos" (Referências).
// Cada pergunta é baseada diretamente no conteúdo já existente nos módulos
// do app (sinais / passos / o que não fazer) — não foi extraída de nenhuma
// fonte externa nova.
//
// NOTA PARA REVISÃO CLÍNICA: como todo o conteúdo dos módulos, vale a pena
// a Samille revisar o enunciado e a explicação de cada pergunta antes da
// apresentação, para garantir que a forma como foi resumida continua clara
// e clinicamente precisa.
//
// Cada tentativa do quiz sorteia um subconjunto aleatório destas perguntas
// (ver QUIZ_QTD_PERGUNTAS em app.js).

const QUIZ_PERGUNTAS = [
  {
    modulo: "engasgo",
    pergunta: "Um bebê está engasgando e não consegue tossir. Qual é o primeiro passo indicado no app?",
    opcoes: [
      "Fazer a manobra de Heimlich (compressão abdominal)",
      "Apoiar o bebê de bruços no antebraço e aplicar até 5 palmadas firmes entre as escápulas",
      "Sacudir o bebê de cabeça para baixo",
      "Colocar o dedo na boca do bebê para tentar tirar o objeto"
    ],
    correta: 1,
    explicacao: "Em bebês, a manobra de Heimlich não deve ser feita. O indicado é apoiar o bebê de bruços sobre o antebraço, com a cabeça mais baixa que o tronco, e aplicar até 5 palmadas firmes entre as escápulas."
  },
  {
    modulo: "engasgo",
    pergunta: "Depois que o objeto sai e o bebê volta a respirar normalmente, o que o app recomenda?",
    opcoes: [
      "Não é mais necessário fazer nada",
      "Levar o bebê imediatamente a um pronto-socorro para avaliação",
      "Esperar 24 horas para ver se aparece algum sintoma",
      "Dar água para o bebê beber"
    ],
    correta: 1,
    explicacao: "Mesmo após o objeto sair, o bebê deve ser levado a um pronto-socorro para avaliação médica."
  },
  {
    modulo: "hemorragia-nasal",
    pergunta: "Durante um sangramento nasal, para qual lado a cabeça da pessoa deve ser inclinada?",
    opcoes: [
      "Para trás",
      "Para a frente",
      "Para o lado direito sempre",
      "Não deve inclinar, deve deitar totalmente"
    ],
    correta: 1,
    explicacao: "A cabeça deve ser inclinada para a FRENTE, nunca para trás — inclinar para trás pode fazer o sangue escorrer pela garganta e causar engasgo ou vômito."
  },
  {
    modulo: "hemorragia-nasal",
    pergunta: "Por quanto tempo, aproximadamente, deve-se manter a pressão contínua nas narinas?",
    opcoes: [
      "2 a 3 minutos",
      "10 a 15 minutos",
      "1 hora",
      "Não é necessário pressionar"
    ],
    correta: 1,
    explicacao: "A pressão deve ser mantida continuamente por 10 a 15 minutos, sem soltar para checar."
  },
  {
    modulo: "afogamento",
    pergunta: "Uma pessoa está se afogando, sem gritar, com a cabeça baixa na água. Qual a atitude mais segura?",
    opcoes: [
      "Pular na água imediatamente para resgatar, mesmo sem saber nadar bem",
      "Ligar para o 192 e tentar retirar a pessoa com uma boia, corda ou objeto flutuante",
      "Esperar a pessoa gritar por socorro antes de agir",
      "Pressionar o abdômen da vítima para tirar a água"
    ],
    correta: 1,
    explicacao: "O afogamento costuma ser silencioso. O correto é ligar para o 192 e usar um flutuador, corda ou objeto — só entrar na água se for treinado e seguro para isso."
  },
  {
    modulo: "afogamento",
    pergunta: "Por que é desaconselhado entrar na água sem flutuador e sem treinamento para resgatar alguém?",
    opcoes: [
      "Porque a água pode estar muito fria",
      "Porque afogamentos duplos são comuns — o socorrista também pode se afogar",
      "Porque é proibido por lei em qualquer situação",
      "Não há problema em fazer isso"
    ],
    correta: 1,
    explicacao: "Afogamentos duplos são comuns quando alguém sem treinamento entra na água para socorrer sem flutuador."
  },
  {
    modulo: "sangramento",
    pergunta: "Qual é a forma correta de conter um sangramento intenso?",
    opcoes: [
      "Fazer um torniquete improvisado imediatamente",
      "Pressionar o ferimento com um pano limpo ou gaze, com firmeza e continuamente",
      "Deixar o sangramento seguir seu curso",
      "Lavar o ferimento com álcool antes de pressionar"
    ],
    correta: 1,
    explicacao: "A recomendação é pressionar o ferimento com um pano limpo ou gaze, com firmeza e de forma contínua."
  },
  {
    modulo: "sangramento",
    pergunta: "Quando um torniquete improvisado deve ser usado, segundo o app?",
    opcoes: [
      "Sempre que houver qualquer sangramento",
      "Apenas por quem tem treinamento — pode causar mais dano se malfeito",
      "Nunca, em nenhuma hipótese",
      "Somente em crianças"
    ],
    correta: 1,
    explicacao: "O app recomenda não fazer torniquete improvisado a menos que a pessoa tenha treinamento, pois pode causar mais dano."
  },
  {
    modulo: "queimaduras",
    pergunta: "Por quanto tempo, aproximadamente, deve-se resfriar uma queimadura leve com água corrente?",
    opcoes: [
      "1 a 2 minutos",
      "10 a 20 minutos",
      "1 hora",
      "Não deve resfriar com água"
    ],
    correta: 1,
    explicacao: "A área deve ser resfriada com água corrente em temperatura ambiente por 10 a 20 minutos."
  },
  {
    modulo: "queimaduras",
    pergunta: "O que NÃO se deve passar em uma queimadura?",
    opcoes: [
      "Água corrente",
      "Gelo, pasta de dente, manteiga ou clara de ovo",
      "Nada, a pele deve ficar exposta",
      "Um pano limpo e seco depois de resfriar"
    ],
    correta: 1,
    explicacao: "Gelo, pasta de dente, manteiga e clara de ovo podem piorar a lesão e não devem ser usados."
  },
  {
    modulo: "desmaio",
    pergunta: "Uma pessoa desmaiou. Qual é o procedimento indicado?",
    opcoes: [
      "Sentar a pessoa e dar água imediatamente",
      "Deitar a pessoa e elevar as pernas cerca de 30 cm",
      "Deixar a pessoa em pé até ela melhorar",
      "Oferecer comida assim que ela abrir os olhos"
    ],
    correta: 1,
    explicacao: "O indicado é deitar a pessoa e elevar as pernas cerca de 30 cm, além de afrouxar roupas apertadas e garantir ventilação."
  },
  {
    modulo: "desmaio",
    pergunta: "Por que não se deve oferecer água ou comida a uma pessoa desacordada após um desmaio?",
    opcoes: [
      "Porque não há motivo, pode oferecer sem problema",
      "Porque ela pode engasgar, já que não está consciente para engolir com segurança",
      "Porque água piora a tontura",
      "Porque é proibido por lei"
    ],
    correta: 1,
    explicacao: "Uma pessoa desacordada não deve receber água ou comida, pelo risco de engasgo."
  },
  {
    modulo: "rcp",
    pergunta: "Qual é a frequência aproximada de compressões torácicas recomendada na RCP?",
    opcoes: [
      "40 a 60 por minuto",
      "100 a 120 por minuto",
      "200 a 220 por minuto",
      "Não importa a frequência"
    ],
    correta: 1,
    explicacao: "A frequência recomendada é de cerca de 100 a 120 compressões por minuto — por isso o app tem um metrônomo com esse ritmo."
  },
  {
    modulo: "rcp",
    pergunta: "Ao atender alguém que não responde e não respira normalmente, qual é o primeiro passo?",
    opcoes: [
      "Começar as compressões sem chamar ajuda",
      "Chamar ajuda imediatamente (192) e pedir um DEA, se houver por perto",
      "Esperar a pessoa acordar sozinha",
      "Dar água para a pessoa"
    ],
    correta: 1,
    explicacao: "O primeiro passo é chamar ajuda imediatamente (192) e pedir um DEA, se houver por perto, antes de iniciar as compressões."
  },
  {
    modulo: "fraturas",
    pergunta: "Diante de uma suspeita de fratura, o que se deve fazer?",
    opcoes: [
      "Tentar recolocar o osso no lugar",
      "Imobilizar a área com uma tala improvisada, sem apertar, e não movimentar o local",
      "Forçar a pessoa a andar para ver se dói",
      "Massagear a região para aliviar a dor"
    ],
    correta: 1,
    explicacao: "O correto é não movimentar a área e imobilizá-la com uma tala improvisada e tecido, sem apertar."
  },
  {
    modulo: "fraturas",
    pergunta: "Como aplicar uma compressa fria em uma suspeita de fratura?",
    opcoes: [
      "Direto na pele, sem nada entre a compressa e o local",
      "Envolta em um pano, nunca direto na pele",
      "Não se deve usar compressa fria em fraturas",
      "Só depois de 24 horas"
    ],
    correta: 1,
    explicacao: "A compressa fria deve ser aplicada envolta em pano, nunca diretamente na pele."
  },
  {
    modulo: "convulsao",
    pergunta: "Durante uma crise convulsiva, o que se deve fazer?",
    opcoes: [
      "Colocar uma colher ou objeto na boca da pessoa",
      "Afastar objetos que possam machucar a pessoa e proteger a cabeça com algo macio",
      "Segurar os braços e pernas da pessoa com força para ela parar de se mexer",
      "Jogar água fria na pessoa"
    ],
    correta: 1,
    explicacao: "O correto é afastar objetos perigosos e proteger a cabeça da pessoa com algo macio, sem conter os movimentos à força."
  },
  {
    modulo: "convulsao",
    pergunta: "Assim que possível durante ou após a convulsão, em qual posição a pessoa deve ficar?",
    opcoes: [
      "De bruços",
      "De lado, para evitar engasgo",
      "Sentada",
      "Não importa a posição"
    ],
    correta: 1,
    explicacao: "A pessoa deve ser virada de lado assim que possível, para evitar engasgo."
  },
  {
    modulo: "intoxicacao",
    pergunta: "Alguém pode ter ingerido uma substância tóxica. Qual é a orientação do app sobre induzir o vômito?",
    opcoes: [
      "Sempre induzir o vômito imediatamente",
      "Não induzir o vômito, a menos que orientado por um profissional",
      "Dar leite para induzir o vômito",
      "Fazer cócegas na garganta"
    ],
    correta: 1,
    explicacao: "O app orienta não induzir o vômito, a menos que um profissional oriente."
  },
  {
    modulo: "intoxicacao",
    pergunta: "Para qual número o app recomenda ligar em caso de intoxicação, além do 192?",
    opcoes: [
      "Não há outro número",
      "Centro de Intoxicações (0800 722 6001)",
      "Delegacia de polícia",
      "Corpo de bombeiros apenas"
    ],
    correta: 1,
    explicacao: "Além do 192, o app indica ligar para o Centro de Intoxicações pelo 0800 722 6001."
  },
  {
    modulo: "picadas",
    pergunta: "Como remover o ferrão de uma picada de abelha, segundo o app?",
    opcoes: [
      "Com uma pinça, puxando com cuidado",
      "Raspando com uma superfície firme, como um cartão",
      "Apertando a pele ao redor com os dedos",
      "Não deve ser removido"
    ],
    correta: 1,
    explicacao: "O ferrão deve ser removido raspando com uma superfície firme, como um cartão — a pinça pode espremer mais veneno na pele."
  },
  {
    modulo: "picadas",
    pergunta: "Quais sinais indicam uma alergia grave a uma picada, exigindo atenção redobrada?",
    opcoes: [
      "Só uma leve coceira no local",
      "Inchaço no rosto/lábios, falta de ar e urticária pelo corpo",
      "Cor da pele normal",
      "Nenhum sintoma além da dor local"
    ],
    correta: 1,
    explicacao: "Inchaço no rosto ou lábios, falta de ar e urticária pelo corpo são sinais de alergia grave."
  },
  {
    modulo: "ansiedade",
    pergunta: "Durante uma crise de ansiedade, qual técnica de respiração o app sugere para ajudar a pessoa?",
    opcoes: [
      "Respirar dentro de um saco de papel",
      "Inspirar contando até 4, segurar por 4, soltar contando até 6 a 8",
      "Prender a respiração o máximo possível",
      "Respirar bem rápido para 'gastar' a ansiedade"
    ],
    correta: 1,
    explicacao: "O app sugere ajudar a regular a respiração contando: inspirar até 4, segurar por 4, soltar contando até 6 a 8, respirando junto com a pessoa."
  },
  {
    modulo: "ansiedade",
    pergunta: "O que NÃO se deve fazer durante uma crise de ansiedade?",
    opcoes: [
      "Falar em tom calmo e se apresentar",
      "Segurar ou conter a pessoa à força",
      "Levá-la para um local mais calmo",
      "Ajudar a regular a respiração"
    ],
    correta: 1,
    explicacao: "Não se deve segurar ou conter a pessoa à força, nem dizer frases que minimizem o que ela sente, nem deixá-la sozinha."
  },
  {
    modulo: "choque-eletrico",
    pergunta: "Uma pessoa está sofrendo um choque elétrico e ainda está em contato com a fonte de energia. O que fazer primeiro?",
    opcoes: [
      "Tocar na pessoa e puxá-la imediatamente",
      "NÃO tocar na pessoa enquanto ela estiver em contato com a fonte de energia",
      "Jogar água na pessoa",
      "Segurar a mão da pessoa com uma luva de cozinha"
    ],
    correta: 1,
    explicacao: "Nunca se deve tocar na vítima enquanto ela ainda estiver em contato com a fonte de energia."
  },
  {
    modulo: "choque-eletrico",
    pergunta: "Se for necessário afastar a vítima da fonte de energia sem desligar o disjuntor, qual material deve ser usado?",
    opcoes: [
      "Um objeto metálico",
      "Um objeto seco e não condutor, como madeira, plástico ou borracha",
      "As próprias mãos, com força",
      "Um pano molhado"
    ],
    correta: 1,
    explicacao: "Deve-se usar um objeto seco e não condutor (madeira, plástico, borracha) — nunca as mãos ou objetos metálicos/molhados."
  },
  {
    modulo: "trauma-ocular",
    pergunta: "Como lavar o olho de alguém com um objeto ou química nos olhos?",
    opcoes: [
      "Direcionando o jato de água do canto externo para o interno",
      "Direcionando o jato de água do canto interno para o externo",
      "Esfregando o olho com um pano",
      "Não deve lavar o olho em hipótese alguma"
    ],
    correta: 1,
    explicacao: "A lavagem deve direcionar o jato de água (ou soro fisiológico) do canto interno para o externo do olho."
  },
  {
    modulo: "trauma-ocular",
    pergunta: "O que o app orienta a NÃO fazer diante de um objeto cravado no olho?",
    opcoes: [
      "Levar a pessoa ao hospital",
      "Tentar remover objetos cravados ou que estejam sobre a córnea",
      "Evitar que a pessoa esfregue o olho",
      "Lavar as mãos antes de tocar perto do olho"
    ],
    correta: 1,
    explicacao: "Não se deve tentar remover objetos cravados ou que estejam sobre a córnea — isso deve ser feito por um profissional."
  },
  {
    modulo: "calor",
    pergunta: "Uma pessoa está com sinais de insolação. O que NÃO se deve oferecer a ela?",
    opcoes: [
      "Água em pequenos goles, se estiver consciente",
      "Bebidas com álcool ou cafeína",
      "Ventilação e panos úmidos",
      "Um local fresco para descansar"
    ],
    correta: 1,
    explicacao: "Não se deve oferecer bebidas com álcool ou cafeína, e não se deve forçar líquidos se a pessoa estiver confusa ou inconsciente."
  },
  {
    modulo: "calor",
    pergunta: "Onde é mais eficaz resfriar a pele de alguém com insolação?",
    opcoes: [
      "Somente na testa",
      "Pescoço, axilas e virilha",
      "Não é necessário resfriar a pele",
      "Somente nas mãos"
    ],
    correta: 1,
    explicacao: "O app recomenda resfriar a pele com panos úmidos ou ventilação, especialmente no pescoço, axilas e virilha."
  },
  {
    modulo: "hipotermia",
    pergunta: "Um bebê está com hipotermia (pele fria, pouca energia, recusa mamar). Qual é o passo mais urgente?",
    opcoes: [
      "Esperar para ver se ele melhora sozinho",
      "Levá-lo para um ambiente aquecido imediatamente e ligar 192",
      "Dar um banho de água fria",
      "Oferecer bastante líquido gelado"
    ],
    correta: 1,
    explicacao: "Bebês perdem calor muito mais rápido que adultos, então o primeiro passo é levá-lo para um ambiente aquecido e ligar 192 imediatamente."
  },
  {
    modulo: "hipotermia",
    pergunta: "Por que não se deve usar bolsa de água quente ou secador de cabelo diretamente na pele de um bebê com hipotermia?",
    opcoes: [
      "Porque não faz efeito nenhum",
      "Porque a pele do bebê é sensível e pode queimar",
      "Porque é muito caro",
      "Pode e deve ser usado sem problema"
    ],
    correta: 1,
    explicacao: "A pele do bebê é sensível e pode queimar com fontes de calor diretas — o método recomendado é o contato pele a pele (método canguru)."
  }
];
