import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: '/home' },
      { label: 'About', routerLink: '/about' },
      { label: 'Contact', routerLink: '/contact' },
      { label: 'Posts', routerLink: '/posts' }
    ];
  }
}
