import { useRef, useState } from "react";
import { TimelineProps } from "./lib/types";
import { useTimelineAnimation } from "./lib/hooks/useTimelineAnimation";
import {
  CounterWrapper,
  SVGCircle,
  TimelineWrapper,
  CenteredSVG,
  ContentWrapper,
  Title,
  YearsContainer,
  /*   FirstYear,
  SecondYear, */
  TimelinePointLabel,
  Separator,
  CounterContainer,
} from "./styles/styles";
import { TimelinePoint } from "./components/Timeline/TimelinePoint";
import "swiper/css";
import Slider from "./components/Slider/Slider";
import { TimelineNavigationButton } from "./components/Timeline/TimelineNavigationButton";
import { useLabelAnimation } from "./lib/hooks/useLabelAnimation";
import { useYearAnimation } from "./lib/hooks/useYearAnimation";
import MobileTimelinePoints from "./components/MobileTimelinePoints/MobileTimelinePoints";

const Timeline: React.FC<TimelineProps> = ({ segments }) => {
  const [activeSegment, setActiveSegment] = useState(0);
  const labelRef = useRef<HTMLDivElement | null>(null);
  const groupRef = useRef<SVGGElement | null>(null);
  const textRefs = useRef<(SVGTextElement | null)[]>([]);
  const yearFromRef = useRef<HTMLSpanElement | null>(null);
  const yearToRef = useRef<HTMLSpanElement | null>(null);

  const radius = 265;
  const centerX = 820;
  const centerY = 480;
  const angleStep = 360 / segments.length;

  useYearAnimation(yearFromRef, yearToRef, activeSegment, segments);

  useTimelineAnimation(
    groupRef,
    segments.length,
    activeSegment,
    centerX,
    centerY,
    textRefs
  );

  // Анимация смены текста через GSAP
  useLabelAnimation(labelRef, activeSegment, segments);

  const registerTextRef = (el: SVGTextElement | null, index: number) => {
    textRefs.current[index] = el;
  };

  return (
    <TimelineWrapper centerX={centerX} centerY={centerY}>
      <CenteredSVG>
        <SVGCircle viewBox="524 185 590 590">
          <circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke="#ccc"
          />
          <g ref={groupRef} transform={`translate(${centerX}, ${centerY})`}>
            {segments.map((segment, index) => (
              <TimelinePoint
                key={segment.id}
                segment={segment}
                index={index}
                activeSegment={activeSegment}
                angleStep={angleStep}
                radius={radius}
                centerX={centerX}
                centerY={centerY}
                onClick={setActiveSegment}
                registerTextRef={registerTextRef}
              />
            ))}
          </g>
        </SVGCircle>
      </CenteredSVG>

      <TimelinePointLabel ref={labelRef}>
        {
          segments[activeSegment]
            .title /* не важно какой тут текст, через ref управляем в useLabelAnimation, но если оставить без текста слетает позиционирование */
        }
      </TimelinePointLabel>

      <ContentWrapper>
        <Title>{"Исторические даты"}</Title>

        <YearsContainer>
          <span ref={yearFromRef}>{segments[activeSegment].yearFrom}</span>
          <span ref={yearToRef}>{segments[activeSegment].yearTo}</span>
        </YearsContainer>

        <CounterContainer>
          <CounterWrapper>
            0{activeSegment + 1}/0{segments.length}
            <TimelineNavigationButton
              activeSegment={activeSegment}
              setActiveSegment={setActiveSegment}
              totalSegments={segments.length}
            />
          </CounterWrapper>
        </CounterContainer>

        <MobileTimelinePoints
          segments={segments}
          activeSegment={activeSegment}
          onChangeSegment={setActiveSegment}
        />

        <Separator />

        <Slider segments={segments} activeSegment={activeSegment} />
      </ContentWrapper>
    </TimelineWrapper>
  );
};

export default Timeline;
