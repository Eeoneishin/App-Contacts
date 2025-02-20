
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
    'index.csr.html': {size: 536, hash: '1a414e97f5eee450144744900ddf861f41b78ada3ada3fa1ca74b41070a3131d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1049, hash: '95d7c7258303cfe0d3705b9e899814a35088959545f3646bdd85b6366eff3891', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2379, hash: 'ccb48a940c1f361d0f45af75f7e6beda1b16d6b74a470e0d886d55c269afaef9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/id/index.html': {size: 1562, hash: '50190de8f56db80305abf1bffe9de7b780bfbd0fda7bf9d581469d27fef5b7f9', text: () => import('./assets-chunks/contact_id_index_html.mjs').then(m => m.default)},
    'add-contact/index.html': {size: 4731, hash: '4559699160c69c7dbf954d0d8b2b420e341a986dd0f8dc7ac5a5d2431934a2a9', text: () => import('./assets-chunks/add-contact_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
