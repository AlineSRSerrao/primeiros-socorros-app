function escurecerCor(hex, percentual) {
  const h = hex.replace("#", "");
  const num = parseInt(h, 16);
  let r = (num >> 16) & 255;
  let g = (num >> 8) & 255;
  let b = num & 255;
  r = Math.max(0, Math.min(255, Math.round(r * (1 + percentual / 100))));
  g = Math.max(0, Math.min(255, Math.round(g * (1 + percentual / 100))));
  b = Math.max(0, Math.min(255, Math.round(b * (1 + percentual / 100))));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function gradienteModulo(cor) {
  return `linear-gradient(135deg, ${escurecerCor(cor, 18)} 0%, ${cor} 55%, ${escurecerCor(cor, -22)} 100%)`;
}

const app = document.getElementById("app");
const buscaInput = document.getElementById("busca");
const toast = document.getElementById("toast");

// ---------- Busca contextual: filtra na Início, destaca (estilo Ctrl+F) nas demais páginas ----------
let contextoBusca = "inicio";

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function limparDestaques() {
  document.querySelectorAll("#app mark.busca-destaque").forEach((mark) => {
    const parent = mark.parentNode;
    if (!parent) return;
    parent.replaceChild(document.createTextNode(mark.textContent), mark);
    parent.normalize();
  });
}

function destacarNaPagina(termo) {
  limparDestaques();
  const termoLimpo = termo.trim();
  if (!termoLimpo) return;

  const container = document.getElementById("app");
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  const alvos = [];
  const testeRe = new RegExp(escapeRegExp(termoLimpo), "i");
  let node;
  while ((node = walker.nextNode())) {
    if (testeRe.test(node.textContent)) alvos.push(node);
  }

  let primeiro = null;
  alvos.forEach((node) => {
    const texto = node.textContent;
    const re = new RegExp(escapeRegExp(termoLimpo), "gi");
    const frag = document.createDocumentFragment();
    let lastIndex = 0;
    let match;
    while ((match = re.exec(texto)) !== null) {
      if (match.index > lastIndex) frag.appendChild(document.createTextNode(texto.slice(lastIndex, match.index)));
      const mark = document.createElement("mark");
      mark.className = "busca-destaque";
      mark.textContent = match[0];
      frag.appendChild(mark);
      if (!primeiro) primeiro = mark;
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < texto.length) frag.appendChild(document.createTextNode(texto.slice(lastIndex)));
    node.parentNode.replaceChild(frag, node);
  });

  if (primeiro) {
    const painel = primeiro.closest(".accordion-panel");
    if (painel && painel.hidden) {
      painel.hidden = false;
      const header = painel.previousElementSibling;
      if (header && header.classList.contains("accordion-header")) {
        header.setAttribute("aria-expanded", "true");
        header.classList.add("aberto");
      }
    }
    primeiro.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function atualizarContextoBusca(contexto) {
  if (contextoBusca === contexto) return;
  contextoBusca = contexto;
  buscaInput.value = "";
  limparDestaques();
  buscaInput.placeholder = contexto === "inicio"
    ? "Buscar situação (ex: queimadura, engasgo)..."
    : "Buscar nesta página...";
}

function mostrarToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

// ---------- Accordion reutilizável (usado para imagem e vídeo) ----------
let accordionSeq = 0;
function blocoAccordion({ titulo, icone, conteudoHtml }) {
  const id = `acc-${accordionSeq++}`;
  return `
    <div class="accordion">
      <button class="accordion-header" aria-expanded="false" aria-controls="${id}">
        <span class="accordion-titulo"><span class="accordion-icone">${icone}</span>${titulo}</span>
        <span class="accordion-chevron" aria-hidden="true">▾</span>
      </button>
      <div class="accordion-panel" id="${id}" hidden>
        <div class="accordion-panel-inner">${conteudoHtml}</div>
      </div>
    </div>
  `;
}

function ativarAccordions(escopo) {
  escopo.querySelectorAll(".accordion-header").forEach((btn) => {
    btn.addEventListener("click", () => {
      const painel = document.getElementById(btn.getAttribute("aria-controls"));
      const aberto = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!aberto));
      painel.hidden = aberto;
      btn.classList.toggle("aberto", !aberto);
    });
  });
}

function blocoLinkExterno(link) {
  return `
    <a class="link-externo" href="${link.url}" target="_blank" rel="noopener noreferrer">
      <span class="link-externo-icone" aria-hidden="true">🔗</span>
      <span>${link.texto}</span>
      <span class="link-externo-seta" aria-hidden="true">↗</span>
    </a>
  `;
}

function ytEmbedUrl(url) {
  const m = url.match(/(?:youtu\.be\/|shorts\/|watch\?v=|embed\/)([a-zA-Z0-9_-]{11})/);
  const id = m ? m[1] : "";
  return `https://www.youtube.com/embed/${id}`;
}

function blocoAccordionVideo({ titulo, tituloCompleto, url }) {
  return blocoAccordion({
    titulo,
    icone: "▶️",
    conteudoHtml: `
      <div class="video-embed">
        <iframe width="560" height="315" src="${ytEmbedUrl(url)}" title="${tituloCompleto || titulo}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                loading="lazy" allowfullscreen></iframe>
      </div>
    `
  });
}

function blocoSecaoVideos(videos, titulo = "Assista à demonstração") {
  return `
    <div class="secao-videos">
      <h3 class="secao-videos-titulo">${titulo}</h3>
      ${videos.map(blocoAccordionVideo).join("")}
    </div>
  `;
}

function blocoConteudo(dados) {
  const acordeoes = [];

  acordeoes.push(blocoAccordion({
    titulo: "Ver ilustração",
    icone: "🖼️",
    conteudoHtml: dados.imagem
      ? `<img class="img-ampliavel" src="${dados.imagem}" alt="Ilustração do procedimento: ${dados.nome || dados.titulo || ""}" loading="lazy" style="cursor:zoom-in;${dados.imagemLargura ? ` width:${dados.imagemLargura}; margin:0 auto;` : ""}" />`
      : `<p class="em-breve">Em breve adicionaremos uma ilustração para este tópico. Estamos atualizando o conteúdo — volte em breve!</p>`
  }));

  if (dados.videos && dados.videos.length) {
    dados.videos.forEach((v) => acordeoes.push(blocoAccordionVideo(v)));
  } else {
    // Vídeo ainda não definido — aviso reutilizável em todas as páginas.
    acordeoes.push(blocoAccordion({
      titulo: "Assistir vídeo explicativo",
      icone: "▶️",
      conteudoHtml: `<p class="em-breve">Em breve adicionaremos um vídeo explicativo para este tópico. Estamos atualizando o conteúdo — volte em breve!</p>`
    }));
  }

  return `
    <div class="bloco">
      <h3>Como identificar</h3>
      <ul>${dados.sinais.map((s) => `<li>${s}</li>`).join("")}</ul>
    </div>

    <div class="bloco passos">
      <h3>O que fazer</h3>
      <ol>${dados.passos.map((p) => `<li>${p}</li>`).join("")}</ol>
    </div>

    ${dados.naoFaca && dados.naoFaca.length ? `
    <div class="bloco alerta">
      <h3>Atenção — o que NÃO fazer</h3>
      <ul>${dados.naoFaca.map((n) => `<li>${n}</li>`).join("")}</ul>
    </div>` : ""}

    ${acordeoes.join("")}

    ${dados.linksExternos ? dados.linksExternos.map(blocoLinkExterno).join("") : dados.linkExterno ? blocoLinkExterno(dados.linkExterno) : ""}
  `;
}

// ---------- Tela inicial ----------
function renderLista(filtro = "") {
  atualizarContextoBusca("inicio");
  const termo = filtro.trim().toLowerCase();
  const lista = MODULOS.filter((m) =>
    !termo || m.titulo.toLowerCase().includes(termo) || m.resumo.toLowerCase().includes(termo)
  );

  app.innerHTML = `
    <div class="pergunta-emergencia">
      <h1>Qual a sua emergência?</h1>
      <p>Selecione uma das opções abaixo.</p>
    </div>
    <div class="grid-modulos" id="grid"></div>
    <div class="disclaimer">
      Este aplicativo é um material educativo produzido por estudantes do Ensino Médio
      Técnico (Enfermagem e Informática) no âmbito do Projeto Jovens Talentos – FAPERJ.
      Não substitui atendimento médico profissional. Em qualquer emergência real,
      ligue 192 (SAMU) ou 193 (Bombeiros).
    </div>
  `;

  const grid = document.getElementById("grid");
  if (lista.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1;color:var(--muted);font-size:0.9rem;">Nenhum módulo encontrado para "${filtro}".</p>`;
    return;
  }

  lista.forEach((m) => {
    const card = document.createElement("button");
    card.className = "card-modulo";
    card.setAttribute("aria-label", `Abrir módulo: ${m.titulo}`);
    card.innerHTML = `
      <div class="card-icone" style="background:${m.cor}22;">${m.icone}</div>
      <div class="card-titulo">${m.titulo}</div>
      <div class="card-resumo">${m.resumo}</div>
    `;
    card.addEventListener("click", () => {
      history.pushState({ modulo: m.id }, "", `#${m.id}`);
      irComTransicao(() => renderModulo(m.id));
    });
    grid.appendChild(card);
  });
}

// ---------- Acessibilidade: leitura em voz alta dos passos ----------
const VELOCIDADES_FALA = [
  { id: "lenta", label: "Lenta", rate: 0.75 },
  { id: "normal", label: "Normal", rate: 1.0 },
  { id: "rapida", label: "Rápida", rate: 1.5 }
];
let velocidadeFala = 1.0;
let textoFalaAtual = null;
let utteranceAtual = null;

function textoParaFala(titulo, dados) {
  const partes = [`${titulo}.`];
  if (dados.sinais && dados.sinais.length) {
    partes.push(`Como identificar: ${dados.sinais.join(". ")}.`);
  }
  if (dados.passos && dados.passos.length) {
    partes.push(`O que fazer: ${dados.passos.map((p, i) => `Passo ${i + 1}: ${p}`).join(" ")}`);
  }
  if (dados.naoFaca && dados.naoFaca.length) {
    partes.push(`Atenção, o que não fazer: ${dados.naoFaca.join(". ")}.`);
  }
  return partes.join(" ");
}

function pararLeitura() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  textoFalaAtual = null;
  utteranceAtual = null;
  document.querySelectorAll(".tts-btn.ativo").forEach((b) => {
    b.classList.remove("ativo");
    b.textContent = "🔊 Ativar leitura por voz";
  });
}

