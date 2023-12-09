import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog07-solar-storm',
  templateUrl: './blog07-solar-storm.component.html',
  styleUrls: ['./blog07-solar-storm.component.css']
})
export class Blog07SolarStormComponent implements OnInit{

  // check 1 - Update title
  pageTitle: string = "What If a Massive Solar Storm Struck Earth? | Spurbank.info";
  articleTitle: string = "Envisioning the Unthinkable: What If a Massive Solar Storm Struck Earth?";
  articleDescription: string = `In the vast cosmic dance between celestial bodies, the sun is both our life-giver and, potentially, our
  disruptor. Imagine a scenario where the sun, our constant celestial companion, unleashes a colossal solar storm towards Earth.`;
  articleUrl: string = "https://www.spurbank.info/solar-storm";
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
