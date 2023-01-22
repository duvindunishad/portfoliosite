import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
//import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class UserssServices {
  getCountries(): never[] {
    throw new Error('Method not implemented.');
  }

    constructor(private http: HttpClient) {}
  
    getusers(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/api/v1/users')
  }
  getUser(UsersId : string): Observable<User>{
    return this.http.get<User>(`http://localhost:3000/api/v1/Users/${UsersId}`);
  }
  createUser(UserData: FormData): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/v1/Users', UserData)
  }
  deleteUser(UsersId: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/api/v1/Users/${UsersId}`)
  }
  updateUser(User: User): Observable<User[]> {
    return this.http.put<User[]>('http://localhost:3000/api/v1/Users/:'+ User['id'], User);
  }
}
