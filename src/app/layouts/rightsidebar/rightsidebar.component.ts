import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightsidebar',
  templateUrl: './rightsidebar.component.html',
  styleUrls: ['./rightsidebar.component.scss']
})

/**
 * Rightsidebar component
 */
export class RightsidebarComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

  /**
   * Hide the sidebar
   */
  public hide() {
    document.body.classList.remove('right-bar-enabled');
  }

  enableLightMode(){
    console.log("Clicked for light menu");
    this.hide();
    document.body.setAttribute('data-sidebar', 'light');
    document.body.setAttribute('data-topbar', 'light');
  }

  enableDarkMode(){
    console.log("Clicked for dark menu");
    this.hide();
    document.body.setAttribute('data-sidebar', 'dark');
    document.body.setAttribute('data-topbar', 'dark');
    document.body.removeAttribute('data-sidebar-size');
    document.body.removeAttribute('data-layout-size');
    document.body.removeAttribute('data-keep-enlarged');
    document.body.classList.remove('vertical-collpsed');
  }

  enableRTLMode(){
    console.log("Clicked for rtl menu");
  }

}


