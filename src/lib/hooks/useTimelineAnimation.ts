import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const useTimelineAnimation = (
  groupRef: React.RefObject<SVGGElement | null>,
  segmentsLength: number,
  activeSegment: number,
  centerX: number,
  centerY: number,
  textRefs?: React.RefObject<(SVGTextElement | null)[]>
) => {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    if (groupRef.current && segmentsLength > 0) {
      const angleStep = 360 / segmentsLength;
      const targetAngle = segmentsLength % 2 === 0 ? 300 : 270; // Целевой угол для активного сегмента
      const rotationAngle = -(activeSegment * angleStep - targetAngle);

      gsap.to(groupRef.current, {
        rotation: rotationAngle,
        svgOrigin: `${centerX} ${centerY}`, // Вращение вокруг центра
        duration: 0.5,
        ease: "power2.inOut",
        onUpdate: () => {
          const currentRotation = gsap.getProperty(
            groupRef.current,
            "rotation"
          );
          if (textRefs) {
            textRefs.current.forEach((text) => {
              if (text) {
                const x = text.getAttribute("x");
                const y = text.getAttribute("y");
                gsap.set(text, {
                  attr: {
                    transform: `rotate(${-currentRotation}, ${x}, ${y})`,
                  },
                });
              }
            });
          }
        },
      });
    }
  }, [activeSegment, segmentsLength, groupRef, centerX, centerY]);
};
