const version = 'v1';
const cacheName = `ahj-${version}`;

const files = [
  '/',
  '/img/js.png',
  '/js/app.js',
];

async function putFilesToCache(files) {
  const cache = await caches.open(cacheName);
  await cache.addAll(files);
}

async function removeOldCache(retain) {
  const keys = await caches.keys();
  return Promise.all(
      keys.filter(key => !retain.includes(key))
      .map(key => caches.delete(key))
  );
}

self.addEventListener('install', (evt) => {
  console.log(evt);
  evt.waitUntil((async () => {
    await putFilesToCache(files);
    await self.skipWaiting();
  })());
});


self.addEventListener('activate', (evt) => {
  console.log(evt);
  evt.waitUntil((async () => {
    await removeOldCache([cacheName])
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (evt) => {
  const requestUrl = new URL(evt.request.url);

  if (requestUrl.pathname.startsWith('/api')) {
    return;
  }

  evt.respondWith((async () => {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(evt.request);

    if (cachedResponse) {
      return cachedResponse;
    }

    return fetch(evt.request);
  })());
});

// self.addEventListener('fetch', (evt) => {
//   const requestUrl = new URL(evt.request.url);

//   console.log('fetch');
//   if (!requestUrl.pathname.startsWith('/api')) {
//     return;
//   }

//   evt.respondWith((async () => {
//     const cache = await caches.open(cacheName);

//     try {
//       const response = await fetch(evt.request);
//       evt.waitUntil(cache.put(evt.request, response.clone()));
//       return response;
//     } catch (e) {
//       const cachedResponse = await cache.match(evt.request);
//       if (cachedResponse) {
//         return cachedResponse;
//       }
//     }
//     throw new Error('no cached data');
//   })());
// });