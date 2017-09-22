importScripts('workbox-sw.prod.v2.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "build/webshare.js",
    "revision": "a33b9bda3b20926c17a25990ef58a650"
  },
  {
    "url": "build/webshare.registry.json",
    "revision": "a3595545b41905ec78bc298f5cf75895"
  },
  {
    "url": "build/webshare/ddkk0joq.js",
    "revision": "da1211c814fc1e393ace8bb933d105d4"
  },
  {
    "url": "build/webshare/webshare.2bjmeuwe.js",
    "revision": "77a2cc3ce1d04fe62f014e6bd0d22d49"
  },
  {
    "url": "build/webshare/webshare.g8runckh.pf.js",
    "revision": "4e15590a56ad5a0f363e042022cc8c8e"
  },
  {
    "url": "index.html",
    "revision": "afc68d43a0b50f766f18d93eeb21664b"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
