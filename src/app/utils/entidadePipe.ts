
import { Pipe, PipeTransform } from '@angular/core';
import { Entidade } from '../model/entidades.component';

@Pipe({name: 'entidadePipe'})
export class EntidadePipe implements PipeTransform {
  transform(entidade: Entidade): string {
    return `${entidade.identidade} - ${entidade.razaosocial}`;
  }
}


/*

<p>{{ entidade | entidadePipe }}</p>

*/