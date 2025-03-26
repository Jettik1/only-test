import { styled } from "styled-components";
import TimelineButtonIcon from "@/assets/TimelineButtonIcon.svg?react";

export const StyledTimelineButtonIcon = styled(TimelineButtonIcon)`
  width: 50px;
  height: 50px;
  transition: transform 0.2s;
`;

export const StyledTimelineButton = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: none;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  transition: opacity 0.2s;

  &:hover {
    opacity: ${(props) => (props.disabled ? 0.5 : 0.8)};
  }

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

export const IconWrapper = styled.div<{ $flipped?: boolean }>`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${(props) => (props.$flipped ? "scaleX(-1)" : "none")};
  margin: 0 auto;
  padding: 0 auto;

  svg {
    width: 100%;
    height: 100%;
  }
`;
