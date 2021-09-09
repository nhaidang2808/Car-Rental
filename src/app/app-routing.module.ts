import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddKhachHangComponent } from './add-khach-hang/add-khach-hang.component';
import { AddXeComponent } from './add-xe/add-xe.component';
import { AddhangxeComponent } from './addhangxe/addhangxe.component';
import { AddhopdongComponent } from './addhopdong/addhopdong.component';
import { AddnhanvienComponent } from './addnhanvien/addnhanvien.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { EditKhachHangComponent } from './edit-khach-hang/edit-khach-hang.component';
import { EdithopdongComponent } from './edithopdong/edithopdong.component';
import { EditnhanvienComponent } from './editnhanvien/editnhanvien.component';
import { EditxeComponent } from './editxe/editxe.component';
import { HangxeComponent } from './hangxe/hangxe.component';
import { HopdongComponent } from './hopdong/hopdong.component';
import { KhachhangComponent } from './khachhang/khachhang.component';
import { NhanvienComponent } from './nhanvien/nhanvien.component';
import { AuthGuard } from './services/auth.guard';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { XeComponent } from './xe/xe.component';

const routes: Routes = [
  {path: '', component: TrangchuComponent, canActivate:[AuthGuard]},
  {path:'login', component: DangNhapComponent},
  {path:'trangchu', component:TrangchuComponent, canActivate:[AuthGuard]},
  {path:'khachhang', component: KhachhangComponent, canActivate:[AuthGuard]},
  {path: 'add-khachhang', component: AddKhachHangComponent, canActivate:[AuthGuard]},
  {path: 'edit-khachhang/:id', component: EditKhachHangComponent, canActivate:[AuthGuard]},
  {path: 'xe', component: XeComponent, canActivate:[AuthGuard]},
  {path: 'add-xe', component: AddXeComponent, canActivate:[AuthGuard]},
  {path: 'edit-xe/:id', component: EditxeComponent, canActivate:[AuthGuard]},
  {path: 'hopdong', component: HopdongComponent, canActivate:[AuthGuard]},
  {path: 'edit-hopdong/:id', component:EdithopdongComponent, canActivate:[AuthGuard]},
  {path: 'add-hopdong', component: AddhopdongComponent, canActivate:[AuthGuard]},
  {path: 'hangxe', component: HangxeComponent, canActivate:[AuthGuard]},
  {path: 'add-hangxe', component: AddhangxeComponent, canActivate:[AuthGuard]},
  {path: 'nhanvien', component: NhanvienComponent, canActivate:[AuthGuard]},
  {path: 'add-nhanvien', component: AddnhanvienComponent, canActivate:[AuthGuard]},
  {path: 'edit-nhanvien/:id', component: EditnhanvienComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
