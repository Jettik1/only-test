import React from "react";
import { ButtonsContainer } from "@/components/Timeline/TimelineNavigationButton.styles";
import { TimelineButton } from "./TimelineButton";

interface TimelineNavigationButton {
  activeSegment: number;
  setActiveSegment: (index: number) => void;
  totalSegments: number;
}

export const TimelineNavigationButton: React.FC<TimelineNavigationButton> = ({
  activeSegment,
  setActiveSegment,
  totalSegments,
}) => {
  const handlePrev = () => {
    if (activeSegment > 0) {
      setActiveSegment(activeSegment - 1);
    }
  };

  const handleNext = () => {
    if (activeSegment < totalSegments - 1) {
      setActiveSegment(activeSegment + 1);
    }
  };

  return (
    <ButtonsContainer>
      <TimelineButton onClick={handlePrev} disabled={activeSegment === 0} />
      <TimelineButton
        onClick={handleNext}
        disabled={activeSegment === totalSegments - 1}
        flipped
      />
    </ButtonsContainer>
  );
};
