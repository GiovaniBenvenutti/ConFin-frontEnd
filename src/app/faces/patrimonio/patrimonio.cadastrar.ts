import { AutocompleteFilterExample } from './../../shared/autocomplete-filter-example/autocomplete-filter-example.component';
import { EntidadesService } from './../../servico/entidades.service';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Patrimonio } from '../../model/patrimonio.component';
import { PatrimonioService } from '../../servico/patrimonio.service';
import { Entidade } from '../../model/entidades.component';
import { Subscription, finalize, map } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-principal-patrimonio',
  templateUrl: './patrimonio.cadastrar.html',
  styleUrls: ['../../../../src/styles.css', './patrimonio.cadastrar.html']
})
export class PrincipalPatrimonioComponent implements OnInit {

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
  _levantamento: Date = new Date();

  constructor(private servicoEntidade: EntidadesService,
              private servicoPatrimonio: PatrimonioService,
              private datePipe: DatePipe) {};
  
  entidadesArray!: Entidade[];

  selecionarEntidades(): void {
    this.servicoEntidade.selecionar()
    .pipe(
      map((retorno: any[]) => retorno
        .filter((entidade: { classe: string; }) => entidade.classe === "PATRIMONIO_BALANCO")
        //.filter((entidade: { active: boolean; }) => entidade.active === true)
      )
    )
    .subscribe(
      retorno => {       
        this.entidadesArray = retorno;        
      },
      error => console.error('Erro:', error),
      () => console.log('Observable completado')
    );
  }

  

  // TEM QUE FILTRAR O ARRA PATRIMONIO PARA QUE A ENTIDADE DE TODOS QUE SÃO ADD SEJAM DA CLASSE CORRETA
  selecionar(): void {
    this.servicoPatrimonio.selecionar()
    .subscribe(retorno => {
        this.PatrimonioArray = retorno.filter(patrimonio => 
            this.entidadesArray.some(entidade => entidade.identidade === patrimonio.identidade)
        );
    });    
  }

  


  patrimonioEscolhido(patri: Patrimonio) { 
    this.patrimonio = patri;  
    this.pickedEntidade = this.entidadesArray.find(e => e.identidade === patri.identidade)!; 
    if (this.pickedEntidade) {
        this.autocomplete.myControl.setValue(this.pickedEntidade.razaosocial);      
    } else {
        this.autocomplete.myControl.setValue('entidade nao encontrada');
    }
    this.btnCadastro = false;
    this.tabela = false;     
    console.log(this.pickedEntidade);
  }


  entidadeSelecionada(ent: Entidade) {
    this.patrimonio.identidade = ent.identidade;
  }  
  
  formatDate(date: Date) {
    return this.datePipe.transform(date);
  } 
  






  /*
  onDataSelecionada(data: string) {
    console.log(data);  // faz algo com a data
    alert(data);
  }
  */
  
  get levantamentoFormatado() {
  return this.datePipe.transform(this._levantamento, 'yyyy-MM-dd') || '';
  }
  set levantamentoFormatado(value: string) {
    this._levantamento = new Date(value);
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
      this.selecionar();
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
      this.selecionar();      
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

  achaRazao(p: Patrimonio): string {
    let razao: string = this.entidadesArray.find(e => e.identidade === p.identidade)?.razaosocial!;
    return razao ;
  }
   






  
  
}
