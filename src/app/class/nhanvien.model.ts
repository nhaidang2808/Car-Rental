export class Nhanvien {
  public id: string = "";
  public hoten:string = "";
  public cccd:string = "";
  public diachi:string = "";
  public ngaysinh:string = "";
  public sdt:string = "";
  public chucvu:string = "";
  public ngaynhanviec:string = "";

  constructor(id:string, hoten:string, cccd: string, diachi:string, ngaysinh:string, sdt:string, chucvu:string, ngaynhanviec:string) {
    this.id = id;
    this.hoten = hoten;
    this.cccd = cccd;
    this.diachi = diachi;
    this.ngaysinh = ngaysinh;
    this.sdt = sdt;
    this.chucvu = chucvu;
    this.ngaynhanviec = ngaynhanviec
  }
}
