workbox.core.skipWaiting();
workbox.core.clientsClaim();

const { strategies } = workbox;

self.addEventListener('fetch', (evt) => {
  const url = new URL(evt.request.url);
  if (url.pathname.startsWith('/api')) {
    const cacheFirst = new strategies.NetworkFirst();
    evt.respondWith(cacheFirst.makeRequest({ request: evt.request }));
  }
});

workbox.precaching.precacheAndRoute(self.__precacheManifest);