function falar(texto, btn) {
  const utter = new SpeechSynthesisUtterance(texto);
  utter.lang = "pt-BR";
  utter.rate = velocidadeFala;
  // Guarda contra o evento assíncrono de uma fala anterior (cancelada ao trocar
  // de velocidade) interromper esta nova fala que já está em andamento.
  utter.onend = () => { if (utter === utteranceAtual) pararLeitura(); };
  utter.onerror = () => { if (utter === utteranceAtual) pararLeitura(); };
  utteranceAtual = utter;
  btn.classList.add("ativo");
  btn.textContent = "⏹️ Parar leitura";
  window.speechSynthesis.speak(utter);
}

function alternarLeitura(texto, btn) {
  if (!("speechSynthesis" in window)) {
    mostrarToast("Seu navegador não tem suporte a leitura em voz alta.");
    return;
  }
  if (window.speechSynthesis.speaking) {
    pararLeitura();
    return;
  }
  pararMetronomo();
  textoFalaAtual = texto;
  falar(texto, btn);
}

function blocoBotaoLeitura() {
  return `
    <button class="tts-btn" id="tts-btn" type="button">🔊 Ativar leitura por voz</button>
    <div class="velocidade-fala" role="group" aria-label="Velocidade da leitura">
      <span class="velocidade-label">Velocidade:</span>
      ${VELOCIDADES_FALA.map((v) => `
        <button class="chip-velocidade ${v.rate === velocidadeFala ? "ativo" : ""}"
                type="button" data-vel="${v.rate}">${v.label}</button>
      `).join("")}
    </div>
  `;
}

