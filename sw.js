// Service Worker — cache offline-first.
// Em uma emergência a conexão pode falhar; o app precisa abrir mesmo assim.
const CACHE_NAME = "primeiros-socorros-v37";
const ASSETS = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/app.js",
  "./js/modules-data.js",
  "./js/paginas.js",
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
  "./img/guia-mordidas.webp"
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
