import { Component, OnInit } from '@angular/core';
import BlogService from '../../blogs/blogs.service';
import { Blog } from '../../blogs/blog.model';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-entertainment-page',
  templateUrl: './entertainment-page.component.html',
  styleUrls: ['./entertainment-page.component.css']
})
export class EntertainmentPageComponent implements OnInit {

  blogs: Blog[] = [];

  mobileImage = '../../assets/images/spurbank-images/blackpink-500x333.jpg';
  tabletImage = '../../assets/images/spurbank-images/blackpink-800x533.jpg';
  largeImage = '../../assets/images/spurbank-images/blackpink-1199x547.jpg';
  defaultImage = '../../assets/images/spurbank-images/blackpink-2400x1600.jpg';

  pageTitle = "Entertainment | Spurbank";

  constructor(private blogService: BlogService, private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.blogs = this.blogService.getBlogData();

    this.title.setTitle(this.pageTitle);

    // Update meta tags
    this.meta.updateTag({ name: 'description', content: 'Spurbank - Infinite Stories, One Platform' });
    this.meta.updateTag({ property: 'og:title', content: this.pageTitle });
    this.meta.updateTag({ property: 'og:description', content: 'Infinite Stories, One Platform' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.spurbank.info/entertainment' });
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
