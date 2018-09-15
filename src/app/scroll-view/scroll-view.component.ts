import { Component, Input } from '@angular/core';

/*
  <kpd-scroll-view>
    <div header
      ... // Fixed div at top
    </div>
    <div content>
      ... // scrollabe div that fills screen
    </div>
    <div footer>
      ... // Fixed div at bottom
    </div>
  </kpd-scroll-view>
 */

@Component({
  selector: 'app-scroll-view',
  templateUrl: './scroll-view.component.html',
  styleUrls: ['./scroll-view.component.scss']
})
export class ScrollViewComponent {
  @Input()
  scrollBorder = true;
}