function ativarLeitura(escopo, titulo, dados) {
  const btn = escopo.querySelector("#tts-btn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    alternarLeitura(textoParaFala(titulo, dados), btn);
  });

  escopo.querySelectorAll(".chip-velocidade").forEach((chip) => {
    chip.addEventListener("click", () => {
      velocidadeFala = parseFloat(chip.dataset.vel);
      escopo.querySelectorAll(".chip-velocidade").forEach((c) => c.classList.remove("ativo"));
      chip.classList.add("ativo");
      // Se já está lendo, reinicia na nova velocidade sem precisar parar manualmente.
      if (textoFalaAtual && window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        falar(textoFalaAtual, btn);
      }
    });
  });
}

// ---------- Metrônomo de RCP (100-120 compressões por minuto) ----------
const METRONOMO_BPM = 110;
let metronomoInterval = null;
let metronomoAudioCtx = null;

function tocarBipMetronomo() {
  if (!metronomoAudioCtx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    metronomoAudioCtx = new AudioCtx();
  }
  const ctx = metronomoAudioCtx;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.frequency.value = 880;
  osc.connect(gain);
  gain.connect(ctx.destination);
  gain.gain.setValueAtTime(0.0001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.09);
  osc.start();
  osc.stop(ctx.currentTime + 0.1);
}

