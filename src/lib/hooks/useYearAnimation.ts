import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TimeSegment } from "@/lib/types";

export const useYearAnimation = (
  yearFromRef: React.RefObject<HTMLSpanElement | null>,
  yearToRef: React.RefObject<HTMLSpanElement | null>,
  activeSegment: number,
  segments: TimeSegment[]
) => {
  const fromValue = useRef(segments[activeSegment].yearFrom);
  const toValue = useRef(segments[activeSegment].yearTo);

  useEffect(() => {
    if (!yearFromRef.current || !yearToRef.current) return;

    const newFrom = segments[activeSegment].yearFrom;
    const newTo = segments[activeSegment].yearTo;

    gsap.to(fromValue, {
      current: newFrom,
      duration: 0.5,
      ease: "power2.out",
      onUpdate: () => {
        if (yearFromRef.current) {
          yearFromRef.current.innerText = Math.round(
            fromValue.current
          ).toString();
        }
      },
      onStart: () => {
        fromValue.current = newFrom;
      },
    });

    gsap.to(toValue, {
      current: newTo,
      duration: 0.5,
      ease: "power2.out",
      onUpdate: () => {
        if (yearToRef.current) {
          yearToRef.current.innerText = Math.round(toValue.current).toString();
        }
      },
      onStart: () => {
        toValue.current = newTo;
      },
    });
  }, [activeSegment, segments]);
};
