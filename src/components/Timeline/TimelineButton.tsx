import React from "react";
import { StyledTimelineButton } from "@/components/Timeline/TimelineButton.styles";

const TIMELINE_BUTTON_ICON_SRC = "/assets/TimelineButtonIcon.svg";

interface TimelineButtonProps {
  onClick: () => void;
  disabled?: boolean;
  flipped?: boolean;
}

export const TimelineButton: React.FC<TimelineButtonProps> = ({
  onClick,
  disabled,
  flipped,
}) => {
  console.log("Image path:", TIMELINE_BUTTON_ICON_SRC);

  return (
    <StyledTimelineButton
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      $flipped={flipped}>
      <img src={TIMELINE_BUTTON_ICON_SRC} />
    </StyledTimelineButton>
  );
};
