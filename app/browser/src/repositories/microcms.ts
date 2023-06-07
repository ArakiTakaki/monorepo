import { createClient } from 'microcms-js-sdk';

export const microcmsClient = createClient({
  serviceDomain: process.env.MICROCMS_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

interface GetArtcile {
  contents: Content[];
  totalCount: number;
  offset: number;
  limit: number;
}

interface Content {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eyecatch: Eyecatch;
  categories: Category[];
}

interface Category {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
}

interface Eyecatch {
  url: string;
  height: number;
  width: number;
}
export const getArtciles = async (): Promise<GetArtcile> => {
  return await microcmsClient
    .get({
      endpoint: 'blogs',
      queries: { limit: 10, offset: 0, orders: '-createdAt' },
    })
    .then((res) => res);
};
