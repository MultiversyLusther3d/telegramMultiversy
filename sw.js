const CACHE_NAME = 'manequim-v1';
const assets = [
  './',
  'index.html',
  '1.jpg', '2.jpg', '3.jpg', '4.jpg' 
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

