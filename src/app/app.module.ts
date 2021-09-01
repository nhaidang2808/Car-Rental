import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { KhachhangComponent } from './khachhang/khachhang.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { ProductService } from './services/product.service';
import { NavigationModule } from './navigation/navigation.module';
import { AddKhachHangComponent } from './add-khach-hang/add-khach-hang.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonService } from './services/common.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import { EditKhachHangComponent } from './edit-khach-hang/edit-khach-hang.component';
import { FilterKhachHangPipe } from './pipes/filter-khach-hang.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SolanthueFilterPipe } from './pipes/solanthue-filter.pipe';
import { HeaderComponent } from './header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { TinhtrangPipe } from './pipes/tinhtrang.pipe';
import { XeComponent } from './xe/xe.component';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    ProductComponent,
    LeftmenuComponent,
    KhachhangComponent,
    TrangchuComponent,
    AddKhachHangComponent,
    EditKhachHangComponent,
    FilterKhachHangPipe,
    SolanthueFilterPipe,
    HeaderComponent,
    DangNhapComponent,
    TinhtrangPipe,
    XeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NavigationModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatIconModule,
    MatTableModule,
    Ng2SearchPipeModule,
    NgxPaginationModule

  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [ProductService, CommonService],
  bootstrap: [AppComponent]
})

export class AppModule { }
