import { Component, OnInit } from '@angular/core';
import BlogService from '../../blogs/blogs.service';
import { Blog } from '../../blogs/blog.model';

@Component({
  selector: 'app-entertainment-page',
  templateUrl: './entertainment-page.component.html',
  styleUrls: ['./entertainment-page.component.css']
})
export class EntertainmentPageComponent {

  blogs: Blog[] = [];

  mobileImage = '../../assets/images/spurbank-images/blackpink-500x333.jpg';
  tabletImage = '../../assets/images/spurbank-images/blackpink-800x533.jpg';
  largeImage = '../../assets/images/spurbank-images/blackpink-1199x547.jpg';
  defaultImage = '../../assets/images/spurbank-images/blackpink-2400x1600.jpg';

  

  constructor(private blogService: BlogService){}
  
  
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
