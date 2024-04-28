import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaginationState } from "../types";
import { DOTS } from "../static";
import { range } from "../helpers";

const initialState: Array<string | number> = [];

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPagination: (state, { payload }: PayloadAction<PaginationState>) => {
      const { currentPage, totalCount, siblingCount, pageSize } = payload;
      if (payload) {
        const totalPageCount = Math.ceil(totalCount / pageSize);

        const totalPageNums = siblingCount + 5;

        if (totalPageNums >= totalPageCount) return range(1, totalPageCount);

        const leftSiblingIdx = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIdx = Math.min(
          currentPage + siblingCount,
          totalPageCount
        );

        const shouldShowLeftDots = leftSiblingIdx > 2;
        const shouldShowRightDots = rightSiblingIdx < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        if (!shouldShowLeftDots && shouldShowRightDots) {
          const leftItemCount = 3 + 2 * siblingCount;
          const leftRange = range(1, leftItemCount);
          state = [...leftRange, DOTS, totalPageCount];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
          const rightItemCount = 3 + 2 * siblingCount;
          const rightRange = range(
            totalPageCount - rightItemCount + 1,
            totalPageCount
          );

          state = [firstPageIndex, DOTS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
          const middleRange = range(leftSiblingIdx, rightSiblingIdx);
          state = [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }

        console.log("TEST");
      }
    },
  },
});

export const { setPagination } = paginationSlice.actions;
export default paginationSlice.reducer;
