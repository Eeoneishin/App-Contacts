
export default {
  basePath: 'https://eeoneishin.github.io/App-Contacts',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
