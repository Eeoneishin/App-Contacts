
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/App-Contacts/',
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
    'index.csr.html': {size: 508, hash: 'fb019503e82fa0c2f605ae748a79e1649bd4687c815343f12c6272e135b91d91', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1021, hash: '408b1e9523eeb6c7b55176e148dadfa91486ba29998a27c7392f1f5bc0d399e2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/id/index.html': {size: 1666, hash: '2ceb4118aacba7083ce08fad60c61391fa93217207ca5c972fd64dd7cc516a12', text: () => import('./assets-chunks/contact_id_index_html.mjs').then(m => m.default)},
    'add-contact/index.html': {size: 4703, hash: '22d2dd9bd6afc2f254bf5086009e52661764e82cb89a750e31af902110f7eb01', text: () => import('./assets-chunks/add-contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3507, hash: '6cee8f45dc0e40b4548a267e8749bf507354d925607f23ee26359e650d3d0163', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
