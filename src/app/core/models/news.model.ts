export interface News {
  article_id: string;
  title: string;
  link: string;
  keyWords: string[];
  creator: string[];
  description: string;
  content: string;
  pubDate: Date;
  pubDateTZ: string;
  image_url?: string;
  video_url?: string;
  source_id: string;
  source_name: string;
  source_url: string;
  source_icon: string;
  language: string;
  country: string[];
  category: string[];
}

export type NewsCategory =
  | 'general'
  | 'science'
  | 'sports'
  | 'business'
  | 'health'
  | 'entertainment'
  | 'tech'
  | 'politics'
  | 'food'
  | 'travel';
