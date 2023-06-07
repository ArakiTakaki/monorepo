import React from 'react';
import ReactDOM from 'react-dom/client';
import type { PageContextBuiltInClientWithClientRouting } from 'vite-plugin-ssr/types';

export { render };

let root: ReactDOM.Root;

function render(pageContext: PageContextBuiltInClientWithClientRouting) {
  const { Page } = pageContext;

  const page = (
    <React.StrictMode>
      <Page />
    </React.StrictMode>
  );

  const container = document.getElementById('page-view')!;
  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page);
  } else {
    root.render(page);
  }
}

export const clientRouting = true;
