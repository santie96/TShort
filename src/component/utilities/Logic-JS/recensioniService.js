import { useEffect, useState } from "react";
import recensioniData from "../../../data/recensioniProdotti.json";

const REVIEWS_PER_PAGE_Large = 3;
const REVIEWS_PER_PAGE_Medium = 2;
const REVIEWS_PER_PAGE_Small = 1;

const getReviewsPerPage = () => {
  if (typeof window === "undefined") return REVIEWS_PER_PAGE_Large;
  if (window.innerWidth < 768) return REVIEWS_PER_PAGE_Small;
  if (window.innerWidth < 1024) return REVIEWS_PER_PAGE_Medium;
  return REVIEWS_PER_PAGE_Large;
};

export function useRecensioniCarousel() {
  const [slideReview, setSlideReview] = useState(0);
  const [reviewsPerPage, setReviewsPerPage] = useState(REVIEWS_PER_PAGE_Large);

  useEffect(() => {
    const updateReviewsPerPage = () => {
      setReviewsPerPage(getReviewsPerPage());
    };

    updateReviewsPerPage();
    window.addEventListener("resize", updateReviewsPerPage);

    return () => window.removeEventListener("resize", updateReviewsPerPage);
  }, []);

  const lastStartIndex = Math.max(0, recensioniData.length - reviewsPerPage);

  useEffect(() => {
    setSlideReview((current) => Math.min(current, lastStartIndex));
  }, [lastStartIndex]);

  const visibleReviews = recensioniData.slice(slideReview, slideReview + reviewsPerPage);

  const next = () => {
    setSlideReview((current) => Math.min(current + 1, lastStartIndex));
  };

  const back = () => {
    setSlideReview((current) => Math.max(current - 1, 0));
  };

  return {
    slideReview,
    reviewsPerPage,
    visibleReviews,
    next,
    back,
    lastStartIndex,
  };
}

export default useRecensioniCarousel;
