
export class Entidade {
  identidade!: number;
  razaosocial!: string;
  classe!: string;
  subclasse!: string;  
  tipo!: string;
  infad!: string;
  
  constructor(
    identidade?: number,
    razaosocial?: string,
    classe?: string,
    subclasse?: string,
    tipo?: string,
    infad?: string
  ) {
    this.identidade = identidade || 0;
    this.razaosocial = razaosocial || '';
    this.classe = classe || '';
    this.subclasse = subclasse || '';  
    this.tipo = tipo || '';
    this.infad = infad || '';
  }
  
  toString(): string {
    return `Entidade: ${this.identidade}, ${this.razaosocial}, ${this.classe}, ${this.subclasse}, ${this.tipo}, ${this.infad}`;
  }  
}
