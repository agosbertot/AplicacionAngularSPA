import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-trajeta',
  templateUrl: './heroe-trajeta.component.html',
  styleUrls: ['./heroe-trajeta.component.css']
})
export class HeroeTrajetaComponent implements OnInit {

  //el @input heroe quiere decir que ese objeto heroe puede venir desde afuera, el input se usa para pasar cosas del padre(heroes.component) al hijo(heor-tarjeta)
//para el input se importa arriba Input
// el output se usa para la comunicacion del hijo hacia el padre, y se debe importar arriba el Output y el EventEmitter
  @Input() heroe: any = {};
  @Input() index:number;
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {

    this.heroeSeleccionado = new EventEmitter();

  }

  ngOnInit(): void {
  }

 verHeroe(){
 this.router.navigate(['/heroe',this.index]);
// this.heroeSeleccionado.emit(this.index);
 }

}
