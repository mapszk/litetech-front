export interface SinglePost {
  id: number;
  attributes: {
    title: string;
    subtitle: string;
    topic: string;
    author: string;
    readTime: number;
    coverImg: {
      data: {
        id: number;
        attributes: {
          url: string;
          name: string;
          alternativeText: string;
          caption: string;
          width: number;
          height: number;
          formats: any;
          hash: string;
          ext: string;
          mime: string;
          size: number;
          previewUrl: string;
          provider: string;
          provider_metadata: any;
          createdAt: string;
          updatedAt: string;
        };
      };
    };
    body: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface PaginationMeta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    pagination: PaginationMeta;
  };
}
