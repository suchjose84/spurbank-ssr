import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog01-yuyu-hakusho',
  templateUrl: './blog01-yuyu-hakusho.component.html',
  styleUrls: ['./blog01-yuyu-hakusho.component.css']
})
export class Blog01YuyuHakushoComponent implements OnInit {

  // check 1 - Update title
  blogTitle: string = "Yu Yu Hakusho | Spurbank.info";

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    // check 2 - Update tags
    this.addTags([
      { property: 'og:url', content: 'https://www.spurbank.info/yuyu-hakusho' },
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: 'Yu Yu Hakusho Live-Action Adaptation: A Journey from Manga to Netflix Spectacle' },
      { property: 'og:description', content: 'Yuyu Hakusho Live-Action coming on Netflix' },
      { property: 'og:image', content: 'https://spurbank-images.s3.ap-southeast-2.amazonaws.com/yuyu-hakusho.png' }
    ]);

    this.setTitle(this.blogTitle);
  }

  private addTags(tags: { property: string, content: string }[]): void {
    tags.forEach(tag => this.meta.addTag({ property: tag.property, content: tag.content }));
  }

  private setTitle(newTitle: string): void {
    this.title.setTitle(newTitle);
  }
}

