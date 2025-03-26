import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { TimeSegment } from "@/lib/types";
import { styled } from "styled-components";

export const TimelinePointWrapper = styled.g`
  z-index: 10;
  cursor: pointer;

  font-family: PT Sans;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0%;

  @media (max-width: 768px) {
    display: none;
  }
`;

interface TimelinePointProps {
  segment: TimeSegment;
  index: number;
  activeSegment: number;
  angleStep: number;
  radius: number;
  centerX: number;
  centerY: number;
  onClick: (index: number) => void;
  registerTextRef?: (el: SVGTextElement | null, index: number) => void;
}

export const TimelinePoint: React.FC<TimelinePointProps> = ({
  segment,
  index,
  activeSegment,
  angleStep,
  radius,
  onClick,
  registerTextRef,
}) => {
  const angle = index * angleStep; // Угол в градусах
  const angleRad = (angle * Math.PI) / 180;
  const x = radius * Math.cos(angleRad); // Без centerX
  const y = radius * Math.sin(angleRad); // Без centerY
  const isActive = activeSegment === index;

  const [isHovered, setIsHovered] = useState(false);
  const circleRef = React.useRef<SVGCircleElement | null>(null);
  const textRef = React.useRef<SVGTextElement | null>(null);

  const animatePoint = (expand: boolean) => {
    gsap.to(circleRef.current, {
      r: expand ? 28 : 3,
      duration: 0.3,
      fill: expand ? "#F4F5F9" : "#42567A",
      ease: "power2.out",
    });
    gsap.to(textRef.current, {
      opacity: expand ? 1 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    animatePoint(isActive);
  }, [isActive, activeSegment]);

  const handleMouseEnter = () => {
    if (!isActive) {
      setIsHovered(true);
      animatePoint(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isActive) {
      setIsHovered(false);
      animatePoint(false);
    }
  };

  return (
    <TimelinePointWrapper>
      <g
        onClick={() => onClick(index)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <circle
          ref={circleRef}
          cx={x}
          cy={y}
          r={isActive ? 28 : 3}
          fill={isActive ? "#F4F5F9" : "#42567A"}
          stroke="#303E5880"
          strokeWidth="1px"
        />
        <text
          ref={(el) => {
            textRef.current = el;
            if (registerTextRef) registerTextRef(el, index);
          }}
          x={x}
          y={y}
          textAnchor="middle"
          dy=".3em"
          fill="#42567A"
          opacity={isActive || isHovered ? 1 : 0}
          style={{ pointerEvents: "none" }}>
          {segment.number}
        </text>
      </g>
    </TimelinePointWrapper>
  );
};
