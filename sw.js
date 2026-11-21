// Минимальный service worker: нужен Chrome на Android, чтобы предложить «Установить приложение».
// На iPhone не регистрируется.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