function pulsarMetronomo() {
  const pulso = document.getElementById("metronomo-pulso");
  if (!pulso) return;
  pulso.classList.add("pulsando");
  setTimeout(() => pulso.classList.remove("pulsando"), 120);
}

function iniciarMetronomo() {
  pararLeitura();
  const btn = document.getElementById("metronomo-btn");
  tocarBipMetronomo();
  pulsarMetronomo();
  metronomoInterval = setInterval(() => {
    tocarBipMetronomo();
    pulsarMetronomo();
  }, 60000 / METRONOMO_BPM);
  if (btn) {
    btn.textContent = "⏸️ Parar ritmo";
    btn.classList.add("ativo");
  }
}

function pararMetronomo() {
  if (metronomoInterval) {
    clearInterval(metronomoInterval);
    metronomoInterval = null;
  }
  const btn = document.getElementById("metronomo-btn");
  if (btn) {
    btn.textContent = "▶️ Iniciar ritmo";
    btn.classList.remove("ativo");
  }
}

function blocoMetronomoRCP() {
  return `
    <div class="bloco metronomo-rcp">
      <h3>Metrônomo de RCP</h3>
      <p class="metronomo-desc">Toque para ouvir o ritmo das compressões — ${METRONOMO_BPM} por minuto (dentro da faixa recomendada de 100 a 120).</p>
      <div class="metronomo-visual"><div class="metronomo-pulso" id="metronomo-pulso">❤️</div></div>
      <button class="metronomo-btn" id="metronomo-btn" type="button">▶️ Iniciar ritmo</button>
    </div>
  `;
}

function ativarMetronomo(escopo) {
  const btn = escopo.querySelector("#metronomo-btn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    if (metronomoInterval) pararMetronomo();
    else iniciarMetronomo();
  });
}

// ---------- Tela de módulo ----------
function renderModulo(id, subId) {
  atualizarContextoBusca("modulo");
  const m = MODULOS.find((x) => x.id === id);
  if (!m) return renderLista();

  const temSub = Array.isArray(m.subcategorias) && m.subcategorias.length > 0;
  const subAtual = temSub
    ? (m.subcategorias.find((s) => s.id === subId) || m.subcategorias[0])
    : null;

  const conteudoHtml = temSub
    ? `
      <div class="tabs-sub" role="tablist" aria-label="${m.abasLabel || "Categoria"}">
        ${m.subcategorias.map((s) => `
          <button class="tab-sub ${s.id === subAtual.id ? "ativo" : ""}"
                  role="tab" aria-selected="${s.id === subAtual.id}"
                  data-sub="${s.id}">${s.nome}</button>
        `).join("")}
      </div>
      <div id="conteudo-sub">${blocoConteudo(subAtual)}</div>
    `
    : blocoConteudo(m);

  window.scrollTo(0, 0);
  app.innerHTML = `
    <div class="tela-modulo">
      <button class="voltar-btn" id="voltar">← Voltar ao menu inicial</button>

      <div class="modulo-hero" style="background:${gradienteModulo(m.cor)};">
        <div class="card-icone">${m.icone}</div>
        <h2>${m.titulo}</h2>
        <p>${m.resumo}</p>
      </div>

      ${blocoBotaoLeitura()}

      ${m.id === "rcp" ? blocoMetronomoRCP() : ""}

      ${temSub && m.videos ? blocoSecaoVideos(m.videos) : ""}

      ${conteudoHtml}

      ${m.linksExternos ? m.linksExternos.map(blocoLinkExterno).join("") : m.linkExterno ? blocoLinkExterno(m.linkExterno) : ""}
    </div>
  `;

  document.getElementById("voltar").addEventListener("click", () => {
    history.pushState({}, "", "#");
    irComTransicao(renderLista);
  });

  ativarAccordions(app);

  const dadosAtuais = temSub ? subAtual : m;
  const tituloFala = temSub ? `${m.titulo}, ${subAtual.nome}` : m.titulo;
  ativarLeitura(app, tituloFala, dadosAtuais);

  if (m.id === "rcp") ativarMetronomo(app);

  if (temSub) {
    document.querySelectorAll(".tab-sub").forEach((btn) => {
      btn.addEventListener("click", () => {
        const novoSub = btn.dataset.sub;
        if (novoSub === subAtual.id) return;
        history.pushState({ modulo: m.id, sub: novoSub }, "", `#${m.id}/${novoSub}`);
        irComTransicao(() => renderModulo(m.id, novoSub));
      });
    });
  }
}

