import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  closeNavbar() {
    this.isNavbarOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const navbar = document.querySelector('.navbar');
    if (navbar && !navbar.contains(event.target as Node)) {
      this.closeNavbar();
    }
  }

  onNavbarClick(event: Event) {
    event.stopPropagation(); // Prevent the click event from reaching the document click handler

  }

}
