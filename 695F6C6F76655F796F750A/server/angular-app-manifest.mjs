
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ptyg.github.io/695F6C6F76655F796F750A/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/695F6C6F76655F796F750A/february14",
    "route": "/695F6C6F76655F796F750A"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KF34CPVP.js"
    ],
    "route": "/695F6C6F76655F796F750A/february14"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EINEN6XF.js"
    ],
    "route": "/695F6C6F76655F796F750A/march8"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZZN6ECVS.js"
    ],
    "route": "/695F6C6F76655F796F750A/anniversary"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6574, hash: '89d83c6cf438fe960c944a137d88f9c41b17beb5009ad27e5f1278309e944624', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6786, hash: '630f32cf01b4a12decf869fba46c1727bf14254aeed322269dd7019598477329', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'anniversary/index.html': {size: 10334, hash: 'e79658f5dddeb098e212a6bd3cc09a1e6e264cc9627405c1d6edcf9dc4d676e4', text: () => import('./assets-chunks/anniversary_index_html.mjs').then(m => m.default)},
    'march8/index.html': {size: 8959, hash: '936ac3bfe8b6538bdf94578b246ab952b8e651265655566f1371ba7f3576f538', text: () => import('./assets-chunks/march8_index_html.mjs').then(m => m.default)},
    'february14/index.html': {size: 8971, hash: '5a7911365f8de627e381ff436eaa89b1c223a98f3748b1de63011b7021d9b00f', text: () => import('./assets-chunks/february14_index_html.mjs').then(m => m.default)},
    'styles-E4HBCHM2.css': {size: 188, hash: 'VKx0suQZA70', text: () => import('./assets-chunks/styles-E4HBCHM2_css.mjs').then(m => m.default)}
  },
};
