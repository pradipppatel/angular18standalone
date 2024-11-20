import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loginmodel, User } from '../model/Loginmodel';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  ProceedLogin(_data: Loginmodel) {
    return this.http.get<User[]>('http://localhost:3000/user?id=' + _data.username + '&password=' + _data.password);
  }

  ProceedRegister(_data: User) {
    return this.http.post('http://localhost:3000/user', _data);
  }

  IsLoggedIn() {
    return localStorage.getItem('username') != null;
  }
}
