import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  // title = 'spurbankinfo';

  constructor(private renderer: Renderer2, private el: ElementRef){}

  ngAfterViewInit() {
    const headerHeight = this.el.nativeElement.querySelector('#headerWrapper').offsetHeight;
    this.renderer.setStyle(this.el.nativeElement.querySelector('main'), 'margin-top', `${headerHeight}px`);
  }


}
