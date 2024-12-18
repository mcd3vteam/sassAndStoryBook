import { useCallback, useMemo, useState } from "react";
import { PagingOptions } from "../types";

export const usePaging = (options: PagingOptions) => {
  const { slideCount, slidesToScroll, slidesToShow } = options;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageCount = useMemo(
    () => 1 + Math.ceil((slideCount - slidesToShow) / slidesToScroll),
    [slideCount, slidesToScroll, slidesToShow]
  );
  const goToPage = useCallback(
    (page: number) => {
      if (page < 1) setCurrentPage(pageCount);
      else if (page > pageCount) setCurrentPage(1);
      else setCurrentPage(page);
    },
    [pageCount]
  );
  const goToPrevious = useCallback(
    () => goToPage(currentPage - 1),
    [currentPage, goToPage]
  );
  const goToNext = useCallback(
    () => goToPage(currentPage + 1),
    [currentPage, goToPage]
  );

  return {
    currentPage,
    goToPage,
    setCurrentPage,
    goToPrevious,
    goToNext,
    pageCount,
  };
};
