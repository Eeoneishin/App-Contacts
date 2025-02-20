
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
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 536, hash: '5c2cd6672324b47c600c8f28b97b6f5485276102aba398234b4d1b7d5baa0b90', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1049, hash: 'a16308eba49494d34edc42fe52d85565bd493ca802d1593b15b3c9422dea0ada', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3535, hash: '80b1af4818983901ba3bc9bea160b47e65c5a5d6f8bdb4788cc5c7f6fc1abc8b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/id/index.html': {size: 1694, hash: 'aa5ae22734852cfd2ca2904cf6c4e93d46f8112d38d1757e191f93ae524ee74e', text: () => import('./assets-chunks/contact_id_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
