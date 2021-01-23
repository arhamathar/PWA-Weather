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

self.addEventListener('fetch', (event) => {
    console.log("[Service Worker] Fetch", event);
    event.waitUntill(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                } else {
                    return fetch(event.request);
                }
            })
    )
});

self.addEventListener('activate', (event) => { });