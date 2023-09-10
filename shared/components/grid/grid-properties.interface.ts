/** @format */

type GridItemRenderer = {
  key: React.Key;
  index: number;
  style: React.CSSProperties;
  isLoaded: boolean;
};

export interface GridProperties {
  error?: boolean;
  total: number;
  itemHeight: number;
  columnCount: number;
  itemRenderer: ({ key, index, isLoaded }: GridItemRenderer) => React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  children?: React.ReactNode;
  loadMore: () => Promise<void>;
}
