export class Xe {
  // static map(arg0: (e: any) => void) {
  //   throw new Error('Method not implemented.');
  // }
  public id:string = "";
  public tenxe:string = "";
  public hang:string = "";
  public loaixe:string = "";
  public mau:string = "";
  public purchDate: string = " ";
  public tinhtrang: any;
  public price_per_date:string = "";

  constructor(id:string, tenxe:string, hang:string, loaixe:string, mau:string, purchDate:string, tinhtrang:any, price_per_date:string) {
    this.id = id;
    this.tenxe = tenxe;
    this.hang = hang;
    this.loaixe = loaixe;
    this.purchDate = purchDate;
    this.tinhtrang = tinhtrang;
    this.mau = mau;
    this.price_per_date = price_per_date
  }
}
