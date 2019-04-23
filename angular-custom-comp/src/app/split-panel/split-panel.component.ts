import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-split-panel',
  templateUrl: './split-panel.component.html',
  styleUrls: ['./split-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
      'class': 'split-example-page'
  }
})
export class SplitPanelComponent implements OnInit {
  orientation: string = 'horizontal'
  constructor() { }

  ngOnInit() {
  }

}
