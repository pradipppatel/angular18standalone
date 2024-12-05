import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Loginmodel, User } from '../model/Loginmodel';
import { Customers } from '../model/Mastermodel';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  countervalue = signal<number>(0);
  players = signal([{'id':1, 'name':'Pradip'}]);

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

  GetAllCustomerOld(){
    return this.http.get<Customers[]>('http://localhost:3000/user?id=');
  }

  GetAllCustomer(){
    let token = '';
    let _header = new HttpHeaders().set("Authorization","bearer " + token);
    return this.http.get<Customers[]>('http://localhost:3000/user?id=',{headers:_header});
  }
}
