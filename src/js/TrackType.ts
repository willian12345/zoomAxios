
import { CursorPointer } from "./CursorPointer";
import { TimelineAxis } from "./TimelineAxis";
import { Tracks } from "./Tracks";
export enum SegmentType {
  BODY_ANIMATION,
  FACE_ANIMATION,
}
export enum TRACKS_EVENT_CALLBACK_TYPES {
  DRAG_END,
}
export interface SegmentBasicInfo {
  trackId: string, segmentId: string, startFrame: number, endFrame: number
}
export interface TracksEventCallback {
  (instance:Tracks, eventType: TRACKS_EVENT_CALLBACK_TYPES, segment?: SegmentBasicInfo): any
}


export type DropableArgs = {
  dropable: boolean
  segmentName: string
  segmentData?: {
    duration: number
    endFrame: number
    keys: []
    rowIndex: number
    sectionId: string
    startFrame: number
    state: number
    trackId: string
  }
}
export interface DropableCheck {
  (trackId: string, startFrame: number): Promise<DropableArgs>
}
export interface DeleteableCheck{
  (trackId: string, sectionId: string): Promise<boolean>
}
export interface TracksArgs {
  trackCursor: CursorPointer
  scrollContainer: HTMLElement
  timeline: TimelineAxis
  dropableCheck?: DropableCheck
  deleteableCheck?: DeleteableCheck
  ondragover?:any
  ondrop?:any
}
export interface SegmentTracksArgs  extends TracksArgs{
  deleteableCheck?: DeleteableCheck
}
export interface SegmentTracksOutArgs extends TracksArgs {
  segmentDelegete: HTMLElement
  dropableCheck?: DropableCheck
}

export interface MouseHandle {
  (e: MouseEvent):void
}
export interface DragingArgs {
  e: MouseEvent, 
  isCopySegment: boolean,
  scrollContainerX: number, 
  segment: HTMLElement, 
  dragTrackContainerRect: DOMRect, 
  tracks: HTMLElement[],
}
export interface DropArgs {
  e: MouseEvent, 
  x: number, 
  segment: HTMLElement, 
  track: HTMLElement, 
  tracks: HTMLElement[], 
  isCopySegment: boolean, 
}