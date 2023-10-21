import { AutocompleteFilterExample } from './../../shared/autocomplete-filter-example/autocomplete-filter-example.component';
import { EntidadesService } from './../../servico/entidades.service';
import { Component, SimpleChanges, ViewChild } from '@angular/core';
import { Patrimonio } from '../../model/patrimonio.component';
import { PatrimonioService } from '../../servico/patrimonio.service';
import { Entidade } from '../../model/entidades.component';
import { Subscription, finalize } from 'rxjs';

@Component({
  selector: 'app-principal-patrimonio',
  templateUrl: './patrimonio.cadastrar.html',
  styleUrls: ['../../../../src/styles.css', './patrimonio.cadastrar.html']
})
export class PrincipalPatrimonioComponent {

  @ViewChild(AutocompleteFilterExample) autocomplete!: AutocompleteFilterExample;
  patrimonio: Patrimonio = new Patrimonio();
  pickedEntidade: Entidade = new Entidade();
  btnCadastro: boolean = true;  
  btnBusca: boolean = true;
  buscando: boolean = false;
  tabela: boolean = true;
  PatrimonioArray: Patrimonio[] = []; 
  exibirColunas: string[] = ['idpatrimonio', 'identidade', 'levantamento', 'valor']; 
  private subscription: Subscription = new Subscription;

  constructor(public servicoPatrimonio: PatrimonioService, private servicoEntidade: EntidadesService) {};
  
  entidadesArray!: Entidade[];

  selecionarEntidades(): void {
    this.servicoEntidade.selecionar()
    .subscribe(
      retorno => {       
        this.entidadesArray = retorno;        
      },
      error => console.error('Erro:', error),
      () => console.log('Observable completado')
    );
  }
  
  selecionar(): void {
      this.servicoPatrimonio.selecionar()
      .subscribe(retorno => this.PatrimonioArray = retorno);    
  }
  
  entidadeEscolhida(ent: any) { 
    this.pickedEntidade = this.entidadesArray.find(e => 
      e.identidade === ent.identidade)!;    
    this.autocomplete.setRazaosocial(this.pickedEntidade.razaosocial);  
    this.patrimonio = ent;
    this.btnCadastro = false;
    this.tabela = false; 
  }

  
  
  formatDate(date: Date) {
    return new Date(date).toLocaleDateString('pt-BR');
  }    

  achaRazao(p: Patrimonio): string {
    let razao: string = this.entidadesArray.find(e => e.identidade === p.identidade)?.razaosocial!;
    return razao ;
  }
      
  limparCampo() {
    this.autocomplete.limpar();
  }

  buscar(){
    this.PatrimonioArray = this.PatrimonioArray.filter(p => 
      this.pickedEntidade.razaosocial.includes(this.autocomplete.getValor()));
    this.limparCampo();
    this.buscando = true;    
  }


  cadastrar(): void {
    this.servicoPatrimonio.cadastrar(this.patrimonio)
    .subscribe(retorno => {
      this.PatrimonioArray.push(retorno);
      this.patrimonio = new Patrimonio();
      this.limparCampo();
      alert('Patrimonio cadastrada com sucesso !');
    });
  }  

  selecionarPatrimonio(posicao: number): void {
    this.patrimonio = this.PatrimonioArray[posicao];
    this.btnCadastro = false;
    this.tabela = false;  
  }

  editar(): void {
    this.servicoPatrimonio.editar(this.patrimonio)
    .subscribe(retorno => {
      this.patrimonio = new Patrimonio();
      this.btnCadastro = true;
      this.tabela = true;
      this.limparCampo();
      alert('Patrimonio editada com sucesso !');
    });
  }

  remover(): void {
    this.servicoPatrimonio.remover(this.patrimonio.idpatrimonio)
    .subscribe(retorno => {
      let posicao = this.PatrimonioArray.findIndex(obj => {
        return obj.idpatrimonio == this.patrimonio.idpatrimonio;
      });

      this.PatrimonioArray.splice(posicao, 1);
      this.patrimonio = new Patrimonio();
      this.btnCadastro = true;
      this.tabela = true;
      alert('Patrimonio excluida com sucesso !');      
    });
  }

  cancelar(): void {
    this.patrimonio = new Patrimonio();
    this.btnCadastro = true;
    this.tabela = true;    
    this.selecionar();
    this.limparCampo();
    this.buscando = false;
  }
  
  ngOnInit() {
    this.selecionarEntidades(); 
    this.selecionar();
  }

  








  /* temque ver outra hora se os metodos abaixo nãosão inuteis */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['PatrimonioArray']) {
      this.selecionar();

      //this.loading = false;
    } 

    /*
    if (changes['patrimonio']) {    }
    */
  }
    
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  
}
