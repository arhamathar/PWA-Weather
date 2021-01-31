const self = this;
const CACHE_NAME = 'weather-v7.1';
const urlsToCache = [
    '/',
    '/index.html',
    '/static/js/bundle.js',
    '/static/js/0.chunk.js',
    '/static/js/main.chunk.js',
    './images/weather.png'
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
                // eslint-disable-next-line array-callback-return
                return Promise.all(keyList.map(key => {
                    if (key !== CACHE_NAME) {
                        console.log("Removing old cache.", key);
                        return caches.delete(key);
                    }
                }))
            })
    );
});