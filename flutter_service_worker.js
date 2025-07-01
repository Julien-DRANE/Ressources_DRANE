'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a91c28a693f75b72b3e02ed1a34a8df9",
"assets/AssetManifest.bin.json": "30dcd85b2c9599d5729dabf2907837ee",
"assets/AssetManifest.json": "7b66a797ebc92994ecde3a5587c5fafb",
"assets/assets/fonts/Marianne-Bold.otf": "8777ccfe444bc286bc4ee5b94d65e46c",
"assets/assets/fonts/Marianne-Light.otf": "5a7a39640d969f6d6aa4ed6adeba3138",
"assets/assets/fonts/Marianne-Medium.otf": "712af6ae4bb19939f2fb3af0d8bd630b",
"assets/assets/fonts/Marianne-Regular.otf": "cb94c50f09878c19dbc7bce8ffb26719",
"assets/assets/images/app_icon.png": "7114103ee5c6a69514b03a6df3cae586",
"assets/assets/images/archiclasse.png": "c2075175f4d5f6cdc0988cc9149d3c89",
"assets/assets/images/bac_sable.png": "851188decbac5b92fc7b5adc2652aa85",
"assets/assets/images/banniere_drane_hexagones.jpg": "01724d38d44312914ee7ea18deb34ee6",
"assets/assets/images/bots.png": "70a1fa4629ed70893f170400bff6e479",
"assets/assets/images/cartes.png": "035d5165fd6088a2068e7cd8812bbcf2",
"assets/assets/images/collaborators/christophe.png": "6ff4fa2e3ec72c81e4dd3fa6bd3e9f06",
"assets/assets/images/collaborators/fanny.png": "965cb594b9c812ef69d2dacd97122c5f",
"assets/assets/images/collaborators/julien.png": "46bf380a58113101b69fef02b755e7b7",
"assets/assets/images/collaborators/nathalie.png": "4bbf4a3f26196d2cb3bde8f891f1afd4",
"assets/assets/images/collaborators/tanguy.png": "a8a9bb4c9cc3afd0e478d9582857fdd8",
"assets/assets/images/default_banner.jpg": "01724d38d44312914ee7ea18deb34ee6",
"assets/assets/images/default_thumb.png": "c848c7a1270678de2676965ba1e38db5",
"assets/assets/images/drones.png": "cd9cc59ba89c2206ac5ee130f74ee079",
"assets/assets/images/escape.png": "728b2c7ebdad562dd089b2020d67d42d",
"assets/assets/images/lis_les_mots.png": "e99946930334a5574472e3b8b0288064",
"assets/assets/images/micro_kit.png": "303c71916edef58c3f0de61f30a96e16",
"assets/assets/images/osmo.png": "65bd029547bc33f1a7760f4243f4c7cb",
"assets/assets/images/soldamatic.png": "cda87a47531b63f19dfe0508d282b23d",
"assets/assets/images/stopmotion.png": "2a323fbc88a5479791ab13e1e0edd1c7",
"assets/assets/images/tablettes.png": "46355adb23ef19e7eb0057e01bd48242",
"assets/assets/images/ted-i.png": "13c41c6887255234e06c423eb487b5f0",
"assets/assets/images/vr.png": "185347fc9ea36afad0aff88c6cea7761",
"assets/assets/images/webradio.png": "e6ec31b9dce1dd9eac8d18824c0309be",
"assets/FontManifest.json": "bad63d358678e83f623a82196c6fb38b",
"assets/fonts/MaterialIcons-Regular.otf": "e0dad8df23af67849099280e737b5c84",
"assets/NOTICES": "ecc6b9c3b2d48b7f7572d8f9a3db25a5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "7114103ee5c6a69514b03a6df3cae586",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "e607cf82567416b717461a86522d5bde",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "7114103ee5c6a69514b03a6df3cae586",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4522b881cf49f7b2485c17798fb51c2b",
"/": "4522b881cf49f7b2485c17798fb51c2b",
"main.dart.js": "93843026f1595d97fda96f4125bd57e1",
"manifest.json": "a6ad50e8f310d7beecfdc9b658683934",
"version.json": "8803da19e3f872f03c4fcc5937b1ab15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
