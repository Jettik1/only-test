export interface Event {
  title: string
  description: string
}

export interface TimeSegment {
  id: string
  number: number
  title: string
  yearFrom: number
  yearTo: number
  events: Event[]
}

export interface TimelineProps {
  segments: TimeSegment[]
}
