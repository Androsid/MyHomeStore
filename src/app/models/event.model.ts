export class WFMEvent {
    constructor(
      public name: string,
      public price: number,
      public category: number,
      public Qty: number,
      public id?: string
    ) {}
  }