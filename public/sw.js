const self = this;
const CACHE_NAME = 'weather-v4';
const urlsToCache = [
    '/',
    '/index.html',
    '/static/js/bundle.js',
    '/static/js/0.chunk.js',
    '/static/js/main.chunk.js',
    'static/media/weather-bg.d6195316.jpg'
];

self.addEventListener('install', (event) => {
    console.log("[Service Worker] Install", event);
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log("Open Cache");
                return cache.addAll(urlsToCache)
            })
    )
});

self.addEventListener('fetch', (event) => {
    // console.log("[Service Worker] Fetch", event);
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    console.log(response);
                    return response;
                } else {
                    return fetch(event.request);
                }
            })
    )
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keyList) => {
                return Promise.all(keyList.map(key => {
                    if (key !== CACHE_NAME) {
                        console.log("Removing old cache.", key);
                        return caches.delete(key);
                    }
                }))
            })
    );
});