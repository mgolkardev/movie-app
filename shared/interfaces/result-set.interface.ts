export interface ResultSet<T> {
  data: T;
  meta: {
    total_items_count: number;
    remaining_items_count: number;
    next_url?: string;
  };
}