// ---------- Páginas institucionais (Sobre / Área de Estudos) ----------
function blocoItemEstudo(item) {
  return `
    <div class="bloco">
      ${item.titulo ? `<h3>${item.titulo}</h3>` : ""}
      <p>${item.texto}</p>
      ${item.link ? blocoLinkExterno(item.link) : ""}
    </div>
  `;
}

function renderPaginaEstatica(pagina, routeName) {
  atualizarContextoBusca(routeName);
  window.scrollTo(0, 0);

  const conteudoHtml = pagina.categorias
    ? pagina.categorias.map((cat) => `
        <div class="categoria-estudo">
          <h2 class="categoria-titulo">${cat.titulo}</h2>
          ${cat.itens.map(blocoItemEstudo).join("")}
        </div>
      `).join("")
    : pagina.blocos.map((b) => `
        <div class="bloco">
          <h3>${b.titulo}</h3>
          <p>${b.texto}</p>
        </div>
      `).join("");

  app.innerHTML = `
    <div class="tela-pagina">
      <h1 class="pagina-titulo">${pagina.titulo}</h1>
      ${conteudoHtml}
    </div>
  `;
  atualizarNavAtiva(routeName);
}

function renderSobre() { renderPaginaEstatica(PAGINA_SOBRE, "sobre"); }
function renderEstudos() { renderPaginaEstatica(PAGINA_ESTUDOS, "estudos"); }

function renderGuias() {
  atualizarContextoBusca("guias");
  window.scrollTo(0, 0);
  const pagina = PAGINA_GUIAS;

  app.innerHTML = `
    <div class="tela-pagina">
      <h1 class="pagina-titulo">${pagina.titulo}</h1>
      <p class="pagina-subtitulo">${pagina.subtitulo}</p>
      ${pagina.categorias.map((cat) => `
        <div class="categoria-estudo">
          <h2 class="categoria-titulo">${cat.titulo}</h2>
          <div class="grid-posteres">
            ${cat.posteres.map((p, i) => `
              <button class="poster-card" data-imagem="${p.imagem}" data-titulo="${p.titulo}">
                <img src="${p.imagem}" alt="${p.titulo}" loading="lazy" />
                <span class="poster-titulo">${p.titulo}</span>
              </button>
            `).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `;

  atualizarNavAtiva("guias");

  document.querySelectorAll(".poster-card").forEach((card) => {
    card.addEventListener("click", () => {
      abrirLightbox(card.dataset.imagem, card.dataset.titulo);
    });
  });
}

function blocoComparativoColuna(coluna, classeExtra) {
  return `
    <div class="bloco comparativo-col ${classeExtra}">
      <h3>${coluna.icone ? `${coluna.icone} ` : ""}${coluna.titulo}</h3>
      ${coluna.descricao ? `<p class="comparativo-desc">${coluna.descricao}</p>` : ""}
      <ul>${coluna.itens.map((i) => `<li>${i}</li>`).join("")}</ul>
    </div>
  `;
}

function renderSamuBombeiros() {
  atualizarContextoBusca("samu-bombeiros");
  window.scrollTo(0, 0);
  const pagina = PAGINA_SAMU_BOMBEIROS;

  app.innerHTML = `
    <div class="tela-pagina">
      <button class="voltar-btn" id="voltar-comparativo">← Voltar</button>
      <h1 class="pagina-titulo">${pagina.titulo}</h1>
      <p class="pagina-subtitulo">${pagina.subtitulo}</p>

      <div class="comparativo-grid">
        ${blocoComparativoColuna(pagina.samu, "comparativo-samu")}
        ${blocoComparativoColuna(pagina.bombeiros, "comparativo-bombeiros")}
      </div>

      <div class="bloco comparativo-ambos">
        <h3>${pagina.ambos.titulo}</h3>
        <ul>${pagina.ambos.itens.map((i) => `<li>${i}</li>`).join("")}</ul>
      </div>

      <div class="disclaimer">
        Esta divisão é uma orientação geral e pode variar conforme o município.
        Em qualquer emergência real, ligue e siga as instruções de quem atender.
      </div>
    </div>
  `;

  document.getElementById("voltar-comparativo").addEventListener("click", () => {
    history.back();
  });
}

document.getElementById("btn-samu-bombeiros").addEventListener("click", () => {
  history.pushState({}, "", "#samu-bombeiros");
  irComTransicao(renderSamuBombeiros);
});

// ---------- Rodapé de navegação fixo ----------
function atualizarNavAtiva(routeName) {
  document.querySelectorAll(".bottom-nav-btn").forEach((btn) => {
    btn.classList.toggle("ativo", btn.dataset.route === routeName);
  });
}

document.querySelectorAll(".bottom-nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const rota = btn.dataset.route;
    const hash = rota === "inicio" ? "" : `#${rota}`;
    history.pushState({}, "", hash || "#");
    irComTransicao(rotearHash);
  });
});

