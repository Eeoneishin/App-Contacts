
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/App-Contacts/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/App-Contacts"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/App-Contacts/contact/id"
  },
  {
    "renderMode": 0,
    "route": "/Program%20Files/Git/App-Contacts/contact/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 528, hash: '729b69bf8beb44d89637a621eee00ffb6f0cfba10a4e7a6048f01eac4abd4843', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1041, hash: '886cfbf326ec4055c6bfc8fb414ea864ddf528ed09e64161d4bcdb706396a0ea', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
