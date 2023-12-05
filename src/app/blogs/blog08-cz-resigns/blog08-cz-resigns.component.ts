import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-blog08-cz-resigns',
  templateUrl: './blog08-cz-resigns.component.html',
  styleUrls: ['./blog08-cz-resigns.component.css'],
  template: `<twitter-timeline
              [sourceType]="'url'"
              [url]="tweetUrl">
            </twitter-timeline>`
})
export class Blog08CzResignsComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    
    (<any>window).twttr.widgets.load();

  }

}
