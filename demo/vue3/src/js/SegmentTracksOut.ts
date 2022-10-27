import { Tracks } from './Tracks'
import {
  SegmentTracksOutArgs,
  MouseHandle,
} from './trackType';
// 轨道外 segment 拖拽
export class SegmentTracksOut extends Tracks {
  private segmentDelegete: HTMLElement = document.body
  private mousedownHandle: MouseHandle = (e: MouseEvent) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    if (!target) {
      return;
    }
    if (!target.classList.contains("segment-item")) {
      return;
    }
    const segment = target;
    if(this.trackCursor && this.scrollContainer){
      this.dragStart(e, this.trackCursor, this.scrollContainer, segment, true);
    }
  }
  constructor({
    trackCursor,
    scrollContainer,
    segmentDelegete,
    timeline,
    dropableCheck,
  }: SegmentTracksOutArgs) {
    if (!scrollContainer || !timeline) {
      return;
    }
    super({trackCursor, scrollContainer, timeline, dropableCheck});
    this.dropableCheck = dropableCheck;
    if(segmentDelegete){
      this.segmentDelegete = segmentDelegete;
    }
    // 代理 segment 鼠标事件
    this.segmentDelegete.addEventListener("mousedown", this.mousedownHandle);
  }
  
  destroy(){
    super.destroy()
    this.segmentDelegete.removeEventListener("mousedown", this.mousedownHandle);
  }
}