// Service Worker — cache offline-first.
// Em uma emergência a conexão pode falhar; o app precisa abrir mesmo assim.
const CACHE_NAME = "primeiros-socorros-v71";
const ASSETS = [
  "./",
  "./index.html",
  "./css/style.css",
  "./fonts/atkinson-hyperlegible-400.woff2",
  "./fonts/atkinson-hyperlegible-700.woff2",
  "./fonts/lexend-800.woff2",
  "./js/app.js",
  "./js/modules-data.js",
  "./js/paginas.js",
  "./js/quiz-data.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-192-maskable.png",
  "./icons/icon-512-maskable.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-192.png",
  "./img/heart-icon-header.png",
  "./img/assinatura-faetec.png",
  "./img/engasgo-bebe.webp",
  "./img/engasgo-crianca.webp",
  "./img/engasgo-adolescente.webp",
  "./img/engasgo-adulto.webp",
  "./img/engasgo-adulto-sozinho.webp",
  "./img/engasgo-gestante.webp",
  "./img/rcp-adulto.webp",
  "./img/picadas-insetos-aracnideos.webp",
  "./img/queimadura-ilustracao.webp",
  "./img/sangramento-ilustracao.webp",
  "./img/insolacao-ilustracao.webp",
  "./img/convulsao-ilustracao.webp",
  "./img/fraturas-ilustracao.webp",
  "./img/hemorragia-nasal.webp",
  "./img/intoxicacao-ilustracao.webp",
  "./img/desmaio-ilustracao.webp",
  "./img/mordida-animal-ilustracao.webp",
  "./img/afogamento-ilustracao.webp",
  "./img/ansiedade-ilustracao.webp",
  "./img/choque-eletrico-ilustracao.webp",
  "./img/trauma-ocular-ilustracao.webp",
  "./img/hipotermia-bebe.webp",
  "./img/hipotermia-guia-pratico.webp",
  "./img/guia-insolacao.webp",
  "./img/guia-intoxicacao.webp",
  "./img/guia-queimaduras.webp",
  "./img/guia-fraturas.webp",
  "./img/guia-rcp.webp",
  "./img/guia-engasgo.webp",
  "./img/guia-sangramento.webp",
  "./img/guia-afogamento.webp",
  "./img/guia-dea.webp",
  "./img/guia-mordidas.webp",
  "./img/icones/icone-engasgo.webp",
  "./img/icones/icone-hemorragia-nasal.webp",
  "./img/icones/icone-afogamento.webp",
  "./img/icones/icone-sangramento.webp",
  "./img/icones/icone-queimaduras.webp",
  "./img/icones/icone-desmaio.webp",
  "./img/icones/icone-rcp.webp",
  "./img/icones/icone-fraturas.webp",
  "./img/icones/icone-convulsao.webp",
  "./img/icones/icone-ansiedade.webp",
  "./img/icones/icone-choque-eletrico.webp",
  "./img/icones/icone-trauma-ocular.webp",
  "./img/icones/icone-calor.webp",
  "./img/icones/icone-hipotermia.webp",
  "./img/icones/icone-intoxicacao.webp",
  "./img/icones/tema-escuro.webp",
  "./img/icones/tema-daltonico.webp",
  "./img/icones/tema-claro.webp",
  "./img/icones/tema-contraste.webp",
  "./img/icones/icone-alto-falante.webp",
  "./img/icones/nav-inicio.webp",
  "./img/icones/nav-referencias.webp",
  "./img/icones/nav-sobre.webp",
  "./img/icones/nav-meus-dados.webp",
  "./img/icones/nav-ilustracoes.webp",
  "./img/icones/icone-picadas-cachorro.webp",
  "./img/icones/icone-play.webp",
  "./img/icones/icone-stop.webp",
  "./img/icones/icone-interrogacao.webp",
  "./img/icones/icone-bombeiros.webp",
  "./img/icones/icone-cadeado.webp",
  "./img/icones/icone-check.webp",
  "./img/icones/icone-confete.webp",
  "./img/icones/icone-coracao.webp",
  "./img/icones/icone-corrente.webp",
  "./img/icones/icone-pause.webp",
  "./img/icones/icone-play2.webp",
  "./img/icones/icone-quiz.webp",
  "./img/icones/icone-samu.webp",
  "./img/icones/icone-seta-externa.webp",
  "./img/icones/icone-x.webp",
  "./img/icones/icone-topo.webp",
  "./img/icones/icone-instalar.webp",
  "./img/icones/icone-baixar.webp",
  "./img/icones/icone-tema-check.webp",
  "./img/icones/icone-voltar.webp",
  "./img/icones/icone-seta-avancar.webp"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Cache-first: serve do cache imediatamente, atualiza em segundo plano quando online.
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
