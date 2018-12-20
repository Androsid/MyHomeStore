export class TablePage {
  slice(startIndex: number, arg1: number): any[] {
    throw new Error("Method not implemented.");
  }
  public totalCount: number;
  public rows: Array<any>;
  length: any;
  
  constructor(totalCount: number, rows: Array<any>) {
    this.totalCount = totalCount;
    this.rows = rows;
  }
}