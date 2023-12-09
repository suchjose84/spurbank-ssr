import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog10-nasa-thanksgiving2023',
  templateUrl: './blog10-nasa-thanksgiving2023.component.html',
  styleUrls: ['./blog10-nasa-thanksgiving2023.component.css']
})

//check 0 - implement OnInit
export class Blog10NasaThanksgiving2023Component implements OnInit{

  // check 1 - Update title
  pageTitle: string = "NASA Thanksgiving 2023 | Spurbank.info";
  articleTitle: string = "NASA Thanksgiving 2023: A Cosmic Celebration from Expedition 70 Crew Members";
  articleDescription: string = `In a heartwarming and unprecedented gesture, the crew members of Expedition 70, representing international
  collaboration in space exploration, beamed down a special Thanksgiving message from the cosmos.`;
  articleUrl: string = "https://www.spurbank.info/nasa-thanksgiving-2023";
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
