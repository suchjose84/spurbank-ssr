import { Component, OnInit, } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog02-macys-parade2023',
  templateUrl: './blog02-macys-parade2023.component.html',
  styleUrls: ['./blog02-macys-parade2023.component.css']
})
export class Blog02MacysParade2023Component implements OnInit{

  // check 1 - Update title
  pageTitle: string = "Macy's Thanksgiving Day Parade 2023 | Spurbank.info";
  articleTitle: string = "Macy's Thanksgiving Day Parade 2023: A Spectacular Display of Tradition and Innovation";
  articleDescription: string = `As families across the United States gathered to celebrate Thanksgiving on November 23, 2023, the Macy's
  Thanksgiving Day Parade once again took center stage in New York City, captivating audiences with its grandeur and
  festive spirit. The 97th edition of this iconic parade continued the tradition of blending timeless classics with
  innovative elements, creating a spectacle that delighted spectators both on the streets of Manhattan and in living
  rooms around the nation.`;
  articleUrl: string = "https://www.spurbank.info/macys-parade2023";
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
