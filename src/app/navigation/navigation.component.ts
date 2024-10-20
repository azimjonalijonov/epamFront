import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isMobileNavOpen: boolean = false;   

   navItems = [
    { name: 'Home', path: '/home', isActive: true },
    { name: 'About', path: '/about', isActive: false },
    { name: 'Services', path: '/services', isActive: false },
    { name: 'Contact', path: '/contact', isActive: false }
  ];

   toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

   setActive(item: any) {
    this.navItems.forEach(i => i.isActive = false);
    item.isActive = true;
  }
}
  