import React from 'react';
import '@workspaces/scss-util/reset.scss';
import { is } from '@workspaces/utils';
import ReactDOM from 'react-dom/client';
import type { PageContextClient } from './types';

export { render };
export const clientRouting = true;

let root: ReactDOM.Root;

function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;

  const page = (
    <React.StrictMode>
      <Page {...pageProps} />
    </React.StrictMode>
  );

  const container = document.getElementById('page-view');
  if (is.nullable(container)) throw new Error('page-view is not ready');

  if (!pageContext.isHydration) {
    if (!root) root = ReactDOM.createRoot(container);
    root.render(page);
    return;
  }

  root = ReactDOM.hydrateRoot(container, page);
  return;
}
