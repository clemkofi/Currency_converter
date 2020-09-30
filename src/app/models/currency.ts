export class Currency {
  id: number;
  name: string;
  symbol: string;
  value: object;

  constructor(id: number, name: string, symbol: string, value: object) {
    this.id = id;
    this.name = name;
    this.symbol = symbol;
    this.value = value;
  }
}
