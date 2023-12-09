import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog08-cz-resigns',
  templateUrl: './blog08-cz-resigns.component.html',
  styleUrls: ['./blog08-cz-resigns.component.css']
})
export class Blog08CzResignsComponent implements AfterViewInit, OnInit{

  // check 1 - Update title
  pageTitle: string = "CZ Bids Farewell | Spurbank.info";
  articleTitle: string = "CZ Bids Farewell: A New Chapter for Binance Under Richard Teng's Leadership";
  articleDescription: string = `In a surprising turn of events, Changpeng Zhao, commonly known as CZ, announced his resignation as the CEO of
  Binance. In a tweet, CZ expressed the emotional difficulty of stepping down but emphasized that it is the right
  decision for the community, the exchange, and himself.`;
  articleUrl: string = "https://www.spurbank.info/cz-resigns-binance";
  articleImage: string = "placeholder";
  twitterSite: string = "spurbank_info";

  constructor(private meta: Meta, private title: Title) { }

  ngAfterViewInit(): void { 
    (<any>window).twttr.widgets.load();
  }

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
