import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  public heroes: string[] = ['Aaaa','Bbbb','Cccc','Dddd'];
  public heroeBorrado: string = '';

  public borrarHeroe() : void {
    this.heroeBorrado=this.heroes?.shift() || '';
    console.log(this.heroeBorrado);

  } 



}
