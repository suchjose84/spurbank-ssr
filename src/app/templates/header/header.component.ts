import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Blog } from 'src/app/blogs/blog.model';
import BlogsService from 'src/app/blogs/blogs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showSearchInput: boolean = false;
  iconState = 'search';
  isMobile: boolean = false;
  hideLogo: boolean = false;

  blogs: Blog[] = [];
  filteredBlogs: Blog[] = [];
  searchQuery: string = '';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private blogService: BlogsService
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
      });
  }

  ngOnInit() {
    this.blogs = this.blogService.getBlogData();
    this.filteredBlogs = [...this.blogs];
  }

  searchBlogs = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term => this.blogService.searchBlogs(term))
    );

  formatter = (result: Blog) => result.title;

  toggleIcon() {
    this.iconState = this.iconState === 'search' ? 'arrow' : 'search';
  }

  toggleSearchInput() {
    this.showSearchInput = !this.showSearchInput;
    this.isMobile = this.breakpointObserver.isMatched(Breakpoints.Handset);

    if (this.isMobile) {
      this.hideLogoOnMobile();
    }

    if (!this.showSearchInput) {
      this.searchQuery = '';
      this.filterBlogs();
    }
  }

  hideSearchInput() {
    if (this.isMobile) {
      this.showLogoOnMobile();
    }

    this.showSearchInput = false;
    this.searchQuery = '';
    this.filterBlogs();
  }

  filterBlogs(): void {
    if (this.searchQuery.trim() === '') {
      this.filteredBlogs = [...this.blogs];
    } else {
      this.filteredBlogs = this.blogs.filter(blog =>
        blog.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        blog.content.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
  navigateToBlog(selectedBlog: Blog): void {
    // Navigate to the selected blog's page
    this.router.navigate(['', selectedBlog.routerLink]); // Replace 'id' with the actual property used to identify blogs
    this.hideSearchInput(); // Hide the search input after selecting a blog
  }

  hideLogoOnMobile() {
    this.hideLogo = true;
  }

  showLogoOnMobile() {
    this.hideLogo = false;
  }

  openFaceBookPage() {
    window.open('https://www.facebook.com/spurbank', '_blank');
  }

  openTwitterXpage() {
    window.open('https://twitter.com/spurbankinfo', '_blank');
  }
}
