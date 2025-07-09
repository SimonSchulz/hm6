import { PaginationAndSorting } from "../../core/types/pagination-and-sorting";
import { PostSortField } from "./PostSortFields";

export type PostQueryInput = PaginationAndSorting<PostSortField> &
  Partial<{
    searchNameTerm: string;
  }>;
