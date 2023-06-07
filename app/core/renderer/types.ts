import type {
  PageContextBuiltIn,
  PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient,
} from 'vite-plugin-ssr/types';

export type { PageContextServer };
export type { PageContextClient };
export type { PageContext };
export type { PageProps };

type Page = (pageProps: PageProps) => React.ReactElement;
type PageProps = Record<string, unknown>;

export type PageContextCustom = {
  Page: Page;
  pageProps?: PageProps;
  exports: {
    documentProps?: {
      title: string;
    };
  };
  documentProps?: {
    title: string;
  };
};

type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom;
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;

type PageContext = PageContextClient | PageContextServer;
