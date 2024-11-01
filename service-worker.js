self.addEventListener('install', function(event) {
  console.log('Service Worker installed');
  // Activate the service worker immediately
  self.skipWaiting();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});