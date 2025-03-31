import { FC } from "react";
import { TimeSegment } from "@/lib/types";
import {
  MobileTimelineContainer,
  TimelinePoint,
} from "./MobileTimelinePoints.styles";

interface MobileTimelinePointsProps {
  segments: TimeSegment[];
  activeSegment: number;
  onChangeSegment: (index: number) => void;
}

const MobileTimelinePoints: FC<MobileTimelinePointsProps> = ({
  segments,
  activeSegment,
  onChangeSegment,
}) => {
  return (
    <MobileTimelineContainer>
      {segments.map((_, index) => (
        <TimelinePoint
          key={index}
          active={index === activeSegment}
          onClick={() => onChangeSegment(index)}
        />
      ))}
    </MobileTimelineContainer>
  );
};

export default MobileTimelinePoints;
