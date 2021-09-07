import { ThrowStmt } from '@angular/compiler';
import { ChangeDetectorRef, Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import {NgZone} from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //  isShow: boolean = false;

  constructor(private router: Router) {}
  ngOnInit(): void {
    // this.isShow = false;
    // this.readLocalStorageValue();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  // readLocalStorageValue() {
  //   if (
  //     localStorage.getItem('user') == '' ||
  //     localStorage.getItem('user') == null ||
  //     localStorage.getItem('user') == undefined
  //   ) {
  //     this.isShow = false;
  //     this.router.navigate(['dangnhap'])

  //   } else {
  //     this.isShow = true


  //   }

  // }


  // readLocalStorageValue() {
  // return localStorage.getItem('user');


  // }
  title = 'project1';
}
// function key(key: any) {
//   throw new Error('Function not implemented.');
// }

