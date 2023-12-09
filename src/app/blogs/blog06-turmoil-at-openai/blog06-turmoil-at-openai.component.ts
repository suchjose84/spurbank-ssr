import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog06-turmoil-at-openai',
  templateUrl: './blog06-turmoil-at-openai.component.html',
  styleUrls: ['./blog06-turmoil-at-openai.component.css']
})
export class Blog06TurmoilAtOpenaiComponent implements OnInit{

  // check 1 - Update title
  pageTitle: string = "Turmoil at OpenAI | Spurbank.info";
  articleTitle: string = "Turmoil at OpenAI: Leadership Shake-up Raises Questions About the Future";
  articleDescription: string = `San Francisco, Nov 20 - In a surprising turn of events, OpenAI, the trailblazing organization at the
  forefront of the artificial intelligence boom, has named ex-Twitch boss Emmett Shear as interim CEO. Outgoing
  chief Sam Altman, in an unexpected move, transitioned to supporter Microsoft (MSFT.O), leaving the startup in a
  state of uncertainty.`;
  articleUrl: string = "https://www.spurbank.info/turmoil-at-openai";
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
