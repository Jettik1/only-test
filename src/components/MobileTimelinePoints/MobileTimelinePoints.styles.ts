import { styled } from "styled-components";

export const MobileTimelineContainer = styled.div`
  position: absolute;
  width: 86px;
  height: 6px;
  bottom: 10px;
  left: 117px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 769px) {
    display: none; /* Скрываем на больших экранах */
  }
`;

export const TimelinePoint = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>`
  width: 6px;
  height: 6px;
  background-color: #42567a;
  border-radius: 50%;
  opacity: ${({ active }) => (active ? 1 : 0.4)};
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;
