
export class Entidade {
  identidade!: number;
  razaosocial!: string;
  classe!: string;
  subclasse!: string;  
  tipo!: string;
  infad!: string;
  active!: boolean;
  
  constructor(
    identidade?: number,
    razaosocial?: string,
    classe?: string,
    subclasse?: string,
    tipo?: string,
    infad?: string,
    active?: boolean
  ) {
    this.identidade = identidade || 0;
    this.razaosocial = razaosocial || '';
    this.classe = classe || '';
    this.subclasse = subclasse || '';  
    this.tipo = tipo || '';
    this.infad = infad || '';
    this.active = true;
  }
  
  toString(): string {
    return `Entidade: ${this.identidade}, ${this.razaosocial}, 
                      ${this.classe}, ${this.subclasse}, 
                      ${this.tipo}, ${this.infad}, ${this.active}`;
  }  
}
