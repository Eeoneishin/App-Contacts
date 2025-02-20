
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
    'index.csr.html': {size: 536, hash: '027a6ef3a8d42714dae0dde6753cd655dfbe9c7fa02db63879f45302c5dff0c9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1049, hash: '01a1da1daba5a00bec8eddea3ca33fb9c4241a8fcb83a403ef6a669518bec06c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
<<<<<<< HEAD
    'index.html': {size: 3535, hash: 'f8b558547c485274b9709641ae79b33edd3ad931eac4b676148b9547f9c8a33b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/id/index.html': {size: 1694, hash: 'fc6eac8ff555f09686f249da16431ca574c6bd2f964c0d57548fd410cbec890e', text: () => import('./assets-chunks/contact_id_index_html.mjs').then(m => m.default)},
    'add-contact/index.html': {size: 4731, hash: '1050e912faf4641d5e8389c19b1a6142f69f7b4b1062eedddcc57017685392e3', text: () => import('./assets-chunks/add-contact_index_html.mjs').then(m => m.default)},
=======
    'contact/id/index.html': {size: 1694, hash: 'fc6eac8ff555f09686f249da16431ca574c6bd2f964c0d57548fd410cbec890e', text: () => import('./assets-chunks/contact_id_index_html.mjs').then(m => m.default)},
    'add-contact/index.html': {size: 4731, hash: 'ee6e3eac1bd735b4e4af308ed302dc0c89b62ec42633f12fb03d298e966a69ca', text: () => import('./assets-chunks/add-contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3535, hash: 'f8b558547c485274b9709641ae79b33edd3ad931eac4b676148b9547f9c8a33b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
>>>>>>> e73f1cede4493f4e91ecfc261ebf2afc0a2ca820
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
