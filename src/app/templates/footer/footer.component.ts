import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  openFaceBookPage() {
    window.open('https://www.facebook.com/spurbank', '_blank');
  }
  openTwitterXpage() {
    window.open('https://twitter.com/spurbankinfo', '_blank');
  }

}
