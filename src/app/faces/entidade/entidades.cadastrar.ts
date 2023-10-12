import { Component, } from '@angular/core';
import { Entidade } from '../../model/entidades.component';
import { EntidadesService } from '../../servico/entidades.service';
import { EnumClasse } from "../../utils/classe.enum";
import { SubClasse } from '../../utils/subclasse.const';
import { exibeSubClasse } from '../../utils/subclasse.const';
import { exibeTipo } from '../../utils/tipo.const';

@Component({
  selector: 'app-principal-entidade',
  templateUrl: './entidades.cadastrar.html',
  styleUrls: ['../../../../src/styles.css','./entidades.cadastrar.html']
})
export class PrincipalEntidadeComponent {

  entidade: Entidade = new Entidade();

  classes = Object.values(EnumClasse);  
  subClasses: any ;  
  tipos: any ;
  btnCadastro: boolean = true;  
  btnBusca: boolean = true;
  tabela: boolean = true;
  entidadesArray: Entidade[] = [];
  exibirColunas: string[] = ['identidade', 'razaosocial', 'classe', 'subclasse', 'tipo'];
  EnumClasse: any;
  SubClasse: any;
  pickedEntidade: Entidade = new Entidade();
    
  onClasseChange(selectedValue1: string): void {
    // Access a property or method of the SubClasse constant to update the subClasses array
    this.subClasses = exibeSubClasse(selectedValue1, SubClasse);
  }      
  onSubClasseChange(selectedValue2: string) {
    // Access a property or method of the tipo constant to update the tipos array
    this.tipos = exibeTipo(selectedValue2);
  }    

  constructor(public servicoEntidade: EntidadesService) {};

  
  entidadeEscolhida(ent: Entidade) {
    this.entidade = ent;
    this.btnCadastro = false;
    this.tabela = false;
  }



  selecionar(): void {
    this.servicoEntidade.selecionar()
    .subscribe(retorno => this.entidadesArray = retorno);
  }  

  cadastrar(): void {
    this.servicoEntidade.cadastrar(this.entidade)
    .subscribe(retorno => {
      this.entidadesArray.push(retorno);
      this.entidade = new Entidade();
      alert('Entidade cadastrada com sucesso !');
    });
  }

  buscar(): void {
    this.servicoEntidade.buscar(this.entidade.razaosocial)
      .subscribe(retorno => {
        if (retorno) {
          const posicao = this.entidadesArray.findIndex(entidade => 
            entidade.razaosocial === this.entidade.razaosocial);
          if (posicao >=0){  
          this.selecionarEntidade(posicao);
          alert('Entidade encontrada');
          } else {             
            alert('Entidade não encontrada');
            this.entidade.razaosocial = "";
          }
        } 
      });
  }

  selecionarEntidade(posicao: number): void {
    this.entidade = this.entidadesArray[posicao];
    this.btnCadastro = false;
    this.tabela = false;
  }

  editar(): void {
    this.servicoEntidade.editar(this.entidade)
    .subscribe(retorno => {
      this.entidade = new Entidade();
      this.btnCadastro = true;
      this.tabela = true;
      alert('Entidade editada com sucesso !');
    });
  }

  remover(): void {
    this.servicoEntidade.remover(this.entidade.identidade)
    .subscribe(retorno => {
      let posicao = this.entidadesArray.findIndex(obj => {
        return obj.identidade == this.entidade.identidade;
      });

      this.entidadesArray.splice(posicao, 1);
      this.entidade = new Entidade();
      this.btnCadastro = true;
      this.tabela = true;
      alert('Entidade excluida com sucesso !');      
    });
  }

  cancelar(): void {
    this.entidade = new Entidade();
    this.btnCadastro = true;
    this.tabela = true;    
    this.selecionar();
  }

  ngOnInit() {
    this.selecionar();
  }
}
