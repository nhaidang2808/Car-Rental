
export class Hopdong {
  public id:string = "";
  public nguoithue:string = "";
  public songaythue:string = "";
  public ngaygiaoxe:string = "";
  public ngaytraxe:string = "";
  public gia:string = "";
  public trangthai:any;
  public trehan:any;
  public phitrehan:string = "";
  public bks_xethue:string = "";
  public cccd:string = "";

  constructor(id:string, nguoithue:string, songaythue:string, ngaygiaoxe:string, ngaytraxe:string, gia:string, trangthai:any, trehan:any, cccd:string, phitrehan:string, bks_xethue:string) {
    this.id = id;
    this.nguoithue = nguoithue;
    this.songaythue = songaythue;
    this.ngaygiaoxe = ngaygiaoxe;
    this.ngaytraxe = ngaytraxe;
    this.gia = gia;
    this.trangthai = trangthai;
    this.trehan = trehan;
    this.phitrehan = phitrehan;
    this.bks_xethue = bks_xethue;
    this.cccd = cccd;
  }
}

