import {Component, signal} from '@angular/core';
import {User} from "../../interfaces/single-user-response.interface";

@Component({
    templateUrl: './properties-page.component.html',
    standalone: false
})
export class PropertiesPageComponent {

  public user = signal<User>({
    id: 1,
    email: 'johndoe@test.com',
    first_name: 'John',
    last_name: 'Doe',
    avatar: 'johndoe'
  });

  onFieldUpdated(field: keyof User, value: string) {

    this.user.update(current => {
      switch (field) {
        case 'email':
          current.email = value;
          break;
        case "first_name":
          current.first_name = value;
          break;
        case "last_name":
          current.last_name = value;
          break;
      }

      return current;
    })
  }
}
