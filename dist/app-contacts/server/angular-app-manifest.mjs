
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://eeoneishin.github.io/App-Contacts/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/App-Contacts"
  },
  {
    "renderMode": 2,
    "route": "/App-Contacts/contact/id"
  },
  {
    "renderMode": 0,
    "route": "/App-Contacts/contact/*"
  },
  {
    "renderMode": 2,
    "route": "/App-Contacts/add-contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 536, hash: '792921b9b2e0e865df7abe7771917cb537a83fe0dc03fb2504bb8a3a28c42db9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1049, hash: '190b6fdd4744f7cc9e21cafb521e991f685d8331b42f147f86ab92f06197ca56', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2379, hash: '4a83010e3509eb37696723bd8a270259c68638e1cb75f55e9fc0bea395799502', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/id/index.html': {size: 1562, hash: 'f70e6e45d841317b9bd3db27f21f673079ee544f13ae93bb5ec476f864d9cbd0', text: () => import('./assets-chunks/contact_id_index_html.mjs').then(m => m.default)},
    'add-contact/index.html': {size: 4731, hash: 'c0690905ec6496d1d995d3a719c069770a15b979cd723313521b354595382562', text: () => import('./assets-chunks/add-contact_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
