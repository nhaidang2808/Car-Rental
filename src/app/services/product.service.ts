import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'
import { Hopdong } from '../class/hopdong.model';
import { KhachHang } from '../class/khach-hang.model';
import { Xe } from '../class/xe.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    //  Authorization:'my-auth-token',
    })
  }
  private REST_API_SERVER = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}


  getKhachHang(): Observable<any> {
    const url = `${this.REST_API_SERVER}/khachhang`;
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe(catchError(this.handleError));
  }
  getHopDong(): Observable<any> {
    const url = `${this.REST_API_SERVER}/hopdongthue`;
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe(catchError(this.handleError));
  }
  getXe(): Observable<any> {
    const url = `${this.REST_API_SERVER}/xe`;
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  get1KhachHang(khachhangId:number) {
    const url = `${this.REST_API_SERVER}/khachhang/` + khachhangId;
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe(catchError(this.handleError));
  }
  get1HopDong(hopdongId:number) {
    const url = `${this.REST_API_SERVER}/hopdongthue/` + hopdongId;
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe(catchError(this.handleError));
  }
  get1Xe(xeId:number) {
    const url = `${this.REST_API_SERVER}/xe/` + xeId;
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe(catchError(this.handleError));
  }
  postKhachHang(payload: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/khachhang`;
    return this.httpClient
    .post<any>(url, payload ,this.httpOptions)
    .pipe(catchError(this.handleError));
  }
  postHopDong(payload: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/hopdongthue`;
    return this.httpClient
    .post<any>(url, payload ,this.httpOptions)
    .pipe(catchError(this.handleError));
  }
  postXe(payload: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/xe`;
    return this.httpClient
    .post<any>(url, payload ,this.httpOptions)
    .pipe(catchError(this.handleError));
  }
  getTotalKhachHang():Observable<any> {
    const url = `${this.REST_API_SERVER}/khachhang`;
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe(catchError(this.handleError));
  }
  getTotalHopDong():Observable<any> {
    const url = `${this.REST_API_SERVER}/hopdongthue`;
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe(catchError(this.handleError));
  }
  getTotalXe():Observable<any> {
    const url = `${this.REST_API_SERVER}/xe`;
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe(catchError(this.handleError));
  }
  delKhachHang(khachhangId: number, hoten: string){
    const url = `${this.REST_API_SERVER}/khachhang/` + khachhangId;
    return this.httpClient
    .delete<any>(url)
    .pipe(catchError(this.handleError));
  }

  delXe(xeId: number, tenxe: string){
    const url = `${this.REST_API_SERVER}/xe/` + xeId;
    return this.httpClient
    .delete<any>(url)
    .pipe(catchError(this.handleError));
  }

/// ddang lam update khach hang
  modifyKhachHang(khachhangId:number ,data: KhachHang) {
    const url = `${this.REST_API_SERVER}/khachhang/` + khachhangId;
    return this.httpClient
    .put<any>(url, data ,this.httpOptions)
    .pipe(catchError(this.handleError));
  }
  modify1thuoctinhkhachhang(khachhangId:number ,data: KhachHang) {
    const url = `${this.REST_API_SERVER}/khachhang/` + khachhangId;
    return this.httpClient
    .put<any>(url, data ,this.httpOptions)
    .pipe(catchError(this.handleError));
  }
  modifyXe(xeId:number ,data: Xe) {
    const url = `${this.REST_API_SERVER}/xe/` + xeId;
    return this.httpClient
    .put<any>(url, data ,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  modifyHopDong(hopdongId:number ,data: Hopdong) {
    const url = `${this.REST_API_SERVER}/hopdongthue/` + hopdongId;
    return this.httpClient
    .put<any>(url, data ,this.httpOptions)
    .pipe(catchError(this.handleError));
  }
  public getJSON(): Observable<any> {
    return this.httpClient.get("db.json");
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
