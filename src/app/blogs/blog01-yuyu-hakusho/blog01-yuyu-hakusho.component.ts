import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog01-yuyu-hakusho',
  templateUrl: './blog01-yuyu-hakusho.component.html',
  styleUrls: ['./blog01-yuyu-hakusho.component.css']
})
export class Blog01YuyuHakushoComponent implements OnInit {
  blogTitle: string = "Yu Yu Hakusho | Spurbank.info";

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    // Update meta tags for the home page
    this.meta.addTags([
      { name: 'Spurbank', content: 'Spurbank.info' },
      // { name: 'description', content: 'Description for your home page.' },
      { property: 'og:url', content: 'https://www.spurbank.info/yuyu-hakusho'},
      { property: 'og:type', content: 'Article' },
      { property: 'og:title', content: 'The Rock' },
      // { property: 'og:description', content: 'The Rock. So and so.' },
      { property: 'og:image', content: 'https://www.spurbank.info/src/assets/images/spurbank-images/yuyu-hakusho2.png' }
      // Add more meta tags as needed
    ]);

    this.setTitle(this.blogTitle);
  }

  // Function to update the title dynamically based on the blog post
  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
