import contentful from 'contentful';

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
});

export interface Issue {
  title: string;
  description: string;
  author: string;
  url: string;
  edition: Number;
}

export interface Issues {
  nro: Number;
  description: string;
  publishedAt: string;
  items: Array<{
    fields: Issue;
  }>;
}
