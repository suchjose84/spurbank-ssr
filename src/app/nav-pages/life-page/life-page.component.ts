import { Component, OnInit } from '@angular/core';
import BlogService from '../../blogs/blogs.service';
import { Blog } from '../../blogs/blog.model';


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
