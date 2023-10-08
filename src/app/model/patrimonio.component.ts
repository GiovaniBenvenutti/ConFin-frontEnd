
export class Patrimonio {  

  idpatrimonio!: number;
  identidade!: number;
  levantamento!: Date;
  valor!: number;

  constructor(
    idpatrimonio?: number,
    identidade?: number,
    levantamento?: Date,
    valor?: number
  ) {
    this.idpatrimonio = idpatrimonio || 0;
    this.identidade = identidade || 0;
    this.levantamento = levantamento || new Date();
    this.valor = valor || 0;
  }

  toString(): string {
    return `Patrimonio: ${this.idpatrimonio}, ${this.identidade}, ${this.levantamento}, ${this.valor}`;
  }
}
