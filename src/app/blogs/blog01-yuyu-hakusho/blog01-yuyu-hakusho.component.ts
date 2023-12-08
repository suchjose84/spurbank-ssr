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
    this.meta.updateTag({ property: 'og:url', content: 'https://www.spurbank.info/yuyu-hakusho' });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:title', content: 'Yu Yu Hakusho Live-Action Adaptation: A Journey from Manga to Netflix Spectacle' });
    this.meta.updateTag({ property: 'og:description', content: 'Yuyu Hakusho Live-Action coming on Netflix' });
    this.meta.updateTag({ property: 'og:image', content: 'https://spurbank-images.s3.ap-southeast-2.amazonaws.com/yuyu-hakusho.png' });
    
    this.setTitle(this.blogTitle);
  }

  // Function to update the title dynamically based on the blog post
  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
