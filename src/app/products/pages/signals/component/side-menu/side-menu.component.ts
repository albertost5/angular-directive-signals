import {Component, signal} from '@angular/core';

export interface MenuItem {
  title: string;
  route: string;
}

@Component({
    selector: 'side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css'],
    standalone: false
})
export class SideMenuComponent {
  public menuItems = signal<MenuItem[]>([
    { title: 'Counter', route: 'counter' },
    { title: 'User', route: 'user-info' },
    { title: 'Properties', route: 'properties' }
  ]);
}
