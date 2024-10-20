import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Array<{ name: string, url: string }> = [];

  constructor(private router: Router) {}

  ngOnInit() {
     this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.buildBreadcrumb();
    });
  }

   buildBreadcrumb() {
    const rootUrl = '/';
    const segments = this.router.url.split('/').filter(segment => segment);
    this.breadcrumbs = [];

     this.breadcrumbs.push({ name: 'Home', url: rootUrl });

     let path = '';
    segments.forEach(segment => {
      path += `/${segment}`;
      this.breadcrumbs.push({ name: this.capitalize(segment), url: path });
    });
  }

   capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
