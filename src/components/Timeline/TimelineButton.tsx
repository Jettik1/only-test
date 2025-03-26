import React from "react";
import {
  StyledTimelineButtonIcon,
  StyledTimelineButton,
  IconWrapper,
} from "@/components/Timeline/TimelineButton.styles";

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
  return (
    <StyledTimelineButton
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}>
      <IconWrapper $flipped={flipped}>
        <svg viewBox="0 0 50 50">
          <StyledTimelineButtonIcon />
        </svg>
      </IconWrapper>
    </StyledTimelineButton>
  );
};