// Transição suave entre telas, com fallback silencioso em navegadores sem suporte.
function irComTransicao(fn) {
  pararLeitura();
  pararMetronomo();
  if (document.startViewTransition) {
    document.startViewTransition(fn);
  } else {
    fn();
  }
}

buscaInput.addEventListener("input", (e) => {
  if (contextoBusca === "inicio") {
    renderLista(e.target.value);
  } else {
    destacarNaPagina(e.target.value);
  }
});

function rotearHash() {
  const hash = location.hash.replace("#", "");

  if (hash === "sobre") { renderSobre(); return; }
  if (hash === "guias") { renderGuias(); return; }
  if (hash === "estudos") { renderEstudos(); return; }
  if (hash === "samu-bombeiros") { renderSamuBombeiros(); return; }

  const [moduloId, subId] = hash.split("/");
  if (moduloId && MODULOS.some((m) => m.id === moduloId)) {
    renderModulo(moduloId, subId);
    atualizarNavAtiva("inicio");
  } else {
    renderLista();
    atualizarNavAtiva("inicio");
  }
}

window.addEventListener("popstate", () => irComTransicao(rotearHash));

// Rota inicial (permite abrir direto num módulo, faixa/tipo, ou página institucional via link)
rotearHash();

// ---- Lightbox global: amplia e permite baixar qualquer ilustração (módulos e pôsteres) ----
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxDownload = document.getElementById("lightbox-download");

function nomeArquivoDownload(titulo, src) {
  const ext = src.split(".").pop().split("?")[0];
  const base = (titulo || "ilustracao")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return `${base || "ilustracao"}.${ext}`;
}

function abrirLightbox(src, titulo) {
  lightboxImg.src = src;
  lightboxImg.alt = titulo || "";
  lightboxDownload.href = src;
  lightboxDownload.setAttribute("download", nomeArquivoDownload(titulo, src));
  lightbox.hidden = false;
}

function fecharLightbox() {
  lightbox.hidden = true;
  lightboxImg.src = "";
}

document.getElementById("lightbox-fechar").addEventListener("click", fecharLightbox);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) fecharLightbox(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !lightbox.hidden) fecharLightbox(); });

// Qualquer ilustração de módulo (dentro do accordion "Ver ilustração") também amplia ao tocar.
app.addEventListener("click", (e) => {
  const img = e.target.closest(".img-ampliavel");
  if (img) abrirLightbox(img.getAttribute("src"), img.getAttribute("alt"));
});

// ---- Botão flutuante 'Voltar ao topo' ----
const btnTopo = document.getElementById("btn-topo");
window.addEventListener("scroll", () => {
  btnTopo.classList.toggle("visivel", window.scrollY > 400);
}, { passive: true });
btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---- PWA: Service Worker (funcionamento offline) ----
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then(() => console.log("Service worker registrado — app funciona offline."))
      .catch((err) => console.warn("Falha ao registrar service worker:", err));
  });
}

// ---- Prompt de instalação (Adicionar à tela inicial) ----
let deferredPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  mostrarToast("Toque para instalar o app no seu celular ↓");
});
