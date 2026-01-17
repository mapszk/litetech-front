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
