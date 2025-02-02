import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SingleUserResponse, User} from "../interfaces/single-user-response.interface";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient);
  private basePath = 'https://reqres.in/api/users';

  getUserById(id: number): Observable<User> {
    return this.http.get<SingleUserResponse>( `${this.basePath}/${id}`).pipe(
      map((response) => response.data)
    );
  }
}
