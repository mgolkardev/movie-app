/** @format */

"use client";

import { GridProperties } from "./grid-properties.interface";
import { useEffect } from "react";
import {
  Index,
  IndexRange,
  InfiniteLoader,
  Grid as VirtualizedGrid,
  AutoSizer,
  GridCellProps,
  SectionRenderedParams,
} from "react-virtualized";
import {
  GRID_DEFAULT_PER_PAGE,
  GRID_ITEM_LOADED,
  GRID_ITEM_LOADING,
} from "./grid.constant";
import useWindowSize from "shared/hooks/use-window-size.hook";

let itemStatusMap: Record<number, any> = {};

export const Grid = ({
  className,
  wrapperClassName,
  error,
  total,
  itemHeight,
  columnCount,
  itemRenderer,
  loadMore,
}: GridProperties) => {
  const screenSize = useWindowSize();

  const rowCount = Math.ceil(total / columnCount);
  const isRowLoaded = ({ index }: Index) => !!itemStatusMap[index];

  const loadMoreRows = async ({ startIndex, stopIndex }: IndexRange) => {
    for (let index = startIndex; index <= stopIndex; index++) {
      itemStatusMap[index] = GRID_ITEM_LOADING;
    }

    const count = stopIndex - startIndex;
    await loadMore(count, startIndex);

    for (let index = startIndex; index <= stopIndex; index++) {
      itemStatusMap[index] = GRID_ITEM_LOADED;
    }
  };

  useEffect(() => {
    loadMore(GRID_DEFAULT_PER_PAGE, 0);
  }, []);

  const _onSectionRendered = (
    {
      columnStartIndex,
      columnStopIndex,
      rowStartIndex,
      rowStopIndex,
    }: SectionRenderedParams,
    onRowsRendered: (params: IndexRange) => void
  ) => {
    const startIndex = rowStartIndex * columnCount + columnStartIndex;
    const stopIndex = rowStopIndex * columnCount + columnStopIndex;

    onRowsRendered({ startIndex, stopIndex });
  };

  if (error) {
    return <div className={className}>No Result</div>;
  }

  return (
    <div className={wrapperClassName}>
      <InfiniteLoader
        isRowLoaded={isRowLoaded}
        loadMoreRows={loadMoreRows}
        rowCount={rowCount}
      >
        {({ onRowsRendered, registerChild }) => (
          <AutoSizer>
            {({ height, width }) => (
              <VirtualizedGrid
                className={className}
                ref={registerChild}
                width={width}
                height={height}
                columnCount={columnCount}
                rowCount={total}
                columnWidth={(screenSize.width - 32) / columnCount}
                rowHeight={itemHeight}
                cellRenderer={({
                  key,
                  rowIndex,
                  columnIndex,
                  style,
                }: GridCellProps) => {
                  const index = rowIndex * columnCount + columnIndex;

                  return itemRenderer({
                    key,
                    index,
                    style,
                    isLoaded: itemStatusMap[index] === GRID_ITEM_LOADED,
                  });
                }}
                onSectionRendered={(params) =>
                  _onSectionRendered(params, onRowsRendered)
                }
              />
            )}
          </AutoSizer>
        )}
      </InfiniteLoader>
    </div>
  );
};
