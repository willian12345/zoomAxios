
import type { ISegmentContentRenderer, TSegmentConstructParams, ISegmentContentRendererClass} from '../TrackType';
import { SegmentRenderer } from './SegmentRenderer';
import { segmentRenderers } from '../SegmentRendererManager';
export class BGMRenderer extends SegmentRenderer {
  static SegmentType = 6
  constructor(params:  TSegmentConstructParams  ) {
    super(params);
    this.renderer()
  }
  renderer() {
    const div = document.createElement("div");
    div.innerHTML =`
    <div class="flex items-center text-12">
      <svg width="24" height="24" viewBox="0 0 24 24" class="ml-6">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25108 3.77214C8.69544 2.93848 10.3338 2.49974 12.0015 2.5C13.6692 2.50026 15.3074 2.93952 16.7515 3.77363C18.1956 4.60774 19.3947 5.80729 20.2282 7.25172C20.4353 7.61049 20.8939 7.73349 21.2527 7.52646C21.6115 7.31943 21.7345 6.86076 21.5274 6.502C20.5623 4.8295 19.1739 3.44054 17.5017 2.47473C15.8296 1.50892 13.9327 1.0003 12.0017 1C10.0707 0.999697 8.17367 1.50772 6.50125 2.473C4.82883 3.43828 3.43997 4.82681 2.4743 6.499C1.50862 8.1712 1.00015 10.0681 1 11.9991C0.999848 13.9301 1.50802 15.8272 2.47343 17.4995C3.43884 19.1718 4.82748 20.5606 6.49975 21.5261C8.17202 22.4917 10.069 23 12 23C12.4142 23 12.75 22.6642 12.75 22.25C12.75 21.8358 12.4142 21.5 12 21.5C10.3323 21.5 8.69402 21.061 7.24978 20.2271C5.80555 19.3932 4.60628 18.1939 3.77251 16.7496C2.93874 15.3053 2.49987 13.6669 2.5 11.9993C2.50013 10.3316 2.93926 8.69331 3.77326 7.24914C4.60725 5.80497 5.80671 4.60579 7.25108 3.77214ZM14.75 19C14.75 17.7574 15.7574 16.75 17 16.75C18.2426 16.75 19.25 17.7574 19.25 19C19.25 20.2426 18.2426 21.25 17 21.25C15.7574 21.25 14.75 20.2426 14.75 19ZM17 15.25C17.8442 15.25 18.6233 15.529 19.25 15.9997V11C19.25 10.7159 19.4105 10.4562 19.6646 10.3292C19.9187 10.2021 20.2227 10.2296 20.45 10.4L22.45 11.9C22.7814 12.1485 22.8485 12.6186 22.6 12.95C22.3515 13.2814 21.8814 13.3485 21.55 13.1L20.75 12.5V19C20.75 21.0711 19.0711 22.75 17 22.75C14.9289 22.75 13.25 21.0711 13.25 19C13.25 16.9289 14.9289 15.25 17 15.25ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" />
      </svg>
      <div class="segment-name">${this.text ?? ''}</div>
    </div>
  `;
    this.content.appendChild(div);
    this.wrapper.style.background = '#139F5C';
    return this
  }
}
segmentRenderers.add(BGMRenderer.SegmentType, BGMRenderer);