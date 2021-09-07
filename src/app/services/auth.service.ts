import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../class/user';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private loggedIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private loggedIn = new BehaviorSubject<boolean>(this.tokenAvailable());
  private tokenAvailable(): boolean {
    return !!localStorage.getItem('token');
    }
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  constructor(private router: Router,
    private serverHttp: ProductService) { }
  login(user: User){
    this.serverHttp.getUser().subscribe((data) => {
      for(let i = 0; i<data.length; i++) {
        if(
          data[i].name === user.userName &&
          data[i].password === user.password
        ) {
          this.loggedIn.next(true);
          localStorage.setItem('token', 'true');
          this.router.navigate(['/'])
        }
      }
    })
  }
  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
