import { Component, OnInit } from '@angular/core';
import BlogService from '../../blogs/blogs.service';
import { Blog } from '../../blogs/blog.model';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit{
  blogs: Blog[] = [];

  mobileImage = '../../assets/images/spurbank-images/macys-500x333.jpg';
  tabletImage = '../../assets/images/spurbank-images/macys-800x533.jpg';
  largeImage = '../../assets/images/spurbank-images/macys-1199x547.jpg';
  defaultImage = '../../assets/images/spurbank-images/macys-2400x1600.jpg';

  blogTitle: string = "Spurbank";

  constructor(private blogService: BlogService, private meta:Meta, private title:Title){}
  
  ngOnInit() {
    this.blogs = this.blogService.getBlogData();

    // check 2 - Update tags
    this.addTags([
      { property: 'og:url', content: 'https://www.spurbank.info' },
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: 'Spurbank' },
      { property: 'og:description', content: 'Inifinite Stories, One Platform' },
      // { property: 'og:image', content: 'https://spurbank-images.s3.ap-southeast-2.amazonaws.com/yuyu-hakusho.png' }
    ]);

    this.setTitle(this.blogTitle);

  }

  private addTags(tags: { property: string, content: string }[]): void {
    tags.forEach(tag => this.meta.addTag({ property: tag.property, content: tag.content }));
  }

  private setTitle(newTitle: string): void {
    this.title.setTitle(newTitle);
  }
  

  capitalizeFirstLetter(str: string): string {
    if (typeof str === 'string' && str.length > 0) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
      return str;
    }
  }


}
