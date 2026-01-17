export interface Media {
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
}

export interface PaginationMeta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ApiPaginatedResponse<T> {
  data: T[];
  meta: {
    pagination: PaginationMeta;
  };
}

export interface ApiResponse<T> {
  data: T;
}

export class HttpError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
    this.name = "HttpError";
  }
}
