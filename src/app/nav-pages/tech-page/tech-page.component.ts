import { Component, OnInit } from '@angular/core';
import BlogService from '../../blogs/blogs.service';
import { Blog } from '../../blogs/blog.model';

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



  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogs = this.blogService.getBlogData();

  }

  capitalizeFirstLetter(str: string): string {
    if (typeof str === 'string' && str.length > 0) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
      return str;
    }

  }

}
