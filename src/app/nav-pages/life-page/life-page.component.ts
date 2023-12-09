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

  constructor(private blogService: BlogService, private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.blogs = this.blogService.getBlogData();

    this.title.setTitle(this.pageTitle);

    // Update meta tags
    this.meta.updateTag({ name: 'description', content: 'Spurbank - Infinite Stories, One Platform' });
    this.meta.updateTag({ property: 'og:title', content: this.pageTitle });
    this.meta.updateTag({ property: 'og:description', content: 'Infinite Stories, One Platform' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.spurbank.info/life' });
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
