export class KhachHang {
  static map(arg0: (e: any) => void) {
    throw new Error('Method not implemented.');
  }
  public id:string = "";
  public hoten:string = "";
  public solanthue:string = "";
  public diachi:string = "";
  public sdt:string = ""
  public tinhtrang: any;
  public ngaysinh:string = "";

  constructor(id:string, hoten:string, solanthue:string, diachi:string, sdt:string, tinhtrang:any, ngaysinh:string) {
    this.id = id;
    this.hoten = hoten;
    this.solanthue = solanthue;
    this.diachi = diachi;
    this.sdt = sdt;
    this.tinhtrang = tinhtrang;
    this.ngaysinh = ngaysinh;
  }
}
