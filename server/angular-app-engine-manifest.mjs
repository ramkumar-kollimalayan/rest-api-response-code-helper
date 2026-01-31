
export default {
  basePath: '/rest-api-response-code-helper',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
