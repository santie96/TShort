import { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Recensioni from "../../data/recensioni.json";
import CardRecensioni from "./layout/CardRecensioni";

const REVIEWS_PER_PAGE = 3;

function WidgetRecensioni() {
  const [slideReview, setSlideReview] = useState(0);
  const lastStartIndex = Math.max(0, Recensioni.length - REVIEWS_PER_PAGE);
  const visibleReviews = Recensioni.slice(
    slideReview,
    slideReview + REVIEWS_PER_PAGE,
  );

  const next = () => {
    setSlideReview((current) => Math.min(current + 1, lastStartIndex));
  };

  const back = () => {
    setSlideReview((current) => Math.max(current - 1, 0));
  };

  return (
    <section className="bg-[#FDFCF9]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:pb-15 md:pt-2 lg:px-8">
        <span className="mt-8 font-text text-sm uppercase text-[#C47048]">
          Recensioni
        </span>
        <h2 className="font-title text-title-size text-center font-semibold text-[#211D1A] lg:text-[2.25rem]">
          Amati dai nostri clienti
        </h2>

        <div className="mt-4 flex items-center gap-4">
          <button
            type="button"
            className="shrink-0 cursor-pointer disabled:cursor-default disabled:opacity-40"
            onClick={back}
            disabled={slideReview === 0}
            aria-label="Mostra le recensioni precedenti"
          >
            <MdArrowBackIos className="text-2xl" />
          </button>

          <div className="grid min-w-0 flex-1 grid-cols-1 gap-3 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {visibleReviews.map((review) => (
              <CardRecensioni key={review.id} {...review} />
            ))}
          </div>

          <button
            type="button"
            className="shrink-0 cursor-pointer disabled:cursor-default disabled:opacity-40"
            onClick={next}
            disabled={slideReview === lastStartIndex}
            aria-label="Mostra le recensioni successive"
          >
            <MdArrowForwardIos className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default WidgetRecensioni;
