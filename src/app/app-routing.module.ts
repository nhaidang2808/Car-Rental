import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddKhachHangComponent } from './add-khach-hang/add-khach-hang.component';
import { AddXeComponent } from './add-xe/add-xe.component';
import { AddhopdongComponent } from './addhopdong/addhopdong.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { EditKhachHangComponent } from './edit-khach-hang/edit-khach-hang.component';
import { EdithopdongComponent } from './edithopdong/edithopdong.component';
import { EditxeComponent } from './editxe/editxe.component';
import { HopdongComponent } from './hopdong/hopdong.component';
import { KhachhangComponent } from './khachhang/khachhang.component';
import { AuthGuard } from './services/auth.guard';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { XeComponent } from './xe/xe.component';

const routes: Routes = [
  {path: '', component: TrangchuComponent, canActivate:[AuthGuard]},
  {path:'login', component: DangNhapComponent},
  {path:'trangchu', component:TrangchuComponent},
  {path:'khachhang', component: KhachhangComponent},
  {path: 'add-khachhang', component: AddKhachHangComponent},
  {path: 'edit-khachhang/:id', component: EditKhachHangComponent},
  {path: 'xe', component: XeComponent},
  {path: 'add-xe', component: AddXeComponent},
  {path: 'edit-xe/:id', component: EditxeComponent},
  {path: 'hopdong', component: HopdongComponent},
  {path: 'edit-hopdong/:id', component:EdithopdongComponent},
  {path: 'add-hopdong', component: AddhopdongComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
