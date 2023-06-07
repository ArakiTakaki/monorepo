import ReactDOMServer from 'react-dom/server';
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr/server';
import type { PageContextBuiltInClientWithServerRouting } from 'vite-plugin-ssr/types';

export { render };
// client 側で pageProps を使うために必要

async function render(pageContext: PageContextBuiltInClientWithServerRouting) {
  const { Page } = pageContext;
  const viewHtml = ReactDOMServer.renderToString(<Page />);
  const title = 'Vite SSR';

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(viewHtml)}</div>
      </body>
    </html>`;
}
