import {Component, computed, inject, OnInit, signal} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {User} from "../../interfaces/single-user-response.interface";

@Component({
  templateUrl: './user-info-page.component.html',
})
export class UserInfoPageComponent implements  OnInit{
  private userService = inject(UsersService);

  public userId = signal(1);
  public currentUser = signal<User | undefined>(undefined);
  public isUserFound = signal(true);
  public fullName = computed<string>(() => {
    if(!this.currentUser()) return 'User not found';
    return `${ this.currentUser()?.first_name } ${ this.currentUser()?.last_name }`
  });

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number): void {
    if (this.userId() <= 0 ) return;
    this.currentUser.set(undefined);
    this.userId.set(id);
    this.userService.getUserById(id).subscribe( {
      next: (user) => {
        this.currentUser.set(user);
        this.isUserFound.set(true);
      },
      error: () => {
        this.currentUser.set(undefined);
        this.isUserFound.set(false)
      }
    });
  }
}
