import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isMobileNavOpen: boolean = false;  // To toggle mobile nav visibility

  // Hardcoded navigation items
  navItems = [
    { name: 'Home', path: '/home', isActive: true },
    { name: 'About', path: '/about', isActive: false },
    { name: 'Services', path: '/services', isActive: false },
    { name: 'Contact', path: '/contact', isActive: false }
  ];

  // Toggle mobile navigation open/close
  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  // Set active state on navigation item click
  setActive(item: any) {
    this.navItems.forEach(i => i.isActive = false);
    item.isActive = true;
  }
}
