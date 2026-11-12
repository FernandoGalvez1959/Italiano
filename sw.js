const CACHE = "italiano-a1-v4";
const FILES = ["./", "./index.html", "./lessons.js", "./firebase-config.js", "./manifest.webmanifest", "./icon.svg", "./icon-192.png", "./icon-512.png", "./icon-512-maskable.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const u = new URL(e.request.url);
  // Librerías de Firebase: se guardan la primera vez para recuperar la sesión también sin conexión.
  if (u.hostname === "www.gstatic.com" && u.pathname.indexOf("/firebasejs/") === 0) {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      if (res.ok) { const c = res.clone(); caches.open(CACHE).then(ch => ch.put(e.request, c)); }
      return res;
    })));
    return;
  }
  if (u.origin !== location.origin) return;
  // Red primero (los cambios llegan solos) y copia guardada si no hay conexión.
  e.respondWith(
    fetch(e.request).then(r => {
      if (r.ok) { const c = r.clone(); caches.open(CACHE).then(ch => ch.put(e.request, c)); }
      return r;
    }).catch(() => caches.match(e.request).then(r => r || (e.request.mode === "navigate" ? caches.match("./index.html") : Response.error())))
  );
});
