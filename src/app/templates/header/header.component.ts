import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('iconAnimation', [
      state('search', style({ opacity: 1 })),
      state('arrow', style({ opacity: 0 })),
      transition('search => arrow', animate('500ms')),
      transition('arrow => search', animate('500ms')),
    ]),
  ],
})
export class HeaderComponent {
  showSearchInput: boolean = false;
  iconState = 'search';
  isMobile: boolean = false;
  hideLogo: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    // Subscribe to the media query for mobile view
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
      });
  }

  toggleIcon() {
    this.iconState = this.iconState === 'search' ? 'arrow' : 'search';
  }
  toggleSearchInput() {
    this.showSearchInput = !this.showSearchInput;
    this.isMobile = this.breakpointObserver.isMatched(Breakpoints.Handset); // Update isMobile based on the current screen size
    if (this.isMobile) {
      this.hideLogoOnMobile();
    }
  }

  hideSearchInput() {
    this.showSearchInput = false;
    if (this.isMobile) {
      // Show the image when the arrow icon is clicked in mobile view
      this.showLogoOnMobile();
    }
  }

  hideLogoOnMobile() {
    // Implement logic to hide the image on mobile view
    this.hideLogo = true;

  }

  showLogoOnMobile() {
    // Implement logic to show the image on mobile view
    this.hideLogo = false;
  }

  // openExternalLink(url: string) {
  //   // For external links
  //   window.open(url, '_blank');
  // }

  openFaceBookPage() {
    window.open('https://www.facebook.com/spurbank', '_blank');
  }
  openTwitterXpage() {
    window.open('https://twitter.com/spurbankinfo', '_blank');
  }




}
