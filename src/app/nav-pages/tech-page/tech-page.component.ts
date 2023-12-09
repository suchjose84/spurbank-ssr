import { Component, OnInit } from '@angular/core';
import BlogService from '../../blogs/blogs.service';
import { Blog } from '../../blogs/blog.model';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tech-page',
  templateUrl: './tech-page.component.html',
  styleUrls: ['./tech-page.component.css']
})
export class TechPageComponent {

  blogs: Blog[] = [];

  mobileImage = '../../assets/images/spurbank-images/spaceX-500x333.jpg';
  tabletImage = '../../assets/images/spurbank-images/spaceX-500x333.jpg';
  largeImage = '../../assets/images/spurbank-images/spaceX-1199x547.jpg';
  defaultImage = '../../assets/images/spurbank-images/spaceX-2400x1600.jpg';

  pageTitle = "Tech | Spurbank";

  constructor(private blogService: BlogService, private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.blogs = this.blogService.getBlogData();

    this.title.setTitle(this.pageTitle);

    // Update meta tags
    this.meta.updateTag({ name: 'description', content: 'Spurbank - Infinite Stories, One Platform' });
    this.meta.updateTag({ property: 'og:title', content: this.pageTitle });
    this.meta.updateTag({ property: 'og:description', content: 'Infinite Stories, One Platform' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.spurbank.info/tech' });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
  }

  capitalizeFirstLetter(str: string): string {
    if (typeof str === 'string' && str.length > 0) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
      return str;
    }
  }

}
