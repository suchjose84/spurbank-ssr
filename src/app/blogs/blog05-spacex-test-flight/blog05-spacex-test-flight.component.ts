import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog05-spacex-test-flight',
  templateUrl: './blog05-spacex-test-flight.component.html',
  styleUrls: ['./blog05-spacex-test-flight.component.css']
})
export class Blog05SpacexTestFlightComponent implements OnInit{

  // check 1 - Update title
  pageTitle: string = "SpaceX's Starship Test Flight: Challenges and Opportunities | Spurbank.info";
  articleTitle: string = "SpaceX's Starship Test Flight: Challenges and Opportunities";
  articleDescription: string = `BOCA CHICA, Texas/NEW YORK, Nov 18 - SpaceX's uncrewed spacecraft Starship, designed for lunar and interplanetary
  missions, experienced a setback during its second test flight, cutting short its mission but surpassing the
  outcome of a previous attempt that ended in an explosion.`;
  articleUrl: string = "https://www.spurbank.info/spacex-test-flight";
  articleImage: string = "placeholder";
  twitterSite: string = "spurbank_info";

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);

    this.setupFacebookCard();
    this.setupTwitterCard();
  }

  private setupFacebookCard(): void {
    const facebookCardMetaTags = [
      { property: 'og:title', content: this.articleTitle },
      { property: 'og:description', content: this.articleDescription },
      { property: 'og:url', content: this.articleUrl },
      { property: 'og:type', content: 'article' },
      { property: 'og:image', content: this.articleImage}
    ];

    facebookCardMetaTags.forEach(tag => {
      this.meta.updateTag({ property: tag.property, content: tag.content});

    });
  }

  private setupTwitterCard(): void {
    const twitterCardMetaTags = [
      { name: 'twitter:title', content: this.articleTitle },
      { name: 'twitter:description', content: this.articleDescription },
      { name: 'twitter:url', content: this.articleUrl },
      { name: 'twitter:image', content: this.articleImage }
    ];
  
    // Update Twitter meta tags using updateTag method
    twitterCardMetaTags.forEach(tag => {
      this.meta.updateTag({ name: tag.name, content: tag.content });
    });
  }  

  private encodeURIComponent(uri: string): string {
    return encodeURIComponent(uri).replace(/[!'()*]/g, (c) => {
      return '%' + c.charCodeAt(0).toString(16);
    });
  }

  createTwitterPost(): void {

    const encodedText = this.encodeURIComponent(this.articleTitle);
    const encodedImageUrl = this.encodeURIComponent(this.articleUrl);
    const encodedAccount = this.encodeURIComponent(this.twitterSite);
  
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedText}&via=${encodedAccount}&url=${encodedImageUrl}`;
  
    // Open Twitter in a new window or tab
    window.open(twitterUrl, '_blank');
  }

}
