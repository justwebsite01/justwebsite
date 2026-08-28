/**
 * Service Worker for Dhende Associates Website
 * Implements offline functionality, caching, and performance optimization
 * 
 * Features:
 * - Network-first for HTML (always try fresh content)
 * - Cache-first for assets (CSS, JS, fonts, images)
 * - Offline fallback page
 * - Background sync for contact forms
 */

const CACHE_NAME = 'dhende-v1';
const OFFLINE_URL = '/offline.html';

const CACHE_ASSETS = [
  '/',
  '/index.html',
  '/motor-accident-claim-estimator.html',
  '/maharashtra-stampduty-estimator.html',
  '/nia_138_limitation.html',
  '/leave-license-service.html',
  '/hindu-succession-share-calculator.html',
  '/style.css',
  '/stylemacpv4.css',
  '/style-msdr.css',
  '/favicon.png',
  '/og-image.png'
];

/**
 * Install Event - Cache essential assets
 */
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching essential assets');
      return cache.addAll(CACHE_ASSETS);
    }).then(() => {
      return self.skipWaiting(); // Activate immediately
    })
  );
});

/**
 * Activate Event - Clean up old caches
 */
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim(); // Take control immediately
    })
  );
});

/**
 * Fetch Event - Implement caching strategy
 */
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and external domains
  if (request.method !== 'GET' || !url.origin.includes('dhendeassociates')) {
    return;
  }

  // HTML: Network-first strategy (always try fresh)
  if (request.headers.get('accept')?.includes('text/html')) {
    return event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone response and cache it
          if (response && response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Network failed, try cache
          return caches.match(request)
            .then((cachedResponse) => {
              return cachedResponse || caches.match(OFFLINE_URL);
            });
        })
    );
  }

  // Assets (CSS, JS, fonts, images): Cache-first strategy
  if (
    request.url.includes('.css') ||
    request.url.includes('.js') ||
    request.url.includes('.woff') ||
    request.url.includes('.png') ||
    request.url.includes('.jpg') ||
    request.url.includes('.jpeg') ||
    request.url.includes('.gif') ||
    request.url.includes('.webp') ||
    request.url.includes('.svg')
  ) {
    return event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return fetch(request).then((response) => {
            // Cache successful responses
            if (response && response.status === 200) {
              const responseClone = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, responseClone);
              });
            }
            return response;
          }).catch(() => {
            // Return placeholder or cached version
            console.warn('[Service Worker] Failed to fetch:', request.url);
            return null;
          });
        })
    );
  }
});

/**
 * Background Sync - Queue failed submissions
 */
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-contact-form') {
    event.waitUntil(syncContactForm());
  }
});

async function syncContactForm() {
  try {
    // Get queued forms from IndexedDB
    const db = await openDB();
    const forms = await db.getAll('contact-forms');

    for (const form of forms) {
      try {
        await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify(form),
          headers: { 'Content-Type': 'application/json' }
        });

        // Remove from queue on success
        await db.delete('contact-forms', form.id);
      } catch (error) {
        console.error('Failed to sync form:', error);
      }
    }
  } catch (error) {
    console.error('Sync failed:', error);
    throw error; // Retry sync
  }
}

/**
 * Helper: Open IndexedDB
 */
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('DhendeDB', 1);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains('contact-forms')) {
        db.createObjectStore('contact-forms', { keyPath: 'id', autoIncrement: true });
      }

      resolve(db);
    };
  });
}

/**
 * Message Event - Allow clients to control the service worker
 */
self.addEventListener('message', (event) => {
  if (event.data.action === 'clearCache') {
    event.waitUntil(
      caches.delete(CACHE_NAME).then(() => {
        event.ports[0].postMessage({ success: true });
      })
    );
  }
});

console.log('[Service Worker] Loaded and ready');
