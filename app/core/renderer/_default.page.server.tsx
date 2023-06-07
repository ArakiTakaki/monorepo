import ReactDOMServer from 'react-dom/server';
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr/server';
import { PageContextServer } from './types';

export { render };
export { passToClient };
const passToClient = ['pageProps'];

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;
  const viewHtml = ReactDOMServer.renderToString(<Page {...pageProps} />);
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
