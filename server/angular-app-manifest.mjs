
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/rest-api-response-code-helper/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/rest-api-response-code-helper"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16840, hash: 'c24ea142d1a1b0802eb6f590defa616ed684929deb6b2d267b41bbceb6d6800a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17088, hash: '96328517e22048f0b907cab813afee76849828291fee49cf72889dc5959e9478', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 43069, hash: 'e1ded9533d5ed78a90af3fa54d7b4f4e86d90671490f5a7da9b1fd2a18dc2104', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6D24LKGQ.css': {size: 145, hash: 'C7MVmaDzN58', text: () => import('./assets-chunks/styles-6D24LKGQ_css.mjs').then(m => m.default)}
  },
};
