import { Component, OnInit } from '@angular/core';
import BlogService from '../../blogs/blogs.service';
import { Blog } from '../../blogs/blog.model';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-life-page',
  templateUrl: './life-page.component.html',
  styleUrls: ['./life-page.component.css']
})
export class LifePageComponent implements OnInit {

  blogs: Blog[] = [];

  mobileImage = '../../assets/images/spurbank-images/solar-storm-500x280.jpg';
  tabletImage = '../../assets/images/spurbank-images/solar-storm-800x449.jpg';
  largeImage = '../../assets/images/spurbank-images/solar-storm-1199x674.jpg';
  defaultImage = '../../assets/images/spurbank-images/solar-storm-2400x1350.jpg';

  pageTitle = "Life | Spurbank";
  selectedGenre: string = "life";
  displayedBlogs: Blog[] = [];

  articleTitle: string = "Spurbank.info - Life";
  articleDescription: string = "Infinite Stories One Platform";
  articleUrl: string = "https://www.spurbank.info/business";
  articleImage: string = "placeholder";
  twitterSite: string = "spurbank_info";

  constructor(private blogService: BlogService, private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.blogs = this.blogService.getBlogData();

    this.title.setTitle(this.pageTitle);
    this.setupFacebookCard();
    this.setupTwitterCard();
    this.filterBlogs();
  }

  private setupFacebookCard(): void {
    const facebookCardMetaTags = [
      { property: 'og:title', content: this.articleTitle },
      { property: 'og:description', content: this.articleDescription },
      { property: 'og:url', content: this.articleUrl },
      { property: 'og:type', content: 'article' },
      { property: 'og:image', content: this.articleImage }
    ];

    facebookCardMetaTags.forEach(tag => {
      this.meta.updateTag({ property: tag.property, content: tag.content });
    });
  }

  private setupTwitterCard(): void {
    const twitterCardMetaTags = [
      { name: 'twitter:title', content: this.articleTitle },
      { name: 'twitter:description', content: this.articleDescription },
      { name: 'twitter:url', content: this.articleUrl },
      { name: 'twitter:image', content: this.articleImage }
    ];

    twitterCardMetaTags.forEach(tag => {
      this.meta.updateTag({ name: tag.name, content: tag.content });
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

  capitalizeFirstLetter(str: string): string {
    if (typeof str === 'string' && str.length > 0) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
      return str;
    }
  }

  private encodeURIComponent(uri: string): string {
    return encodeURIComponent(uri).replace(/[!'()*]/g, (c) => {
      return '%' + c.charCodeAt(0).toString(16);
    });
  }

  private filterBlogs(): void {
    let count = 0;
    this.displayedBlogs = this.blogs
      .filter(blog => {
        const isCorrectGenre = blog.genre.toLowerCase() === this.selectedGenre.toLowerCase();
        return isCorrectGenre && count < 10;
      })
      .sort((a, b) => {
        // Convert string dates to Date objects for comparison
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
  
        // Sort in descending order
        return dateB.getTime() - dateA.getTime();
      });
  }

  formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }


}
