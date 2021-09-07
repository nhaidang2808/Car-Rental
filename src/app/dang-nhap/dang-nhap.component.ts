import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css'],
})
export class DangNhapComponent implements OnInit {
  // user = { name: '', password: '' };
  //  show:boolean = false;
  //  login() {
  //   this.serverHttp.getUser().subscribe((data) => {
  //     for (let i = 0; i < data.length; i++) {
  //       if (
  //         data[i].name === this.user.name &&
  //         data[i].password === this.user.password
  //       ) {
  //         localStorage.setItem('user', JSON.stringify(data[i].name));
  //         console.log(localStorage.getItem('user'));

  //         this.router.navigate(["khachhang"]).then(() => {
  //           window.location.reload()
  //         });

  //       }
  //     }
  //   });
  // }
  form!: FormGroup;                    // {1}
  private formSubmitAttempt!: boolean;

  constructor(
    private http: HttpClient,
    private router: Router,
    private serverHttp: ProductService,
    private fb: FormBuilder,         // {3}
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({     // {5}
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  isFieldInvalid(field:string) {
    return(
      (!this.form?.get(field)?.valid && this.form?.get(field)?.touched) ||
      (this.form?.get(field)?.untouched && this.formSubmitAttempt)
    );
  }
  onSubmit() {
    if (this.form?.valid) {
      this.authService.login(this.form.value); // {7}
    }
    this.formSubmitAttempt = true;             // {8}
  }

}
