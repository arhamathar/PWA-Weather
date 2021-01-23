const self = this;
const CACHE_NAME = 'weather';
const urlsToCache = ['index.html', 'offline.html'];

self.addEventListener('install', (event) => {
    console.log("[Service Worker] Install", event);
    event.waitUntill(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log("Open Cache");
                return cache.addAll(urlsToCache)
            })
    )
});

self.addEventListener('fetch', (event) => { });

self.addEventListener('activate', (event) => { });