import { useEffect, useRef, useState } from "react";
import HeroSaldi from "./HeroSaldi";
import HeroNArrivi from "./HeroNArrivi";
import HeroEssentials from "./HeroEssentials";

const realSlides = [<HeroSaldi key="saldi" />, <HeroNArrivi key="nuovi-arrivi" />, <HeroEssentials key="essentials" />];

const slides = [...realSlides, <HeroSaldi key="saldi-clone" />];
const realCount = realSlides.length;
const totalSlides = slides.length;
const slideWidthPercent = 100 / totalSlides;
const INTERVAL_MS = 5000;

function CarouselHero() {
  const [index, setIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const isResettingRef = useRef(false);
  const indexRef = useRef(0);
  const resetTimeoutRef = useRef(null);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  const resetToStart = () => {
    if (isResettingRef.current) return;
    isResettingRef.current = true;

    setEnableTransition(false);
    setIndex(0);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setEnableTransition(true);
        isResettingRef.current = false;
      });
    });
  };

  useEffect(() => {
    let intervalId = null;

    const tick = () => {
      setEnableTransition(true);
      setIndex((current) => current + 1);
    };

    const start = () => {
      stop();
      intervalId = window.setInterval(tick, INTERVAL_MS);
    };

    const stop = () => {
      if (intervalId) {
        window.clearInterval(intervalId);
        intervalId = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stop();
      } else {
        if (indexRef.current > realCount) {
          resetToStart();
        }
        start();
      }
    };

    start();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (resetTimeoutRef.current) {
      window.clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = null;
    }

    if (index === realCount) {
      resetTimeoutRef.current = window.setTimeout(() => {
        resetToStart();
      }, 900);
    }

    return () => {
      if (resetTimeoutRef.current) {
        window.clearTimeout(resetTimeoutRef.current);
        resetTimeoutRef.current = null;
      }
    };
  }, [index]);

  useEffect(() => {
    if (index > realCount) {
      resetToStart();
    }
  }, [index]);

  const handleTransitionEnd = () => {
    if (index === realCount) {
      resetToStart();
    }
  };

  return (
    <div className="relative w-full overflow-hidden min-h-[55vh] md:min-h-140">
      <div
        onTransitionEnd={handleTransitionEnd}
        className={`flex h-full ${enableTransition ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{
          width: `${totalSlides * 100}%`,
          transform: `translateX(-${Math.min(index, realCount) * slideWidthPercent}%)`,
        }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="h-full shrink-0" style={{ width: `${slideWidthPercent}%` }}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselHero;
