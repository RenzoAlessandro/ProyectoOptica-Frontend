import { Component, OnInit, AfterViewInit } from '@angular/core';

import { EventService } from '../core/services/event.service';

import { LAYOUT_VERTICAL } from './layouts.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  // layout related config
  layoutType: string;
  constructor(private eventService: EventService) { }

  ngOnInit() {
    // default settings
    this.layoutType = LAYOUT_VERTICAL;
    // listen to event and change the layout, theme, etc
    this.eventService.subscribe('changeLayout', (layout) => {
      this.layoutType = layout;
    });
  }

  ngAfterViewInit() {
  }
  
  /**
   * Check if the vertical layout is requested
   */
  isVerticalLayoutRequested() {
    return this.layoutType === LAYOUT_VERTICAL;
  }
}
