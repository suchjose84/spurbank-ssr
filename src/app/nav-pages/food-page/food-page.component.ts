import { Component, OnInit } from '@angular/core';
import BlogService from '../../blogs/blogs.service';
import { Blog } from '../../blogs/blog.model';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {

  blogs: Blog[] = [];

  mobileImage = '../../assets/images/spurbank-images/bulalo-500x333.jpg';
  tabletImage = '../../assets/images/spurbank-images/bulalo-800x533.jpg';
  largeImage = '../../assets/images/spurbank-images/bulalo-1199x547.jpg';
  defaultImage = '../../assets/images/spurbank-images/bulalo-2400x1600.jpg';

  
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
