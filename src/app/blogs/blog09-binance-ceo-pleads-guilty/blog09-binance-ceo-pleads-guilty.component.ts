import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog09-binance-ceo-pleads-guilty',
  templateUrl: './blog09-binance-ceo-pleads-guilty.component.html',
  styleUrls: ['./blog09-binance-ceo-pleads-guilty.component.css']
})
export class Blog09BinanceCeoPleadsGuiltyComponent implements OnInit{

  // check 1 - Update title
  pageTitle: string = "Binance CEO Pleads Guilty in $4.3 Billion Settlement | Spurbank.info";
  articleTitle: string = "Binance CEO Pleads Guilty in $4.3 Billion Settlement: A Turning Point for Cryptocurrency Regulation";
  articleDescription: string = `In a significant development, Binance's founder and CEO, Changpeng Zhao, pleaded guilty to criminal charges and
  resigned from his position as part of a $4.3 billion settlement with the Department of Justice. This resolution
  concludes a lengthy investigation into the operations of the world's largest cryptocurrency exchange.`;
  articleUrl: string = "https://www.spurbank.info/binance-ceo-pleads-guilty";
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
